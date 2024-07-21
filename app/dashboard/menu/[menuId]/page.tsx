import BreadcrumbsComponent from "@/components/breadcrumbs";
import CategoryList from "./_components/CategoryList";
import { Suspense } from "react";

export default async function DashboardMenuPage({
  params,
}: {
  params: {
    menuId: string;
  };
}) {
  return (
    <div>
      <BreadcrumbsComponent
        path={{
          Dashboard: { location: `/dashboard` },
          Menu: { location: `/dashboard/menu/${params.menuId}` },
        }}
      />
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-ignore */}
        <CategoryList menuId={params.menuId} />
      </Suspense>
    </div>
  );
}
