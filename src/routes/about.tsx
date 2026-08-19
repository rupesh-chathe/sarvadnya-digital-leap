import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Headphones, Wrench, Layers } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { generalEnquiryMessage } from "@/utils/whatsapp";
import { site, locations } from "@/config/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Sarvadnya Computer" },
      {
        name: "description",
        content:
          "Sarvadnya Computer is a computer and technology store offering laptops, desktops, accessories, repairs, upgrades and complete technology solutions.",
      },
      { property: "og:title", content: "About | Sarvadnya Computer" },
      {
        property: "og:description",
        content: "Technology. Service. Solutions. Learn about Sarvadnya Computer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: BadgeCheck, title: "Genuine Products", text: "Products sourced through trusted supply channels." },
  { icon: Headphones, title: "Expert Technical Support", text: "Practical guidance before and after purchase." },
  { icon: Wrench, title: "Repair & Upgrade Assistance", text: "Repairs, RAM, SSD and system upgrade help." },
  { icon: Layers, title: "Complete Technology Solutions", text: "Single accessories to full office setups." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:py-20">
      <SectionHeading
        as="h1"
        eyebrow="About"
        title="Technology. Service. Solutions."
        subtitle={site.brand.description}
      />

      <div className="glass-card mt-12 p-8 sm:p-10">
        <h2 className="text-xl font-semibold">What we do</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          {site.brand.name} is a computer and technology store serving students, professionals,
          gamers, families, small businesses and institutions. We sell new and refurbished laptops
          and desktops, gaming PCs, accessories, printers and scanners, and we support customers
          with repairs, upgrades, software setup, custom builds, CCTV and networking.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          Company details such as history, team size and certifications will be added once confirmed
          by the business.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {pillars.map(({ icon: Icon, title, text }) => (
          <div key={title} className="glass-card hover-lift p-6">
            <span className="border-primary/25 bg-primary/10 text-primary inline-flex h-11 w-11 items-center justify-center rounded-xl border">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>

      <div className="glass-card mt-8 p-8">
        <h2 className="text-xl font-semibold">Locations</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Locations associated with the brand in public listings. This is not confirmed as a
          definitive branch list.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2 text-sm">
          {locations.map((l) => (
            <li key={l.id} className="rounded-full border border-border px-4 py-1.5">
              {l.city}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 text-center">
        <WhatsAppButton message={generalEnquiryMessage} className="px-6 py-3" />
      </div>
    </div>
  );
}
