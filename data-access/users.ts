import { eq } from "drizzle-orm";
import { db } from "@/db";
import { users } from "@/db/schema";
import { getSession } from "@/lib/auth";

export async function getCurrentUser() {
  const session = await getSession();

  if (!session) {
    throw new Error("User not authenticated");
  }

  return await db.query.users.findFirst({
    where: eq(users.id, session.user.id),
  });
}

export async function deleteUser(userId: string) {
  await db.delete(users).where(eq(users.id, userId));
}
