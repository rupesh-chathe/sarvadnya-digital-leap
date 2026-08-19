/**
 * CENTRAL CLIENT CONFIGURATION
 * ----------------------------
 * Everything the business owner needs to update lives here.
 * Values marked PLACEHOLDER must be confirmed by the client before launch.
 */

export const site = {
  brand: {
    name: "Sarvadnya Computer",
    tagline: "Technology. Service. Solutions.",
    description:
      "Your trusted destination for computers, laptops, accessories, repairs and technology solutions.",
  },

  /** PLACEHOLDER — replace with the verified business number (digits only, with country code). */
  whatsappNumber: "910000000000",

  /** PLACEHOLDER — replace with the verified business phone number. */
  phoneNumber: "+91 00000 00000",

  instagramHandle: "@sarvadnyacomputer",
  instagramUrl: "https://www.instagram.com/sarvadnyacomputer/",

  /** PLACEHOLDER — confirm with client. */
  email: "contact@example.com",

  /** PLACEHOLDER — confirm actual business hours with client. */
  businessHours: [
    { days: "Monday – Saturday", hours: "Timings to be confirmed" },
    { days: "Sunday", hours: "Timings to be confirmed" },
  ],
} as const;

export type StoreLocation = {
  id: string;
  city: string;
  /** Address confirmation required until verified by the client. */
  address: string;
  phone: string;
  mapsUrl: string;
};

/**
 * Locations associated with the brand in public listings.
 * NOTE: this is not confirmed as a definitive branch list.
 * Addresses are intentionally left as placeholders pending client verification.
 */
export const locations: StoreLocation[] = [
  "Chalisgaon",
  "Nashik",
  "Jalgaon",
  "Shirpur",
  "Pandharkawada",
  "Pune",
  "Chhatrapati Sambhajinagar",
  "Nandurbar",
].map((city) => ({
  id: city.toLowerCase().replace(/\s+/g, "-"),
  city,
  address: "Address confirmation required",
  phone: site.phoneNumber,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Sarvadnya Computer ${city}`,
  )}`,
}));
