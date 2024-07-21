"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

type PathItem = {
  location: string;
};

type PathType = {
  [key: string]: PathItem;
};

export default function BreadcrumbsComponent({ path }: { path: PathType }) {
  const router = useRouter();
  const breadcrumbItems = Object.keys(path).map((key) => ({
    text: key,
    ...path[key],
  }));

  return (
    <div className="pb-4">
      <Breadcrumbs
        separator="/"
        itemClasses={{
          separator: "px-2",
        }}
      >
        {breadcrumbItems.map((item, index) => (
          <BreadcrumbItem
            key={index}
            onClick={() => {
              if (item.location) {
                router.push(item.location);
              }
            }}
            style={{ cursor: item.location ? "pointer" : "default" }}
          >
            {item.text}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  );
}
