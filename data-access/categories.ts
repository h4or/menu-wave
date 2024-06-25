import { eq } from "drizzle-orm";
import { db } from "@/db";
import { Category, category } from "@/db/schema";

export async function getMenuCategories(menuId: string) {
  return await db.query.category.findMany({
    where: eq(category.menuId, menuId),
  });
}

export async function getCategoryById(categoryId: string) {
  return await db.query.category.findFirst({
    where: eq(category.id, categoryId),
  });
}

export async function createCategory(
  categoryData: Omit<Category, "id" | "menuId">,
  menuId: string,
) {
  const inserted = await db
    .insert(category)
    .values({ ...categoryData, menuId })
    .returning();

  return inserted[0];
}

export async function editCategory(categoryData: Category) {
  const updated = await db
    .update(category)
    .set(categoryData)
    .where(eq(category.id, categoryData.id))
    .returning();

  return updated[0];
}

export async function deleteCategory(categoryId: string) {
  await db.delete(category).where(eq(category.id, categoryId));
}
