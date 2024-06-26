"use client";

import { createCategory } from "@/data-access/categories";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { createItemAction } from "./actions";

export default function CreateItemButton({
  menuId,
  categoryId,
}: {
  menuId: string;
  categoryId: string;
}) {
  return (
    <Button size="md" onClick={async () => await createItemAction(categoryId)}>
      Create item
    </Button>
  );
}
