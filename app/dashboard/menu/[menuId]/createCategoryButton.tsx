"use client";

import { createCategory } from "@/data-access/categories";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { createCategoryAction } from "./actions";

export default function CreateCategoryButton({ menuId }: { menuId: string }) {
  const router = useRouter();
  return (
    <Button size="md" onClick={async () => await createCategoryAction(menuId)}>
      Create category
    </Button>
  );
}
