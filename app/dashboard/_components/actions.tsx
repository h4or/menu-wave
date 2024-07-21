"use server";

import { getMenuById, removeMenu } from "@/data-access/menus";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function removeMenuAction(menuId: string) {
  const session = await getSession();

  if (!session) {
    throw new Error("You must be logged in to remove menu");
  }

  const menu = await getMenuById(menuId);

  if (menu?.userId !== session.user.id) {
    throw new Error("User not authorized");
  }

  await removeMenu(menuId);
  revalidatePath(`/dashboard/`);
  redirect(`/dashboard`);
}
