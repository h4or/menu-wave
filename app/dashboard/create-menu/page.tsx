import BreadcrumbsComponent from "@/components/breadcrumbs";
import { CreateMenuForm } from "./createMenuForm";
import { title } from "@/components/primitives";
import React from "react";

export default function CreateMenuPage(userMenuCount: number) {
  return (
    <div>
      <BreadcrumbsComponent
        path={{
          Dashboard: { location: `/dashboard` },
          "Create Menu": { location: `/dashboard/create-menu` },
        }}
      />
      <h1 className={title({ size: "sm" })}>Create Menu</h1>
      <div className="pt-4">
        <CreateMenuForm />
      </div>
    </div>
  );
}
