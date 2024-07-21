"use client";

import { createCategory } from "@/data-access/categories";
import { Button, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { createItemAction } from "./actions";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CreateItemButton({
  userItemLimit,
  items_count,
  categoryId,
}: {
  categoryId: string;
  userItemLimit: number;
  items_count: number;
}) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex flex-row items-center gap-4 pt-2">
      <Button
        size="md"
        isLoading={isLoading}
        onClick={async () => {
          setIsLoading(true);
          await createItemAction(categoryId);
          setIsLoading(false);
          toast.success("Item created successfully");
        }}
      >
        {isLoading ? "Creating..." : "Create Item"}
      </Button>
      <Divider orientation="vertical" />
      <p className="text-gray-400">
        You have {userItemLimit - items_count} items left
      </p>
    </div>
  );
}
