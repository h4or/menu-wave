import { EditMenuForm } from "./editMenuForm";
import { title } from "@/components/primitives";
import { getMenuById } from "@/data-access/menus";
import React from "react";

export default async function EditMenuPage({
  params,
}: {
  params: { menuId: string };
}) {
  const menu = await getMenuById(params.menuId);
  if (!menu) return <div>No menu by that id</div>;
  return (
    <div>
      <h1 className={title({ size: "sm" })}>Edit Menu</h1>
      <div className="pt-4">
        <EditMenuForm menu={menu} />
      </div>
    </div>
  );
}
