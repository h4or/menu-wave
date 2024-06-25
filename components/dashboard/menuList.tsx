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

import { EditIcon, DeleteIcon, EyeIcon } from "../icons";
import { Menu } from "@/db/schema";

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

export default function MenuListComponent({ menus }: { menus: Menu[] }) {
  const renderCell = React.useCallback((menu: Menu, columnKey: ColumnKey) => {
    if (columnKey === "actions") {
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Details">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EyeIcon />
            </span>
          </Tooltip>
          <Tooltip content="Edit user">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EditIcon />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Delete user">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <DeleteIcon />
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
            color={statusColorMap[menu.status]}
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
              <TableCell>{renderCell(item, columnKey as ColumnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
