import type { ComponentType } from "react";
import {
  BookOpenIcon,
  HomeIcon,
  ListBulletIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

interface Link {
  label: string;
  href: string;
  Icon: ComponentType;
}

export const links = [
  {
    label: "Home",
    href: "/",
    Icon: HomeIcon,
  },
  {
    label: "Recipes",
    href: "/recipes",
    Icon: ListBulletIcon,
  },
  {
    label: "Cookbooks",
    href: "/cookbooks",
    Icon: BookOpenIcon,
  },
  {
    label: "Shopping",
    href: "/shopping-list",
    Icon: ShoppingCartIcon,
  },
] satisfies Link[];
