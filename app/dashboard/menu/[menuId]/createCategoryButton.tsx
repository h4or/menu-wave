"use client";

import { Button } from "@nextui-org/react";
import { createCategoryAction } from "./actions";
import { useState } from "react";

export default function CreateCategoryButton({ menuId }: { menuId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
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
  );
}
