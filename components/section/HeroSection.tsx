"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { customEase } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F3F0EA] text-neutral-900">
      
      {/* ======================================================================
          DESKTOP VIEW
          100% untouched. Exact copy of your provided code.
      ====================================================================== */}
      <div className="hidden lg:block mx-auto max-w-[1440px] px-4 pt-22 pb-16 md:pb-20">
        {/* Split layout */}
        <div className="grid grid-cols-12 gap-10 items-start">
          {/* LEFT column */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-1 relative">
            {/* small inset image */}
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.6, ease: customEase, delay: 0.2 }}
              className="w-[140px] md:w-[170px] aspect-square overflow-hidden"
            >
              <Image
                src="/villa8.webp"
                alt="NemuSaya detail"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </motion.div>

            {/* Book now micro-link (center-ish like ref) */}
            <div className="mt-10 md:mt-12 text-right">
              <Link
                href="/book"
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-neutral-700 hover:text-neutral-900 transition"
              >
                <span className="h-px w-10 bg-neutral-400/80" />
                Book now
              </Link>
            </div>
                      
           <motion.div
             initial={{ opacity: 0, y: 24 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="col-span-6 mt-14 md:mt-32"
           >
             <h1 className="font-text font-medium text-[56px] md:text-[5em] font-light tracking-wide leading-[1.05]">
               <span className="italic font-style">Green</span> Light
               <br />
               City <span className="italic font-style">Villa</span>
             </h1>
           </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 w-[30%] text-[10px] tracking-[0.22em] uppercase text-neutral-600"
            >
              A private Sanctuary, on Sunset Road, Bali
            </motion.p>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="relative overflow-hidden"
            >
              <motion.div 
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 1.6, ease: customEase, delay: 0.2 }}
                className="relative w-full h-[520px] md:h-[620px]">
                <Image
                  src="/villa-3.webp"
                  alt="NemuSaya Villa"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>


      {/* ======================================================================
          MOBILE VIEW
          Revised for a cohesive, editorial vertical flow.
      ====================================================================== */}
      <div className="lg:hidden px-4 pt-28 pb-16 flex flex-col gap-8">
        
        {/* 1. Main Huge Image (Moved to top for visual impact) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="relative overflow-hidden w-full"
        >
          <motion.div 
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.6, ease: customEase, delay: 0.2 }}
            className="relative w-full h-[60vh] min-h-[400px]">
            <Image
              src="/villa-3.webp"
              alt="NemuSaya Villa"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* 2. Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4"
        >
          <h1 className="font-text font-medium text-[52px] font-light tracking-wide leading-[1.05]">
            <span className="italic font-style">Green</span> Light
            <br />
            City <span className="italic font-style">Villa</span>
          </h1>
        </motion.div>

        {/* 3. Description Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[80%] text-[10px] tracking-[0.22em] uppercase text-neutral-600"
        >
          A private Sanctuary, on Sunset Road, Bali
        </motion.p>

        {/* 4. Bottom Row: Small Inset Image + Link */}
        <div className="flex items-end justify-between mt-8">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.6, ease: customEase, delay: 0.2 }}
            className="w-[120px] aspect-square overflow-hidden relative"
          >
            <Image
              src="/villa8.webp"
              alt="NemuSaya detail"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="pb-2">
            <Link
              href="/book"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-neutral-700 hover:text-neutral-900 transition"
            >
              <span className="h-px w-8 bg-neutral-400/80" />
              Book now
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}