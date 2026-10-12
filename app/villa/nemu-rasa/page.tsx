import { Metadata } from "next";
import VillaClient from "@/components/pages/VillaClient";

// 1. Specific SEO Metadata for Nemu Rasa
export const metadata: Metadata = {
  title: "Nemu Rasa Villa | Warm Modern Sanctuary in Bali",
  description: "Discover Nemu Rasa, a warm, modern sanctuary. Where intimate design and honest materials create the perfect private Bali retreat on Sunset Road.",
  alternates: { canonical: '/villa/nemu-rasa' },
};

// 2. Specific JSON-LD Schema for AI & Rich Snippets
const schema = {
  "@context": "https://schema.org",
  "@type": "Accommodation",
  "name": "Nemu Rasa Villa",
  "description": "A warm, modern sanctuary villa on Sunset Road, Bali.",
  "image": "https://www.nemusaya.com/villa2.webp",
  "numberOfRooms": 2,
  "petsAllowed": false,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sunset Road",
    "addressLocality": "Bali",
    "postalCode": "80361",
    "addressCountry": "ID"
  }
};

// 3. Page Content Data
const villaData = {
  name: "Nemu",
  italicName: "Rasa",
  tagline: "Warm Modern Sanctuary.",
  description: "Nemu Rasa translates the feeling of home into architectural form. Surrounded by tropical foliage and crafted with warm woods, it offers a quieter, more intimate balance between contemporary living and nature.",
  heroImage: "/villa2.webp", // Ensure this matches your asset
  gallery: ["/villa8.webp", "/villa-1.webp"], 
  specs: [
    { label: "Land Size", value: "150 m²" },
    { label: "Cooling", value: "2 Indoor AC" },
    { label: "Floor", value: "Single Level" },
    { label: "Number of Rooms", value: "2 Bed & 2 Bath" },
    { label: "House Dimensions", value: "10 × 15 m" },
    { label: "Capacity", value: "4 Guests" },
  ]
};

export default function NemuRasaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <VillaClient data={villaData} />
    </>
  );
}