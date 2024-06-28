import { getUserMenus } from "@/data-access/menus";
import { getCurrentUser } from "@/data-access/users";
import { calculateUserLimits } from "@/lib/utils";
import React from "react";
import MenuListComponent from "./menuListComponent";
import CreateMenuButton from "./createMenuButton";

export default async function MenuList() {
  const menus = await getUserMenus();
  const user = await getCurrentUser();
  const menus_count = menus.length;
  const userMenuLimit = calculateUserLimits("menus", user?.plan as string);
  return (
    <div>
      <MenuListComponent menus={menus} />
      <CreateMenuButton
        userMenuLimit={userMenuLimit}
        menus_count={menus_count}
      />
    </div>
  );
}
