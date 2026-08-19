import { MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { getProductWhatsAppMessage, getWhatsAppUrl } from "@/utils/whatsapp";

export function ProductCard({ product }: { product: Product }) {
  const enquiryUrl = getWhatsAppUrl(getProductWhatsAppMessage(product.name));

  return (
    <article className="glass-card hover-lift flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-background/70 px-3 py-1 text-[11px] font-semibold tracking-wide text-primary backdrop-blur">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            {product.brand}
          </p>
          <h3 className="mt-1 text-lg font-semibold">{product.name}</h3>
        </div>

        <ul className="space-y-1 text-sm text-muted-foreground">
          {product.specs.map((spec) => (
            <li key={spec} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {spec}
            </li>
          ))}
        </ul>

        <a
          href={enquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-primary text-primary-foreground mt-auto inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Get Best Price
        </a>
      </div>
    </article>
  );
}
