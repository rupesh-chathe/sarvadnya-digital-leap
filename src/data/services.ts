import {
  Laptop,
  Monitor,
  MemoryStick,
  HardDrive,
  Disc,
  Cpu,
  Printer,
  Cctv,
  Network,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "laptop-repair",
    title: "Laptop Repair",
    description: "Diagnosis and repair support for laptop hardware and software issues.",
    icon: Laptop,
  },
  {
    id: "desktop-repair",
    title: "Desktop Repair",
    description: "Troubleshooting and component-level assistance for desktop systems.",
    icon: Monitor,
  },
  {
    id: "ram-upgrade",
    title: "RAM Upgrade",
    description: "Memory upgrades to help improve multitasking and responsiveness.",
    icon: MemoryStick,
  },
  {
    id: "ssd-upgrade",
    title: "SSD Upgrade",
    description: "Solid state storage upgrades for faster boot and load times.",
    icon: HardDrive,
  },
  {
    id: "windows-software-setup",
    title: "Windows & Software Setup",
    description: "Operating system installation and essential software configuration.",
    icon: Disc,
  },
  {
    id: "custom-pc-build",
    title: "Custom PC Build",
    description: "Component selection and assembly built around your requirement.",
    icon: Cpu,
  },
  {
    id: "printer-scanner-services",
    title: "Printer & Scanner Services",
    description: "Installation, configuration and servicing support for printing devices.",
    icon: Printer,
  },
  {
    id: "cctv-solutions",
    title: "CCTV Solutions",
    description: "Camera selection, installation and configuration assistance.",
    icon: Cctv,
  },
  {
    id: "networking-solutions",
    title: "Networking Solutions",
    description: "Router, switch, LAN and Wi-Fi setup for homes and offices.",
    icon: Network,
  },
  {
    id: "technical-support",
    title: "Technical Support",
    description: "Guidance and after-sales assistance for your technology setup.",
    icon: LifeBuoy,
  },
];
