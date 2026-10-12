import { Metadata } from "next";
import "@/app/globals.css"; // Fixed CSS import path using alias
import LayoutClient from "./layout-client";

// 1. The highly optimized SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Nemu Saya Villa | Luxury Private Sanctuary in Bali",
    template: "%s | Nemu Saya Villa Bali"
  },
  description: "Experience serene luxury at Nemu Saya, a private boutique villa located on Sunset Road, Bali. A modern sanctuary blending architecture with nature.",
  keywords: ["Luxury Villa Bali", "Private Villa Sunset Road", "Nemu Saya", "Boutique Villa Seminyak", "Saya Group", "Bali Accommodation"],
  metadataBase: new URL('https://www.nemusaya.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Nemu Saya Villa | The Soul of Space in Bali",
    description: "A private sanctuary on Sunset Road, Bali. Where modern architecture meets nature.",
    url: "https://www.nemusaya.com",
    siteName: "Nemu Saya Villa",
    images: [
      {
        url: "/hero-villa.webp", // Ensure this image is in your /public folder
        width: 1200,
        height: 630,
        alt: "Nemu Saya Villa Bali Exterior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// 2. The JSON-LD Schema Object for AI & Google Rich Snippets
const schema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Nemu Saya Villa",
  "description": "A luxury private boutique villa located on Sunset Road, Bali. Managed by Saya Group.",
  "url": "https://www.nemusaya.com",
  "telephone": "+6281234567890", // Replace with actual number
  "email": "hello@nemusayavilla.com", // Replace with actual email
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sunset Road",
    "addressLocality": "Bali",
    "postalCode": "80361",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -8.6503, // Replace with actual exact latitude
    "longitude": 115.1390 // Replace with actual exact longitude
  },
  "parentOrganization": {
    "@type": "Organization",
    "name": "Saya Group",
    "url": "https://www.sayagroup.id"
  },
  "sameAs": [
    "https://www.instagram.com/nemusayavillas"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Injecting Structured Data directly into the HTML payload */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}