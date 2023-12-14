import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getHeading(city: string) {
  return city === "all" ? "All Events" : `Events in ${capitalize(city)}`;
}

export function capitalize(city: string) {
  return city.charAt(0).toUpperCase() + city.slice(1);
}
