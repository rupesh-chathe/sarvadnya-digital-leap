import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Wrench,
  Layers,
  Instagram,
  MapPin,
  Phone,
  Navigation,
  MessageCircle,
} from "lucide-react";

import heroImg from "@/assets/hero-tech.jpg";
import { site, locations } from "@/config/site";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  getWhatsAppUrl,
  generalEnquiryMessage,
  refurbishedEnquiryMessage,
  businessEnquiryMessage,
} from "@/utils/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarvadnya Computer | Laptops, Computers & Technology Solutions" },
      {
        name: "description",
        content:
          "Explore laptops, computers, accessories, repairs, upgrades, custom PCs and technology solutions from Sarvadnya Computer.",
      },
      {
        property: "og:title",
        content: "Sarvadnya Computer | Laptops, Computers & Technology Solutions",
      },
      {
        property: "og:description",
        content:
          "Explore laptops, computers, accessories, repairs, upgrades, custom PCs and technology solutions from Sarvadnya Computer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const trustPoints = [
  { icon: BadgeCheck, title: "Genuine Products", text: "Products sourced through trusted supply channels." },
  { icon: Headphones, title: "Expert Technical Support", text: "Guidance from people who work with technology daily." },
  { icon: Wrench, title: "Repair & Upgrade Assistance", text: "Help with repairs, RAM, SSD and system upgrades." },
  { icon: Layers, title: "Complete Technology Solutions", text: "From single accessories to full office setups." },
];

function HomePage() {
  const featured = products.slice(0, 8);

  return (
    <>
      {/* HERO */}
      <section className="bg-hero relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-widest text-primary uppercase">
              Computer & Technology Store
            </span>
            <h1 className="mt-5 text-4xl leading-[1.05] font-bold text-balance sm:text-5xl lg:text-6xl">
              Technology. <span className="text-gradient">Service.</span> Solutions.
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Your trusted destination for laptops, computers, accessories, repairs and complete
              technology solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="bg-gradient-primary text-primary-foreground inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-[var(--shadow-glow)] transition-opacity hover:opacity-90"
              >
                Explore Products <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <WhatsAppButton
                message={generalEnquiryMessage}
                variant="outline"
                className="px-6 py-3"
              />
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {["Genuine Products", "Expert Support", "Reliable Service"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="glass-card overflow-hidden">
              <img
                src={heroImg}
                alt="Laptop and desktop computer setup"
                width={1408}
                height={1008}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Categories"
          title="What Are You Looking For?"
          subtitle="Browse the areas we work with most, then enquire in a tap."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.id}
                to={c.to}
                search={c.search as never}
                className="glass-card hover-lift group flex flex-col gap-3 p-6"
              >
                <span className="border-primary/25 bg-primary/10 text-primary inline-flex h-11 w-11 items-center justify-center rounded-xl border">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.description}</p>
                <ArrowRight
                  className="mt-2 h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-surface/60 border-y border-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Catalogue"
            title="Explore Our Technology"
            subtitle="Sample catalogue shown for demonstration. Availability and pricing shared on enquiry."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
            >
              View Full Catalogue <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Services"
          title="Complete Computer Solutions"
          subtitle="Repairs, upgrades, setups and support — handled end to end."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
          >
            All Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* REFURBISHED */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:pb-24">
        <div className="glass-card bg-hero grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Refurbished"
              title="Smart Technology. Better Value."
              subtitle="Explore quality refurbished computers and laptops for budget-conscious customers."
            />
            <p className="mt-4 max-w-xl text-sm text-muted-foreground">
              Availability, condition and specifications vary by unit. Share your requirement and
              we'll tell you what's currently available.
            </p>
            <WhatsAppButton
              message={refurbishedEnquiryMessage}
              label="Ask About Refurbished Options"
              className="mt-6 px-6 py-3"
            />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {["Laptops", "Desktop systems", "Office bulk requirements", "Student budgets"].map(
              (t) => (
                <li key={t} className="rounded-xl border border-border bg-background/40 p-4 text-sm">
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      {/* BUSINESS */}
      <section className="bg-surface/60 border-y border-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Business"
            title="Technology Solutions for Your Business"
            subtitle="Technology solutions for offices, businesses and institutional requirements."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Office Computers",
              "Networking",
              "Printers",
              "System Setup",
              "CCTV",
              "Maintenance",
              "Bulk Requirements",
            ].map((item) => (
              <div key={item} className="glass-card hover-lift p-6 text-sm font-medium">
                {item}
              </div>
            ))}
            <Link
              to="/business-solutions"
              className="glass-card hover-lift flex items-center gap-2 p-6 text-sm font-semibold text-primary"
            >
              Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 text-center">
            <WhatsAppButton
              message={businessEnquiryMessage}
              label="Discuss Your Requirement"
              className="px-6 py-3"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading eyebrow="Why us" title="Why Choose Sarvadnya Computer?" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass-card hover-lift p-6">
              <span className="border-primary/25 bg-primary/10 text-primary inline-flex h-11 w-11 items-center justify-center rounded-xl border">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:pb-24">
        <div className="glass-card bg-hero flex flex-col items-center gap-4 p-10 text-center sm:p-14">
          <span className="border-primary/25 bg-primary/10 text-primary inline-flex h-12 w-12 items-center justify-center rounded-2xl border">
            <Instagram className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">Seen Us on Instagram?</h2>
          <p className="max-w-xl text-muted-foreground">
            Explore our products, technology tips and latest updates.
          </p>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-primary text-primary-foreground mt-2 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" /> Follow {site.instagramHandle}
          </a>
        </div>
      </section>

      {/* STORE LOCATOR */}
      <section id="locations" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:pb-24">
        <SectionHeading
          eyebrow="Locations"
          title="Find Your Nearest Store"
          subtitle="Locations associated with the brand. Addresses are being confirmed with the business."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((loc) => (
            <div key={loc.id} className="glass-card hover-lift flex flex-col gap-3 p-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                <h3 className="text-base font-semibold">{loc.city}</h3>
              </div>
              <p className="text-xs text-muted-foreground">{loc.address}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2 text-xs font-semibold">
                <a
                  href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" /> Call
                </a>
                <a
                  href={getWhatsAppUrl(
                    `Hello ${site.brand.name}, I would like to connect with your ${loc.city} location.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" /> WhatsApp
                </a>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Navigation className="h-3.5 w-3.5" aria-hidden="true" /> Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
