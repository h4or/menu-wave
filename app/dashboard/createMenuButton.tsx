"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function CreateMenuButton() {
  const router = useRouter();
  return (
    <Button size="md" onClick={() => router.push("/dashboard/create-menu")}>
      Create menu
    </Button>
  );
}
