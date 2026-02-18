// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Header() {
//   return (
//     <header className="w-full bg-neutral-50 border-b border-neutral-200 font-style">
//       <div className="mx-auto max-w-[1440px] px-4 py-6 grid grid-cols-12 items-center text-sm uppercase tracking-wide text-neutral-800">
        
//         {/* Brand */}
//         <div className="col-span-2 font-medium">
//             <Image src="/logo/logo-h-black1.webp" height={180} width={180} alt="logo nemusaya" />
//         </div>

//         {/* Navigation Left */}
//         <nav className="col-span-3 flex gap-8">
//           <Link href="#">About</Link>
//           <Link href="#">Rooms</Link>
//         </nav>

//         {/* Navigation Right */}
//         <nav className="col-span-2 flex gap-8">
//           <Link href="#">FAQ</Link>
//           <Link href="#">Contact</Link>
//         </nav>

//         {/* Tagline */}
//         <div className="col-span-3 text-right text-neutral-500">
//           Start Your Peaceful Retreat
//         </div>

//         {/* CTA */}
//         <motion.div
//           whileHover={{ x: 4 }}
//           className="col-span-2 text-right font-medium"
//         >
//           <Link href="#" className="flex items-center justify-end gap-2">
//             Reserve Now <span>→</span>
//           </Link>
//         </motion.div>

//       </div>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const NAV = [
  { label: "Our Story", href: "/our-story" },
  { label: "Villa Types", href: "/villa" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="absolute bg-[#F3F0EA] top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1440px] px-4 pt-8">
        <div className="flex items-start justify-between">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <Link
              href="/"
              className="text-neutral-900 tracking-[0.08em] uppercase text-sm md:text-base"
            >
             <Image src="/logo/logo-h-black1.webp" height={180} width={180} alt="logo nemusaya" />
            </Link>
          </motion.div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-22">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] font-style tracking-[0.22em] uppercase text-neutral-700 hover:text-neutral-900 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right micro action (optional) */}
          {/* <div className="hidden md:block">
            <Link
              href="/book"
              className="text-[11px] tracking-[0.22em] uppercase text-neutral-700 hover:text-neutral-900 transition"
            >
              Book
            </Link>
          </div> */}

          {/* Mobile */}
          <div className="md:hidden">
            <Link
              href="/menu"
              className="text-[11px] tracking-[0.22em] uppercase text-neutral-700"
            >
              Menu
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
