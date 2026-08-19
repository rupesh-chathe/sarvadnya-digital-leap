import { Link } from "@tanstack/react-router";
import { Cpu, Instagram, MessageCircle, Phone } from "lucide-react";
import { site } from "@/config/site";
import { getWhatsAppUrl, generalEnquiryMessage } from "@/utils/whatsapp";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/custom-pc", label: "Custom PC" },
  { to: "/contact", label: "Contact" },
] as const;

const solutions = [
  "Laptops",
  "Desktop",
  "Gaming",
  "Refurbished",
  "CCTV",
  "Networking",
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="bg-gradient-primary text-primary-foreground inline-flex h-9 w-9 items-center justify-center rounded-xl">
              <Cpu className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-base font-bold">{site.brand.name}</span>
          </div>
          <p className="text-gradient mt-4 font-display text-lg font-semibold">
            {site.brand.tagline}
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{site.brand.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase">Solutions</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {solutions.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase">Connect</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram
              </a>
            </li>
            <li>
              <a
                href={getWhatsAppUrl(generalEnquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phoneNumber.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> Call
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
        © 2026 {site.brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
