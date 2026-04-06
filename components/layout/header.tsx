"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { label: "Our Story", href: "/#story" },
  { label: "Villa Types", href: "/#villa" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

const customEase = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Smooth Scroll Handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If the link is an anchor and we are currently on the home page
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault(); // Stop standard jump
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // Always close the mobile menu on click
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: customEase }}
        className="absolute top-0 left-0 right-0 z-40 bg-transparent"
      >
        <div className="mx-auto max-w-[1440px] px-4 py-8">
          <div className="flex items-center justify-between">
            
            {/* Brand */}
            <Link href="/" className="relative z-10 flex items-center">
              <div className="relative w-[120px] md:w-[160px] lg:w-[180px] h-[40px] md:h-[30px]">
                <Image 
                  src="/logo/logo-h-black1.webp" 
                  fill
                  className="object-contain object-left"
                  alt="NemuSaya Logo" 
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10 lg:gap-14">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), ease: customEase }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[10px] lg:text-[11px] font-sans tracking-[0.2em] uppercase text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-[10px] tracking-[0.2em] uppercase text-neutral-900 pb-1 border-b border-neutral-900/30 transition-colors"
                aria-label="Open Menu"
              >
                Menu
              </button>
            </div>
            
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: customEase }}
            className="fixed inset-0 z-[100] bg-[#F8F7F3] flex flex-col justify-between px-6 py-6 overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="relative w-[120px] h-[40px]">
                <Image 
                  src="/logo/logo-h-black1.webp" 
                  fill
                  className="object-contain object-left"
                  alt="NemuSaya Logo" 
                />
              </Link>
              
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-[10px] tracking-[0.2em] uppercase text-neutral-900 pb-1 border-b border-neutral-900/30 transition-colors"
                aria-label="Close Menu"
              >
                Close
              </button>
            </div>

            <div className="flex flex-col gap-8 mt-24">
              {NAV.map((item, i) => (
                <div key={item.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ delay: 0.2 + (i * 0.05), duration: 0.8, ease: customEase }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-[44px] font-light tracking-tight text-neutral-900 block"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col gap-6 mt-auto mb-8"
            >
              <Link 
                href="/book" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-neutral-900"
              >
                <span className="h-px w-8 bg-neutral-900/50" />
                Book Now
              </Link>

              <div className="text-[9px] tracking-[0.2em] uppercase text-neutral-500 flex flex-col gap-2">
                <p>hello@nemusayavilla.com</p>
                <p>Sunset Road, Bali</p>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}