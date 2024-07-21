import { title } from "@/components/primitives";
import { getCategoryById } from "@/data-access/categories";
import React from "react";
import { EditCategoryForm } from "./editCategoryForm";
import BreadcrumbsComponent from "@/components/breadcrumbs";

export default async function EditCategoryPage({
  params,
}: {
  params: { categoryId: string; menuId: string };
}) {
  const category = await getCategoryById(params.categoryId);
  if (!category) return <div>No category by that id</div>;
  return (
    <div>
      <BreadcrumbsComponent
        path={{
          Dashboard: { location: `/dashboard` },
          Menu: { location: `/dashboard/menu/${params.menuId}` },
          "Edit Category": {
            location: `/dashboard/menu/${params.menuId}/edit-category/${params.categoryId}`,
          },
        }}
      />
      <h1 className={title({ size: "sm" })}>Edit Category</h1>
      <div className="pt-4">
        <EditCategoryForm category={category} />
      </div>
    </div>
  );
}
