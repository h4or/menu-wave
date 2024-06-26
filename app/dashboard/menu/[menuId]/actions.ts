"use server";

import { createCategory, deleteCategory } from "@/data-access/categories";
import { getMenuById } from "@/data-access/menus";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCategoryAction(menuId: string) {
  const session = await getSession();

  if (!session) {
    throw new Error("You must be logged in to create a business");
  }

  const menu = await getMenuById(menuId);

  if (menu?.userId !== session.user.id) {
    throw new Error("User not authorized");
  }

  await createCategory(
    {
      name: "Example",
      icon: "data",
      position: 0,
    },
    menu.id
  );
  revalidatePath(`/dashboard/menu/${menuId}`);
  redirect(`/dashboard/menu/${menuId}`);
}

export async function removeCategoryAction(categoryId: string, menuId: string) {
  const session = await getSession();

  if (!session) {
    throw new Error("You must be logged in to remove category");
  }

  const menu = await getMenuById(menuId);

  if (menu?.userId !== session.user.id) {
    throw new Error("User not authorized");
  }

  await deleteCategory(categoryId);
  revalidatePath(`/dashboard/menu/${menuId}`);
  redirect(`/dashboard/menu/${menuId}`);
}
