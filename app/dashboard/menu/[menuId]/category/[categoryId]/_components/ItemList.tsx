import { title } from "@/components/primitives";
import { Category, Item } from "@/db/schema";
import React from "react";
import ItemListComponent from "./itemListComponent";
import CreateItemButton from "./createItemButton";
import { getCurrentUser } from "@/data-access/users";
import { getCategoryById } from "@/data-access/categories";
import { getCategoryItems } from "@/data-access/items";
import { calculateUserLimits } from "@/lib/utils";

export default async function ItemList({ categoryId }: { categoryId: string }) {
  const user = await getCurrentUser();
  const category = await getCategoryById(categoryId);
  if (!category)
    return (
      <div>
        <h1 className={title({ size: "sm" })}>Category not found</h1>
      </div>
    );
  const items = await getCategoryItems(category.id);
  const items_count = items.length;
  const userItemLimit = calculateUserLimits("items", user?.plan as string);
  return (
    <div>
      <h1 className={title({ size: "sm" })}>{category.name}</h1>
      <div className="grid lg:grid-cols-2 gap-4 pt-10 sm:pt-14">
        <div className=" overflow-y-hidden flex flex-col border border-default-200 dark:border-default-100 px-2 py-4 rounded-lg">
          <ItemListComponent items={items} />
          <CreateItemButton
            categoryId={category.id}
            items_count={items_count}
            userItemLimit={userItemLimit}
          />
        </div>
      </div>
    </div>
  );
}
