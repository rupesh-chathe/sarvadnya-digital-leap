import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Instagram, MapPin, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/config/site";
import { getWhatsAppUrl, generalEnquiryMessage } from "@/utils/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Sarvadnya Computer" },
      { name: "description", content: "Call, WhatsApp or send an enquiry to Sarvadnya Computer." },
      { property: "og:title", content: "Contact | Sarvadnya Computer" },
      { property: "og:description", content: "Let's talk technology. Reach Sarvadnya Computer." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

/** Replace with an API call (e.g. POST /api/enquiries) when a backend is added. */
async function submitEnquiry(_data: Record<string, string>) {
  return Promise.resolve({ ok: true });
}

function ContactPage() {
  const [sent, setSent] = useState(false);

  const cards = [
    { icon: Phone, title: "Call Us", text: site.phoneNumber, href: `tel:${site.phoneNumber.replace(/\s+/g, "")}` },
    { icon: MessageCircle, title: "WhatsApp", text: "Quick replies", href: getWhatsAppUrl(generalEnquiryMessage) },
    { icon: Instagram, title: "Instagram", text: site.instagramHandle, href: site.instagramUrl },
    { icon: MapPin, title: "Visit Store", text: "See locations", href: "/#locations" },
  ];

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    await submitEnquiry(data);
    setSent(true);
    e.currentTarget.reset();
  };

  const field =
    "w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm outline-none focus:border-primary";

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <SectionHeading as="h1" eyebrow="Contact" title="Let's Talk Technology." />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ icon: Icon, title, text, href }) => (
          <a key={title} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="glass-card hover-lift p-6">
            <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="mt-3 text-base font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </a>
        ))}
      </div>

      <form onSubmit={onSubmit} className="glass-card mx-auto mt-12 grid max-w-2xl gap-4 p-8">
        <h2 className="text-xl font-semibold">Send an enquiry</h2>
        <input name="name" required placeholder="Name" className={field} />
        <input name="mobile" required type="tel" pattern="[0-9+ ]{10,15}" placeholder="Mobile Number" className={field} />
        <input name="requirement" required placeholder="Requirement (e.g. laptop, repair)" className={field} />
        <textarea name="message" rows={4} placeholder="Message" className={field} />
        <button type="submit" className="bg-gradient-primary text-primary-foreground rounded-full px-6 py-3 text-sm font-semibold hover:opacity-90">
          Send Enquiry
        </button>
        {sent && (
          <p className="inline-flex items-center gap-2 text-sm text-primary">
            <CheckCircle2 className="h-4 w-4" /> Thank you — we'll get back to you soon.
          </p>
        )}
      </form>
    </div>
  );
}
