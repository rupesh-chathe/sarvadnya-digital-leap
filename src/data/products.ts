import laptopImg from "@/assets/cat-laptop.jpg";
import gamingImg from "@/assets/cat-gaming.jpg";
import accessoriesImg from "@/assets/cat-accessories.jpg";
import printerImg from "@/assets/cat-printer.jpg";
import heroImg from "@/assets/hero-tech.jpg";

/**
 * SAMPLE CATALOGUE DATA (demo only).
 * These entries are illustrative placeholders for layout purposes and do not
 * represent actual Sarvadnya Computer inventory. No prices are shown.
 */

export type Product = {
  id: string;
  brand: string;
  name: string;
  category: ProductCategory;
  specs: string[];
  image: string;
};

export const productCategories = [
  "Laptops",
  "Desktop PCs",
  "Gaming PCs",
  "Refurbished",
  "Monitors",
  "Storage",
  "RAM",
  "Accessories",
  "Printers",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export const products: Product[] = [
  {
    id: "l1",
    brand: "Sample Brand",
    name: "14\" Everyday Laptop",
    category: "Laptops",
    specs: ["Intel Core i3 class", "8GB RAM", "512GB SSD", "Full HD display"],
    image: laptopImg,
  },
  {
    id: "l2",
    brand: "Sample Brand",
    name: "15\" Productivity Laptop",
    category: "Laptops",
    specs: ["Intel Core i5 class", "16GB RAM", "512GB SSD", "Backlit keyboard"],
    image: laptopImg,
  },
  {
    id: "l3",
    brand: "Sample Brand",
    name: "Thin & Light Ultrabook",
    category: "Laptops",
    specs: ["Ryzen 5 class", "16GB RAM", "1TB SSD", "Aluminium body"],
    image: laptopImg,
  },
  {
    id: "d1",
    brand: "Sample Brand",
    name: "Home Desktop System",
    category: "Desktop PCs",
    specs: ["Intel Core i3 class", "8GB RAM", "256GB SSD + 1TB HDD", "Keyboard & mouse"],
    image: heroImg,
  },
  {
    id: "d2",
    brand: "Sample Brand",
    name: "Office Workstation",
    category: "Desktop PCs",
    specs: ["Intel Core i5 class", "16GB RAM", "512GB SSD", "Business chassis"],
    image: heroImg,
  },
  {
    id: "g1",
    brand: "Sample Build",
    name: "Entry Gaming PC",
    category: "Gaming PCs",
    specs: ["6-core CPU class", "16GB RAM", "Entry discrete GPU", "500GB NVMe"],
    image: gamingImg,
  },
  {
    id: "g2",
    brand: "Sample Build",
    name: "Performance Gaming PC",
    category: "Gaming PCs",
    specs: ["8-core CPU class", "32GB RAM", "High-tier GPU", "1TB NVMe"],
    image: gamingImg,
  },
  {
    id: "r1",
    brand: "Sample Brand",
    name: "Refurbished Business Laptop",
    category: "Refurbished",
    specs: ["Core i5 class", "8GB RAM", "256GB SSD", "Condition varies by unit"],
    image: laptopImg,
  },
  {
    id: "r2",
    brand: "Sample Brand",
    name: "Refurbished Desktop System",
    category: "Refurbished",
    specs: ["Core i5 class", "8GB RAM", "500GB storage", "Condition varies by unit"],
    image: heroImg,
  },
  {
    id: "m1",
    brand: "Sample Brand",
    name: "24\" IPS Monitor",
    category: "Monitors",
    specs: ["1920 × 1080", "75Hz", "HDMI + VGA", "Eye-care mode"],
    image: heroImg,
  },
  {
    id: "s1",
    brand: "Sample Brand",
    name: "1TB NVMe SSD",
    category: "Storage",
    specs: ["M.2 NVMe", "Fast sequential reads", "3-year class product"],
    image: accessoriesImg,
  },
  {
    id: "ram1",
    brand: "Sample Brand",
    name: "16GB DDR4 Memory Kit",
    category: "RAM",
    specs: ["DDR4 3200MHz", "Desktop DIMM", "Upgrade friendly"],
    image: accessoriesImg,
  },
  {
    id: "a1",
    brand: "Sample Brand",
    name: "Wireless Keyboard & Mouse Combo",
    category: "Accessories",
    specs: ["2.4GHz wireless", "Silent keys", "Plug & play"],
    image: accessoriesImg,
  },
  {
    id: "a2",
    brand: "Sample Brand",
    name: "UPS Backup Unit",
    category: "Accessories",
    specs: ["Desktop backup", "Surge protection", "Compact design"],
    image: accessoriesImg,
  },
  {
    id: "p1",
    brand: "Sample Brand",
    name: "All-in-One Printer",
    category: "Printers",
    specs: ["Print, scan, copy", "Wi-Fi enabled", "Home & office use"],
    image: printerImg,
  },
  {
    id: "p2",
    brand: "Sample Brand",
    name: "Monochrome Laser Printer",
    category: "Printers",
    specs: ["High page yield", "Fast first print", "Office ready"],
    image: printerImg,
  },
];
