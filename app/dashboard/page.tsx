import { title } from "@/components/primitives";
import MenuList from "./_components/MenuList";
import { Suspense } from "react";

export default async function DashboardPage() {
  return (
    <div>
      <h1 className={title({ size: "sm" })}>Dashboard</h1>
      <div className="grid lg:grid-cols-2 gap-4 pt-10 sm:pt-14">
        <div className="overflow-y-hidden flex flex-col border border-default-200 dark:border-default-100 px-2 py-4 rounded-lg">
          <Suspense fallback={<div>Loading...</div>}>
            {/* @ts-ignore */}
            <MenuList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
