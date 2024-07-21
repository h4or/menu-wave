import { planLimit } from "@/config/planLimit";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateUserLimits(type: string, userPlan: string) {
  if (!type || !userPlan) return null;
  return planLimit[type][userPlan];
}
