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
import { Menu } from "@/db/schema";
import Link from "next/link";
import { removeMenuAction } from "./actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type MenuListColumnType = {
  name: string;
  uid: string;
};
type ColumnKey = keyof Menu | "actions";

const statusColorMap: {
  [key: string]:
    | "success"
    | "warning"
    | "default"
    | "primary"
    | "secondary"
    | "danger"
    | undefined;
} = {
  active: "success",
  draft: "warning",
};

const columns: MenuListColumnType[] = [
  { name: "Name", uid: "name" },
  { name: "Status", uid: "status" },
  { name: "Actions", uid: "actions" },
];

async function removeMenu(menuId: string | null) {
  if (!menuId) return;
  await removeMenuAction(menuId);
}

export default function MenuListComponent({ menus }: { menus: Menu[] }) {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [menuToRemove, setMenuToRemove] = React.useState<string | null>(null);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const renderCell = React.useCallback((menu: Menu, columnKey: ColumnKey) => {
    if (columnKey === "actions") {
      return (
        <div className="relative flex items-center gap-2 pl-8">
          <Tooltip content="Details">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <Link href={`/dashboard/menu/${menu.id}`}>
                <EyeIcon />
              </Link>
            </span>
          </Tooltip>
          <Tooltip content="Edit menu">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <div
                onClick={() => router.push(`/dashboard/edit-menu/${menu.id}`)}
              >
                <EditIcon />
              </div>
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Delete menu">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <div
                onClick={() => {
                  setMenuToRemove(menu.id);
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

    const cellValue = menu[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <div>
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[menu.status || "draft"]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
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
        <TableBody items={menus}>
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
                Are you sure you want to delete this menu?
              </ModalHeader>
              <ModalBody>
                <p>After deleting there will be no way to recover this menu.</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  isLoading={isDeleting}
                  onPress={() => {
                    setIsDeleting(true);
                    removeMenu(menuToRemove)
                      .then(() => {
                        setIsDeleting(false);
                        onClose();
                        toast.success("Menu deleted successfully");
                      })
                      .catch(() => {
                        setIsDeleting(false);
                        onClose();
                        toast(
                          "An error occurred while deleting the menu. Please try again."
                        );
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
