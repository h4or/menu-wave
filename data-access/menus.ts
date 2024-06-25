import { eq } from "drizzle-orm";
import { db } from "@/db";
import { Menu, menu } from "@/db/schema";
import { getSession } from "@/lib/auth";

export async function getMenuById(menuId: string) {
  return await db.query.menu.findFirst({
    where: eq(menu.id, menuId),
  });
}

export async function getUserMenus() {
  const session = await getSession();

  if (!session) {
    throw new Error("User not authenticated");
  }

  return await db.query.menu.findMany({
    where: eq(menu.userId, session.user.id),
  });
}

export async function createMenu(
  menuData: Omit<Menu, "id" | "userId">,
  userId: string
) {
  const inserted = await db
    .insert(menu)
    .values({ ...menuData, userId })
    .returning();

  return inserted[0];
}

export async function editMenu(menuData: Menu) {
  const updated = await db
    .update(menu)
    .set(menuData)
    .where(eq(menu.id, menuData.id))
    .returning();

  return updated[0];
}

export async function removeMenu(menuId: string) {
  await db.delete(menu).where(eq(menu.id, menuId));
}
