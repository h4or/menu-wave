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
import { Category, Item } from "@/db/schema";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Base64Image from "@/components/Base64Image";
import { removeItemAction } from "./actions";

type ItemListColumnType = {
  name: string;
  uid: string;
};
type ColumnKey = keyof Item | "actions";

const columns: ItemListColumnType[] = [
  { name: "Name", uid: "name" },
  { name: "Description", uid: "description" },
  { name: "Price", uid: "price" },
  { name: "Actions", uid: "actions" },
];

async function removeItem(
  itemId: string | null,
  categoryId: string | null,
  menuId: string | null
) {
  if (!menuId) return;
  if (!categoryId) return;
  if (!itemId) return;
  await removeItemAction(itemId, categoryId, menuId);
}

export default function ItemListComponent({ items }: { items: Item[] }) {
  const [isDeleting, setIsDeleting] = React.useState(false);
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [itemToRemove, setItemToRemove] = React.useState<string | null>(null);
  const [itemToRemoveMenuId, setItemToRemoveMenuId] = React.useState<
    string | null
  >(null);
  const [itemToRemoveCategoryId, setItemToRemoveCategoryId] = React.useState<
    string | null
  >(null);
  const renderCell = React.useCallback((item: Item, columnKey: ColumnKey) => {
    if (columnKey === "actions") {
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Edit item">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <div
                onClick={() =>
                  router.push(
                    `/dashboard/menu/${item.menuId}/category/${item.categoryId}/edit-item/${item.id}`
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
                  setItemToRemove(item.id);
                  setItemToRemoveMenuId(item.menuId);
                  setItemToRemoveCategoryId(item.categoryId);
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

    const cellValue = item[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <div>
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "description":
        return (
          <div>
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "price":
        return (
          <div>
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

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
        <TableBody items={items}>
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
                Are you sure you want to delete this item?
              </ModalHeader>
              <ModalBody>
                <p>After deleting there will be no way to recover this item.</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  isLoading={isDeleting}
                  onPress={() => {
                    setIsDeleting(true);
                    removeItem(
                      itemToRemove,
                      itemToRemoveCategoryId,
                      itemToRemoveMenuId
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
