import { title } from "@/components/primitives";
import { getCategoryById } from "@/data-access/categories";
import { getCategoryItems } from "@/data-access/items";
import { getCurrentUser } from "@/data-access/users";
import { calculateUserLimits } from "@/lib/utils";
import { Divider } from "@nextui-org/react";
import ItemListComponent from "./_components/itemListComponent";
import CreateItemButton from "./_components/createItemButton";
import BreadcrumbsComponent from "@/components/breadcrumbs";
import ItemList from "./_components/ItemList";
import { Suspense } from "react";

export default async function DashboardCategoryPage({
  params,
}: {
  params: {
    menuId: string;
    categoryId: string;
  };
}) {
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
      <Suspense fallback={<div>Loading...</div>}>
        <ItemList categoryId={params.categoryId} />
      </Suspense>
    </div>
  );
}
