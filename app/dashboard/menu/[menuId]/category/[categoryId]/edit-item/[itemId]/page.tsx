import { title } from "@/components/primitives";
import { getCategoryById } from "@/data-access/categories";
import React from "react";
import { EditItemForm } from "./editItemForm";
import { getItemById } from "@/data-access/items";
import BreadcrumbsComponent from "@/components/breadcrumbs";

export default async function EditItemPage({
  params,
}: {
  params: { itemId: string; categoryId: string; menuId: string };
}) {
  const item = await getItemById(params.itemId);
  if (!item) return <div>No item by that id</div>;
  return (
    <div>
      <BreadcrumbsComponent
        path={{
          Dashboard: { location: `/dashboard` },
          Menu: { location: `/dashboard/menu/${params.menuId}` },
          Category: {
            location: `/dashboard/menu/${params.menuId}/category/${params.categoryId}`,
          },
          "Edit Item": {
            location: `/dashboard/menu/${params.menuId}/category/${params.categoryId}/edit-item/${params.itemId}`,
          },
        }}
      />
      <h1 className={title({ size: "sm" })}>Edit Item</h1>
      <div className="pt-4">
        <EditItemForm item={item} />
      </div>
    </div>
  );
}
