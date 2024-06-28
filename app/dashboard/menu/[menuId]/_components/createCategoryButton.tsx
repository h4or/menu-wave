"use client";

import { Button, Divider } from "@nextui-org/react";
import { createCategoryAction } from "./actions";
import { useState } from "react";

export default function CreateCategoryButton({
  menuId,
  userCategoryLimit,
  categories_count,
}: {
  menuId: string;
  userCategoryLimit: number;
  categories_count: number;
}) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex flex-row items-center gap-4 pt-2">
      <Button
        size="md"
        isLoading={isLoading}
        onClick={async () => {
          setIsLoading(true);
          await createCategoryAction(menuId);
          setIsLoading(false);
        }}
      >
        {isLoading ? "Creating..." : "Create Category"}
      </Button>
      <Divider orientation="vertical" />
      <p className="text-gray-400">
        You have {userCategoryLimit - categories_count} categories left
      </p>
    </div>
  );
}
