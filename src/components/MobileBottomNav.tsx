import { Link } from "@tanstack/react-router";
import { Home, LayoutGrid, Wrench, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, generalEnquiryMessage } from "@/utils/whatsapp";

const items = [
  { to: "/", label: "Home", icon: Home, exact: true },
  { to: "/products", label: "Products", icon: LayoutGrid, exact: false },
  { to: "/services", label: "Services", icon: Wrench, exact: false },
] as const;

export function MobileBottomNav() {
  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden"
    >
      <ul className="grid grid-cols-4">
        {items.map(({ to, label, icon: Icon, exact }) => (
          <li key={to}>
            <Link
              to={to}
              activeOptions={{ exact }}
              activeProps={{ className: "text-primary" }}
              className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium text-muted-foreground"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              {label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href={getWhatsAppUrl(generalEnquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-primary"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp
          </a>
        </li>
      </ul>
    </nav>
  );
}
