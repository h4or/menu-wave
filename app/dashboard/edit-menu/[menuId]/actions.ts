"use server";

import { editMenu } from "@/data-access/menus";
import { Menu } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editMenuAction(menuData: Menu) {
  const session = await getSession();

  if (!session) {
    throw new Error("You must be logged in to create a business");
  }

  const menu = await editMenu(menuData);

  revalidatePath("/dashboard");
  redirect("/dashboard");

  return menu;
}
