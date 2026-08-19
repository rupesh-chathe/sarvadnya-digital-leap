import type { Service } from "@/data/services";
import { getServiceWhatsAppMessage } from "@/utils/whatsapp";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="glass-card hover-lift flex flex-col gap-4 p-6">
      <span className="border-primary/25 bg-primary/10 text-primary inline-flex h-11 w-11 items-center justify-center rounded-xl border">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-lg font-semibold">{service.title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{service.description}</p>
      </div>
      <WhatsAppButton
        message={getServiceWhatsAppMessage(service.title)}
        label="WhatsApp Enquiry"
        variant="outline"
        className="mt-auto self-start"
      />
    </article>
  );
}
