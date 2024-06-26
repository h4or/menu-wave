import { title } from "@/components/primitives";
import { getMenuById } from "@/data-access/menus";
import CategoryListComponent from "./categoryListComponent";
import { getMenuCategories } from "@/data-access/categories";
import CreateCategoryButton from "./createCategoryButton";
import { Divider } from "@nextui-org/react";
import { calculateUserLimits } from "@/lib/utils";
import { getCurrentUser } from "@/data-access/users";

export default async function DashboardMenuPage({
  params,
}: {
  params: {
    menuId: string;
  };
}) {
  const user = await getCurrentUser();
  const menu = await getMenuById(params.menuId);
  if (!menu)
    return (
      <div>
        <h1 className={title({ size: "sm" })}>Menu not found</h1>
      </div>
    );
  const categories = await getMenuCategories(params.menuId);
  const categories_count = categories.length;
  const userCategoryLimit = calculateUserLimits(
    "categories",
    user?.plan as string
  );
  return (
    <div>
      <h1 className={title({ size: "sm" })}>{menu.name}</h1>
      <div className="grid lg:grid-cols-2 gap-4 pt-10 sm:pt-14">
        <div className=" overflow-y-hidden flex flex-col border border-default-200 dark:border-default-100 px-2 py-4 rounded-lg">
          <CategoryListComponent categories={categories} />
          <div className="flex flex-row items-center gap-4 pt-2">
            <CreateCategoryButton menuId={menu.id} />
            <Divider orientation="vertical" />
            <p className="text-gray-400">
              You have {userCategoryLimit - categories_count} categories left
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
