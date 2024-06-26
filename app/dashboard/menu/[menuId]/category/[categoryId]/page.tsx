import { title } from "@/components/primitives";
import { getCategoryById } from "@/data-access/categories";
import { getCategoryItems } from "@/data-access/items";
import { getCurrentUser } from "@/data-access/users";
import { calculateUserLimits } from "@/lib/utils";
import { Divider } from "@nextui-org/react";
import ItemListComponent from "./itemListComponent";
import CreateItemButton from "./createItemButton";
import BreadcrumbsComponent from "@/components/breadcrumbs";

export default async function DashboardCategoryPage({
  params,
}: {
  params: {
    menuId: string;
    categoryId: string;
  };
}) {
  const user = await getCurrentUser();
  const category = await getCategoryById(params.categoryId);
  if (!category)
    return (
      <div>
        <h1 className={title({ size: "sm" })}>Category not found</h1>
      </div>
    );
  const items = await getCategoryItems(category.id);
  const items_count = items.length;
  const userItemLimit = calculateUserLimits("items", user?.plan as string);
  return (
    <div>
      <BreadcrumbsComponent
        path={{
          Dashboard: { location: `/dashboard` },
          Menu: { location: `/dashboard/menu/${params.menuId}` },
          Category: {
            location: `/dashboard/menu/${params.menuId}/category/${params.categoryId}`,
          },
        }}
      />
      <h1 className={title({ size: "sm" })}>{category.name}</h1>
      <div className="grid lg:grid-cols-2 gap-4 pt-10 sm:pt-14">
        <div className=" overflow-y-hidden flex flex-col border border-default-200 dark:border-default-100 px-2 py-4 rounded-lg">
          <ItemListComponent items={items} />
          <div className="flex flex-row items-center gap-4 pt-2">
            <CreateItemButton
              menuId={category.menuId}
              categoryId={category.id}
            />
            <Divider orientation="vertical" />
            <p className="text-gray-400">
              You have {userItemLimit - items_count} items left
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
