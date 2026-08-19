import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Gamepad2,
  Code2,
  Briefcase,
  Clapperboard,
  Palette,
  Home,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { getCustomPcWhatsAppMessage, getWhatsAppUrl } from "@/utils/whatsapp";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/custom-pc")({
  head: () => ({
    meta: [
      { title: "Custom PC Builds | Sarvadnya Computer" },
      {
        name: "description",
        content:
          "Get a custom PC configuration built around your purpose and budget — gaming, programming, office, editing, design or home use.",
      },
      { property: "og:title", content: "Custom PC Builds | Sarvadnya Computer" },
      {
        property: "og:description",
        content: "Tell us your purpose and budget and get a custom PC recommendation on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/custom-pc" },
    ],
    links: [{ rel: "canonical", href: "/custom-pc" }],
  }),
  component: CustomPcPage,
});

const purposes: { label: string; icon: LucideIcon }[] = [
  { label: "Gaming", icon: Gamepad2 },
  { label: "Programming", icon: Code2 },
  { label: "Office", icon: Briefcase },
  { label: "Video Editing", icon: Clapperboard },
  { label: "Design", icon: Palette },
  { label: "Home", icon: Home },
];

const budgets = ["Under ₹40K", "₹40K–₹60K", "₹60K–₹1L", "₹1L+"];

function CustomPcPage() {
  const [purpose, setPurpose] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);

  const ready = Boolean(purpose && budget);
  const href = getWhatsAppUrl(
    getCustomPcWhatsAppMessage(purpose ?? "Not specified", budget ?? "Not specified"),
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Custom Builds"
        title="Build Your Perfect PC."
        subtitle="From everyday computing to high-performance gaming and professional workloads, get a configuration built around your requirements."
      />

      <section className="mt-14">
        <h2 className="text-lg font-semibold">1. What will you use it for?</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {purposes.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              onClick={() => setPurpose(label)}
              className={cn(
                "glass-card hover-lift flex items-center gap-3 p-5 text-left text-sm font-medium",
                purpose === label && "border-primary/60 shadow-[var(--shadow-glow)] text-primary",
              )}
            >
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold">2. What's your budget range?</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-4">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBudget(b)}
              className={cn(
                "glass-card hover-lift p-5 text-sm font-semibold",
                budget === b && "border-primary/60 shadow-[var(--shadow-glow)] text-primary",
              )}
            >
              {b}
            </button>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Ranges are for guidance only and are not fixed packages. Final configuration and pricing
          are confirmed on enquiry.
        </p>
      </section>

      <div className="mt-12 text-center">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!ready}
          onClick={(e) => {
            if (!ready) e.preventDefault();
          }}
          className={cn(
            "bg-gradient-primary text-primary-foreground inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-opacity",
            ready ? "hover:opacity-90 shadow-[var(--shadow-glow)]" : "pointer-events-none opacity-40",
          )}
        >
          Get PC Recommendation <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        {!ready && (
          <p className="mt-3 text-xs text-muted-foreground">Select a purpose and a budget range.</p>
        )}
      </div>
    </div>
  );
}
