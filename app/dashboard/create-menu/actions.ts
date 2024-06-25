"use server";

import { createMenu } from "@/data-access/menus";
import { Menu } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createMenuAction(menuData: Omit<Menu, "id" | "userId">) {
  const session = await getSession();

  if (!session) {
    throw new Error("You must be logged in to create a business");
  }

  const menu = await createMenu(menuData, session.user.id);

  revalidatePath("/dashboard");

  return menu;
}
