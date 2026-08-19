import { createFileRoute } from "@tanstack/react-router";
import { Monitor, Network, Printer, Settings, Cctv, Wrench, Boxes } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { businessEnquiryMessage } from "@/utils/whatsapp";

export const Route = createFileRoute("/business-solutions")({
  head: () => ({
    meta: [
      { title: "Business & Institutional IT Solutions | Sarvadnya Computer" },
      {
        name: "description",
        content:
          "Office computers, networking, printers, system setup, CCTV, maintenance and bulk technology requirements for businesses and institutions.",
      },
      { property: "og:title", content: "Business IT Solutions | Sarvadnya Computer" },
      {
        property: "og:description",
        content: "Technology solutions for offices, businesses and institutional requirements.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/business-solutions" },
    ],
    links: [{ rel: "canonical", href: "/business-solutions" }],
  }),
  component: BusinessPage,
});

const offerings = [
  { icon: Monitor, title: "Office Computers", text: "Desktops and laptops suited to daily office workloads." },
  { icon: Network, title: "Networking", text: "LAN, Wi-Fi and switch setups for connected workspaces." },
  { icon: Printer, title: "Printers", text: "Printing and scanning devices with setup support." },
  { icon: Settings, title: "System Setup", text: "Operating system, software and workstation configuration." },
  { icon: Cctv, title: "CCTV", text: "Surveillance camera selection and installation assistance." },
  { icon: Wrench, title: "Maintenance", text: "Ongoing servicing and troubleshooting support." },
  { icon: Boxes, title: "Bulk Requirements", text: "Multi-unit procurement for teams and institutions." },
];

function BusinessPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Business Solutions"
        title="Technology Solutions for Your Business"
        subtitle="Technology solutions for offices, businesses and institutional requirements."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {offerings.map(({ icon: Icon, title, text }) => (
          <article key={title} className="glass-card hover-lift p-6">
            <span className="border-primary/25 bg-primary/10 text-primary inline-flex h-11 w-11 items-center justify-center rounded-xl border">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-base font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>

      <div className="glass-card bg-hero mt-12 flex flex-col items-center gap-4 p-10 text-center sm:p-14">
        <h2 className="text-2xl font-bold sm:text-3xl">Have a requirement to discuss?</h2>
        <p className="max-w-lg text-sm text-muted-foreground">
          Share your scope and we'll respond with the right approach for your setup.
        </p>
        <WhatsAppButton
          message={businessEnquiryMessage}
          label="Discuss Your Requirement"
          className="px-6 py-3"
        />
      </div>
    </div>
  );
}
