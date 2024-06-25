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
import { Button, Input } from "@nextui-org/react";
import { editMenuAction } from "./actions";
import { Menu } from "@/db/schema";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string(),
  type: z.string().min(2, {
    message: "Type must be at least 2 characters.",
  }),
  address: z.string().min(2, {
    message: "Address must be at least 2 characters.",
  }),
  phone: z.string().optional(),
  email: z.string().optional(),
  status: z
    .string()
    .refine((value) => value === "draft" || value === "active", {
      message: "Status must be either 'draft' or 'active'.",
    }),
});

export function EditMenuForm({ menu }: { menu: Menu }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: menu.name,
      description: menu.description || undefined,
      type: menu.type,
      address: menu.address,
      phone: menu.phone || undefined,
      email: menu.email || undefined,
      status: menu.status || "draft",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await editMenuAction({ ...values, id: menu.id, userId: menu.userId });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Soul Lounge" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public menu name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Brewed for Moments that Matter..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your menu description.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Caffee Bar, Restaraunt, Fast food, ..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your restaraunt/bar type.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Restaraunt/Bar address" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your restaraunt/bar address.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This is public phone number.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>This is your public email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
