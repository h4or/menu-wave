"use server";

import { editCategory, getCategoryById } from "@/data-access/categories";
import { getMenuById } from "@/data-access/menus";
import { Category } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editCategoryAction(category: Category) {
  const session = await getSession();

  if (!session) {
    throw new Error("You must be logged in to create a business");
  }

  const menu = await getMenuById(category.menuId);

  if (menu?.userId !== session.user.id) {
    throw new Error("User not authorized");
  }

  await editCategory(category);

  revalidatePath(`/dashboard/menu/${category.menuId}`);
  redirect(`/dashboard/menu/${category.menuId}`);

  return menu;
}
