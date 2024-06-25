import MenuListComponent from "@/components/dashboard/menuList";
import NewMenuButton from "@/components/dashboard/newMenuButton";
import { title } from "@/components/primitives";
import { getUserMenus } from "@/data-access/menus";
import { getCurrentUser } from "@/data-access/users";
import { calculateUserLimits } from "@/lib/utils";
import { Divider } from "@nextui-org/react";

export default async function DashboardPage() {
  const menus = await getUserMenus();
  const user = await getCurrentUser();
  const menus_count = menus.length;
  const userMenuLimit = calculateUserLimits("menus", user?.plan as string);
  return (
    <div>
      <h1 className={title({ size: "sm" })}>Dashboard</h1>
      <div className="grid lg:grid-cols-2 gap-4 pt-10 sm:pt-14">
        <div className=" overflow-y-hidden flex flex-col border border-default-200 dark:border-default-100 px-2 py-4 rounded-lg">
          <MenuListComponent menus={menus} />
          <div className="flex flex-row items-center gap-4 pt-2">
            <NewMenuButton />
            <Divider orientation="vertical" />
            <p className="text-gray-400">
              You have {userMenuLimit - menus_count} menus left
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
