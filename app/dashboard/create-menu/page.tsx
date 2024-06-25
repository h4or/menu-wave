import { CreateMenuForm } from "./createMenuForm";
import { title } from "@/components/primitives";
import React from "react";

export default function CreateMenuPage() {
  return (
    <div>
      <h1 className={title({ size: "sm" })}>Create Menu</h1>
      <div className="pt-4">
        <CreateMenuForm />
      </div>
    </div>
  );
}
