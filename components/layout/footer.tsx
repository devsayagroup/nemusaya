"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#A7B18E] text-neutral-950 font-sans selection:bg-neutral-950 selection:text-[#A7B18E] overflow-hidden">
      
      {/* Optional Noise Texture to match the rest of the site's editorial feel */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12 pt-24 pb-8 flex flex-col justify-between min-h-[60vh]">
        
        {/* ======================================================================
            TOP GRID (Responsive)
            Mobile: 2 columns / Desktop: 12 columns
        ====================================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-16 gap-x-8 text-base md:text-lg font-light pb-24">
          
          {/* Menu */}
          <div className="col-span-1 md:col-span-3 flex flex-col">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-6 font-medium">Menu</p>
            <ul className="space-y-3">
              <li><Link href="/story" className="hover:opacity-50 transition-opacity duration-300">Our Story</Link></li>
              <li><Link href="/villas" className="hover:opacity-50 transition-opacity duration-300">Villa Types</Link></li>
              <li><Link href="/services" className="hover:opacity-50 transition-opacity duration-300">Services</Link></li>
              <li><Link href="/contact" className="hover:opacity-50 transition-opacity duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div className="col-span-1 md:col-span-4 flex flex-col">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-6 font-medium">Location</p>
            <p className="leading-relaxed">
              Sunset Road, Bali <br />
              Indonesia 80361
            </p>
          </div>

          {/* Contacts (Drops to a new row on mobile) */}
          <div className="col-span-1 md:col-span-3 flex flex-col">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-6 font-medium">Inquiries</p>
            <p className="leading-relaxed">
              <a href="tel:+6281234567890" className="hover:opacity-50 transition-opacity duration-300">+62 812 3456 7890</a> <br />
              <a href="mailto:hello@nemusayavilla.com" className="hover:opacity-50 transition-opacity duration-300">hello@nemusayavilla.com</a>
            </p>
          </div>

          {/* Social */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-6 font-medium">Social</p>
            <ul className="space-y-3">
              <li><a href="#" className="hover:opacity-50 transition-opacity duration-300">Instagram</a></li>
              <li><a href="#" className="hover:opacity-50 transition-opacity duration-300">Tiktok</a></li>
            </ul>
          </div>

        </div>

        {/* ======================================================================
            BOTTOM SECTION (Brand & Copyright)
        ====================================================================== */}
        <div className="flex flex-col border-t border-neutral-950/10 pt-12">
          
          {/* Big Brand Text scaling cleanly via Viewport Width (vw) */}
          <div className="flex justify-center w-full mb-12">
            <h2 className="font-style text-[11vw] leading-[0.8] tracking-tighter text-[#F8F7F3] font-light opacity-60 mix-blend-overlay whitespace-nowrap select-none">
              NEMUSAYA VILLA
            </h2>
          </div>

          {/* Bottom Bar (Stacks on mobile, spreads on desktop) */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-neutral-950/60 font-medium">
            <p>© 2026 NEMUSAYA — ALL RIGHTS RESERVED</p>
            <div className="flex gap-6">
              <p>115.1390° E, 8.6503° S</p>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}