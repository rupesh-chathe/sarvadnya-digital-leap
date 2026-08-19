import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import { cn } from "@/lib/utils";

type Props = {
  message: string;
  label?: string;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
};

export function WhatsAppButton({
  message,
  label = "WhatsApp Us",
  className,
  variant = "solid",
}: Props) {
  const styles = {
    solid:
      "bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)]",
    outline:
      "border border-border text-foreground hover:border-primary/60 hover:text-primary bg-transparent",
    ghost: "text-primary hover:text-accent",
  }[variant];

  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
        styles,
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
