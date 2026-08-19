import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Cpu } from "lucide-react";
import { site } from "@/config/site";
import { generalEnquiryMessage } from "@/utils/whatsapp";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/custom-pc", label: "Custom PC" },
  { to: "/business-solutions", label: "Business Solutions" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border/80 bg-background/85 py-2 backdrop-blur-xl"
          : "border-transparent bg-background/40 py-4 backdrop-blur-md",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="bg-gradient-primary text-primary-foreground inline-flex h-9 w-9 items-center justify-center rounded-xl">
            <Cpu className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold sm:text-base">
              {site.brand.name}
            </span>
            <span className="block text-[10px] tracking-widest text-muted-foreground uppercase">
              Technology · Service · Solutions
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "text-primary bg-primary/10" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <WhatsAppButton message={generalEnquiryMessage} className="hidden sm:inline-flex" />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <Menu className="hidden" /> : null}
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 pb-1">
              <WhatsAppButton message={generalEnquiryMessage} className="w-full" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
