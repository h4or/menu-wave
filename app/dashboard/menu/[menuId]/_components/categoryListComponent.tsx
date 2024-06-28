"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  Button,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import { EditIcon, DeleteIcon, EyeIcon } from "@/components/icons";
import { Category } from "@/db/schema";
import Link from "next/link";
import { removeCategoryAction } from "./actions";
import { useRouter } from "next/navigation";
import Base64Image from "@/components/Base64Image";

type CategoryListColumnType = {
  name: string;
  uid: string;
};
type ColumnKey = keyof Category | "actions";

const columns: CategoryListColumnType[] = [
  { name: "Name", uid: "name" },
  { name: "Icon", uid: "icon" },
  { name: "Actions", uid: "actions" },
];

async function removeCategory(
  categoryId: string | null,
  menuId: string | null
) {
  if (!menuId) return;
  if (!categoryId) return;
  await removeCategoryAction(categoryId, menuId);
}

export default function CategoryListComponent({
  categories,
}: {
  categories: Category[];
}) {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [categoryToRemove, setCategoryToRemove] = React.useState<string | null>(
    null
  );
  const [categoryToRemoveMenuId, setCategoryToRemoveMenuId] = React.useState<
    string | null
  >(null);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const renderCell = React.useCallback(
    (category: Category, columnKey: ColumnKey) => {
      if (columnKey === "actions") {
        return (
          <div className="relative flex items-center gap-2 pl-14">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Link
                  href={`/dashboard/menu/${category.menuId}/category/${category.id}`}
                >
                  <EyeIcon />
                </Link>
              </span>
            </Tooltip>
            <Tooltip content="Edit menu">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <div
                  onClick={() =>
                    router.push(
                      `/dashboard/menu/${category.menuId}/edit-category/${category.id}`
                    )
                  }
                >
                  <EditIcon />
                </div>
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete menu">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <div
                  onClick={() => {
                    setCategoryToRemove(category.id);
                    setCategoryToRemoveMenuId(category.menuId);
                    onOpen();
                  }}
                >
                  <DeleteIcon />
                </div>
              </span>
            </Tooltip>
          </div>
        );
      }

      const cellValue = category[columnKey];

      switch (columnKey) {
        case "name":
          return (
            <div>
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );
        case "icon":
          return (
            <div>
              {cellValue && (
                <Base64Image
                  base64String={cellValue.toString()}
                  className="size-8"
                />
              )}
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <>
      <Table className="md:w-[400px]">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={categories}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(item, columnKey as ColumnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure you want to delete this category?
              </ModalHeader>
              <ModalBody>
                <p>
                  After deleting there will be no way to recover this category.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  isLoading={isDeleting}
                  onPress={() => {
                    setIsDeleting(true);
                    removeCategory(
                      categoryToRemove,
                      categoryToRemoveMenuId
                    ).then(() => {
                      setIsDeleting(false);
                      onClose();
                    });
                  }}
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  isDisabled={isDeleting}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
