"use client";

import { Button, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function CreateMenuButton({
  userMenuLimit,
  menus_count,
}: {
  userMenuLimit: number;
  menus_count: number;
}) {
  const router = useRouter();
  return (
    <div className="flex flex-row items-center gap-4 pt-2">
      <Button size="md" onClick={() => router.push("/dashboard/create-menu")}>
        Create menu
      </Button>
      <Divider orientation="vertical" />
      <p className="text-gray-400">
        You have {userMenuLimit - menus_count} menus left
      </p>
    </div>
  );
}
