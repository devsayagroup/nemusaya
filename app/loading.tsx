"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FCFAF7]"
    >
      {/* 1. THE SUBTLE GRAIN (Essential for the 'Paper/Stone' look) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="flex flex-col items-center">
        
        {/* 2. THE LOGO: "The Rising Sun" Entry */}
        <div className="relative overflow-hidden px-4">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 1.8, 
              ease: [0.16, 1, 0.3, 1], // Cinematic ease-out
              delay: 0.2 
            }}
          >
            <Image
              src="/logo/logo-black.webp"
              alt="NemuSaya"
              width={160}
              height={80}
              className="opacity-80 grayscale contrast-125"
            />
          </motion.div>
        </div>

        {/* 3. THE DIVIDER: "The Horizon Line" */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.15 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
          className="mt-8 h-[0.5px] w-24 bg-neutral-950 origin-center"
        />

        {/* 4. THE CAPTION: "Slow Breathe" Text */}
        <div className="mt-8 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            animate={{ opacity: 0.4, letterSpacing: "0.6em" }}
            transition={{ duration: 2.5, delay: 0.8 }}
            className="text-[9px] font-light uppercase text-neutral-900 tracking-[0.6em] indent-[0.6em]"
          >
            Sanctuary
          </motion.p>
        </div>

      </div>

      {/* 5. AMBIENT GRADIENT (The "Sunlight" through a window) */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.4, x: 100 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EAE5D8]/30 to-transparent pointer-events-none"
      />
    </motion.div>
  );
}