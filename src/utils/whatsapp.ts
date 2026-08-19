import { site } from "@/config/site";

/** Builds a wa.me deep link for the configured business number. */
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppMessage(productName: string): string {
  return `Hello ${site.brand.name}, I am interested in ${productName}. Please share the price and availability.`;
}

export function getServiceWhatsAppMessage(service: string): string {
  return `Hello ${site.brand.name}, I need help with ${service}. Please share the details.`;
}

export function getCustomPcWhatsAppMessage(purpose: string, budget: string): string {
  return `Hello ${site.brand.name}, I would like a custom PC recommendation. Purpose: ${purpose}. Budget: ${budget}. Please guide me.`;
}

export const businessEnquiryMessage = `Hello ${site.brand.name}, I have a business/institutional technology requirement. Please contact me.`;

export const refurbishedEnquiryMessage = `Hello ${site.brand.name}, I would like to know about refurbished computer and laptop options.`;

export const generalEnquiryMessage = `Hello ${site.brand.name}, I would like to know more about your products and services.`;
