"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form";
import { Button, Input, Switch } from "@nextui-org/react";
import { editCategoryAction } from "./actions";
import { Category, Menu } from "@/db/schema";
import Base64Image from "@/components/Base64Image";
import { useEffect, useState } from "react";
import { CInput } from "@/components/input";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  icon: z.string().min(2, {
    message: "Icon must choose category icon.",
  }),
});

export function EditCategoryForm({ category }: { category: Category }) {
  const [iconValue, setIconValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIconValue(category.icon);
  }, [category.icon]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: category.name,
      icon: category.icon,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    await editCategoryAction({
      ...values,
      icon: iconValue,
      id: category.id,
      menuId: category.menuId,
      position: category.position,
    });
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIconValue(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Coffees" {...field} />
                </FormControl>
                <FormDescription>This is your category name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="icon"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg pt-4">Icon</FormLabel>
                <FormControl>
                  <div className="flex flex-col items-center">
                    <Base64Image
                      base64String={iconValue}
                      className="size-10 mb-4"
                      alt={category.name}
                    />
                    <CInput
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                </FormControl>
                <FormDescription>This is your menu icon.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" isLoading={isLoading}>
          {" "}
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
