import { Metadata } from "next";
import VillaClient from "@/components/pages/VillaClient";

// 1. Specific SEO Metadata for Nemu Jiwa
export const metadata: Metadata = {
  title: "Nemu Jiwa Villa | Quiet Minimal Retreat in Bali",
  description: "Experience Nemu Jiwa, a quiet minimal retreat on Sunset Road, Bali. Designed for deep relaxation, shaped by light, proportion, and silence.",
  alternates: { canonical: '/villa/nemu-jiwa' },
};

// 2. Specific JSON-LD Schema for AI & Rich Snippets
const schema = {
  "@context": "https://schema.org",
  "@type": "Accommodation",
  "name": "Nemu Jiwa Villa",
  "description": "A quiet, minimal retreat villa on Sunset Road, Bali.",
  "image": "https://www.nemusaya.com/villa3.webp",
  "numberOfRooms": 3,
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
  italicName: "Jiwa",
  tagline: "Quiet Minimal Retreat.",
  description: "Nemu Jiwa is designed for deep relaxation. Located on Sunset Road, Bali, each space is shaped by light, proportion, and silence. Creating a place that feels both refined and deeply personal.",
  heroImage: "/villa3.webp", // Ensure this matches your asset
  gallery: ["/villa-1.webp", "/villa5.webp"], 
  specs: [
    { label: "Land Size", value: "178 m²" },
    { label: "Cooling", value: "3 Indoor & Outdoor AC" },
    { label: "Floor", value: "2 Levels" },
    { label: "Number of Rooms", value: "3 Bed & 2 Bath" },
    { label: "House Dimensions", value: "8 × 15 m" },
    { label: "Capacity", value: "6 Guests" },
  ]
};

export default function NemuJiwaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <VillaClient data={villaData} />
    </>
  );
}