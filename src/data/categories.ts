import {
  Laptop,
  Monitor,
  Gamepad2,
  RefreshCcw,
  Headphones,
  Printer,
  Cctv,
  Network,
  type LucideIcon,
} from "lucide-react";

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  /** Route to navigate to, with optional filter search param. */
  to: string;
  search?: Record<string, string>;
};

export const categories: Category[] = [
  {
    id: "laptops",
    name: "Laptops",
    description: "Everyday, student and professional notebooks.",
    icon: Laptop,
    to: "/products",
    search: { category: "Laptops" },
  },
  {
    id: "desktops",
    name: "Desktop Computers",
    description: "Reliable desktops for home and office use.",
    icon: Monitor,
    to: "/products",
    search: { category: "Desktop PCs" },
  },
  {
    id: "gaming",
    name: "Gaming PCs",
    description: "Performance builds for gaming and creation.",
    icon: Gamepad2,
    to: "/products",
    search: { category: "Gaming PCs" },
  },
  {
    id: "refurbished",
    name: "Refurbished Computers",
    description: "Smart value options for tighter budgets.",
    icon: RefreshCcw,
    to: "/products",
    search: { category: "Refurbished" },
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Keyboards, mice, storage, RAM and more.",
    icon: Headphones,
    to: "/products",
    search: { category: "Accessories" },
  },
  {
    id: "printers",
    name: "Printers & Scanners",
    description: "Printing, scanning and consumable support.",
    icon: Printer,
    to: "/products",
    search: { category: "Printers" },
  },
  {
    id: "cctv",
    name: "CCTV & Security",
    description: "Camera and surveillance solutions.",
    icon: Cctv,
    to: "/services",
    search: { service: "cctv-solutions" },
  },
  {
    id: "networking",
    name: "Networking",
    description: "Wired and wireless network setups.",
    icon: Network,
    to: "/services",
    search: { service: "networking-solutions" },
  },
];
