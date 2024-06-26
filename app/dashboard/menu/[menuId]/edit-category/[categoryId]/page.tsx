import { title } from "@/components/primitives";
import { getCategoryById } from "@/data-access/categories";
import React from "react";
import { EditCategoryForm } from "./editCategoryForm";

export default async function EditCategoryPage({
  params,
}: {
  params: { categoryId: string; menuId: string };
}) {
  const category = await getCategoryById(params.categoryId);
  if (!category) return <div>No category by that id</div>;
  return (
    <div>
      <h1 className={title({ size: "sm" })}>Edit Category</h1>
      <div className="pt-4">
        <EditCategoryForm category={category} />
      </div>
    </div>
  );
}
