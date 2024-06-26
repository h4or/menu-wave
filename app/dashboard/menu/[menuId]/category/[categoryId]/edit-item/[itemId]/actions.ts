"use server";

import { editCategory, getCategoryById } from "@/data-access/categories";
import { editItem } from "@/data-access/items";
import { getMenuById } from "@/data-access/menus";
import { Item } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editItemAction(item: Item) {
  const session = await getSession();

  if (!session) {
    throw new Error("You must be logged in to create a business");
  }

  const menu = await getMenuById(item.menuId);

  if (menu?.userId !== session.user.id) {
    throw new Error("User not authorized");
  }

  await editItem(item);

  revalidatePath(`/dashboard/menu/${item.menuId}/category/${item.categoryId}`);
  redirect(`/dashboard/menu/${item.menuId}/category/${item.categoryId}`);
}
