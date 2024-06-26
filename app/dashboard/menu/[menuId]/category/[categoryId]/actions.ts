"use server";

import {
  createCategory,
  deleteCategory,
  getCategoryById,
} from "@/data-access/categories";
import { createItem, deleteItem } from "@/data-access/items";
import { getMenuById } from "@/data-access/menus";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createItemAction(categoryId: string) {
  const session = await getSession();

  if (!session) {
    throw new Error("You must be logged in to create a item");
  }

  const category = await getCategoryById(categoryId);

  if (!category) {
    throw new Error("Category not found");
  }

  const menu = await getMenuById(category.menuId);

  if (menu?.userId !== session.user.id) {
    throw new Error("User not authorized");
  }

  await createItem(
    {
      name: "Example",
      description: "data",
      price: 2,
      position: 0,
    },
    category.id,
    menu.id
  );
  revalidatePath(`/dashboard/menu/${menu.id}/category/${category.id}`);
  redirect(`/dashboard/menu/${menu.id}/category/${category.id}`);
}

export async function removeItemAction(
  itemId: string,
  categoryId: string,
  menuId: string
) {
  const session = await getSession();

  if (!session) {
    throw new Error("You must be logged in to remove item");
  }

  const menu = await getMenuById(menuId);

  if (menu?.userId !== session.user.id) {
    throw new Error("User not authorized");
  }

  await deleteItem(itemId);
  revalidatePath(`/dashboard/menu/${menuId}/category/${categoryId}`);
  redirect(`/dashboard/menu/${menuId}/category/${categoryId}`);
}
