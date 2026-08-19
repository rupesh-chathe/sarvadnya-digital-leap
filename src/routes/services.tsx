import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { generalEnquiryMessage } from "@/utils/whatsapp";

type ServiceSearch = { service?: string };

export const Route = createFileRoute("/services")({
  validateSearch: (search: Record<string, unknown>): ServiceSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Services | Repairs, Upgrades & IT Support — Sarvadnya Computer" },
      {
        name: "description",
        content:
          "Laptop and desktop repair, RAM and SSD upgrades, Windows setup, custom PC builds, printer service, CCTV and networking solutions.",
      },
      { property: "og:title", content: "Services | Sarvadnya Computer" },
      {
        property: "og:description",
        content:
          "Repairs, upgrades, software setup, custom builds, CCTV and networking support from Sarvadnya Computer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { service } = Route.useSearch();
  const ordered = service
    ? [...services].sort((a, b) => (a.id === service ? -1 : b.id === service ? 1 : 0))
    : services;

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Services"
        title="Complete Computer Solutions"
        subtitle="Tell us the issue or the upgrade you want — we'll take it from there."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ordered.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
      <div className="glass-card mt-12 flex flex-col items-center gap-4 p-10 text-center">
        <h2 className="text-2xl font-bold">Not sure what you need?</h2>
        <p className="max-w-md text-sm text-muted-foreground">
          Describe the problem in a message and we'll suggest the right option.
        </p>
        <WhatsAppButton message={generalEnquiryMessage} label="Message Us" className="px-6 py-3" />
      </div>
    </div>
  );
}
