import { eq } from "drizzle-orm";
import { db } from "@/db";
import { Item, item } from "@/db/schema";

export async function getCategoryItems(categoryId: string) {
  return await db.query.item.findMany({
    where: eq(item.categoryId, categoryId),
  });
}

export async function getItemById(itemId: string) {
  return await db.query.item.findFirst({
    where: eq(item.id, itemId),
  });
}

export async function createItem(
  itemData: Omit<Item, "id" | "categoryId" | "menuId">,
  categoryId: string,
  menuId: string,
) {
  const inserted = await db
    .insert(item)
    .values({
      ...itemData,
      categoryId,
      menuId,
    })
    .returning();

  return inserted[0];
}

export async function editItem(itemData: Item) {
  const updated = await db
    .update(item)
    .set(itemData)
    .where(eq(item.id, itemData.id))
    .returning();

  return updated[0];
}

export async function deleteItem(itemId: string) {
  await db.delete(item).where(eq(item.id, itemId));
}
