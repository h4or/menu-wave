import { title } from "@/components/primitives";
import { getCategoryById } from "@/data-access/categories";
import React from "react";
import { EditItemForm } from "./editItemForm";
import { getItemById } from "@/data-access/items";

export default async function EditItemPage({
  params,
}: {
  params: { itemId: string; categoryId: string; menuId: string };
}) {
  const item = await getItemById(params.itemId);
  if (!item) return <div>No item by that id</div>;
  return (
    <div>
      <h1 className={title({ size: "sm" })}>Edit Item</h1>
      <div className="pt-4">
        <EditItemForm item={item} />
      </div>
    </div>
  );
}
