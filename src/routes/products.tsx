import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { products, productCategories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

type ProductSearch = { category?: string };

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): ProductSearch => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Products | Sarvadnya Computer" },
      {
        name: "description",
        content:
          "Browse laptops, desktops, gaming PCs, refurbished systems, monitors, storage, RAM, accessories and printers at Sarvadnya Computer.",
      },
      { property: "og:title", content: "Products | Sarvadnya Computer" },
      {
        property: "og:description",
        content:
          "Browse laptops, desktops, gaming PCs, refurbished systems, accessories and printers at Sarvadnya Computer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { category } = Route.useSearch();
  const navigate = useNavigate({ from: "/products" });

  const filtered = category ? products.filter((p) => p.category === category) : products;

  const setCategory = (value?: string) =>
    navigate({ search: value ? { category: value } : {}, resetScroll: false });

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Catalogue"
        title="Explore Our Technology"
        subtitle="Sample catalogue for demonstration. Share a product and we'll confirm price and availability on WhatsApp."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setCategory(undefined)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            !category
              ? "border-primary/60 bg-primary/10 text-primary"
              : "border-border text-muted-foreground hover:text-foreground",
          )}
        >
          All
        </button>
        {productCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              category === c
                ? "border-primary/60 bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">
          No sample products listed in this category yet — message us on WhatsApp and we'll help.
        </p>
      ) : (
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
