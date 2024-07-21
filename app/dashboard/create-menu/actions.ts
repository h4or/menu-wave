"use server";

import { createMenu, getUserMenus } from "@/data-access/menus";
import { getCurrentUser } from "@/data-access/users";
import { Menu } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { calculateUserLimits } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createMenuAction(menuData: Omit<Menu, "id" | "userId">) {
  const session = await getSession();
  const user = await getCurrentUser();

  if (!session || !user) {
    throw new Error("You must be logged in to create a business");
  }
  const menuCount = (await getUserMenus()).length;
  const userPlanMenuLimit = calculateUserLimits("menus", user.plan as string);
  if (menuCount >= userPlanMenuLimit) {
    throw new Error("You have reached the limit of menus you can create");
  }
  const menu = await createMenu(menuData, session.user.id);

  revalidatePath("/dashboard");
  redirect("/dashboard");

  return menu;
}
