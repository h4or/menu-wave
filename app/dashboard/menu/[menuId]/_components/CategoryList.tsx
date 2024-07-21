import { title } from "@/components/primitives";
import { getMenuCategories } from "@/data-access/categories";
import { getMenuById } from "@/data-access/menus";
import { getCurrentUser } from "@/data-access/users";
import { calculateUserLimits } from "@/lib/utils";
import React from "react";
import CategoryListComponent from "./categoryListComponent";
import CreateCategoryButton from "./createCategoryButton";

export default async function CategoryList({ menuId }: { menuId: string }) {
  const user = await getCurrentUser();
  const menu = await getMenuById(menuId);
  if (!menu)
    return (
      <div>
        <h1 className={title({ size: "sm" })}>Menu not found</h1>
      </div>
    );
  const categories = await getMenuCategories(menuId);
  const categories_count = categories.length;
  const userCategoryLimit = calculateUserLimits(
    "categories",
    user?.plan as string
  );
  return (
    <div>
      <h1 className={title({ size: "sm" })}>{menu.name}</h1>
      <div className="grid lg:grid-cols-2 gap-4 pt-10 sm:pt-14">
        <div className=" overflow-y-hidden flex flex-col border border-default-200 dark:border-default-100 px-2 py-4 rounded-lg">
          <CategoryListComponent categories={categories} />
          <CreateCategoryButton
            menuId={menuId}
            userCategoryLimit={userCategoryLimit}
            categories_count={categories_count}
          />
        </div>
      </div>
    </div>
  );
}
