"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const customEase = [0.16, 1, 0.3, 1] as const;

type VillaData = {
  name: string;
  italicName: string;
  tagline: string;
  description: string;
  heroImage: string;
  gallery: string[];
  specs: { label: string; value: string }[];
};

export default function VillaClient({ data }: { data: VillaData }) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main ref={containerRef} className="bg-[#F8F7F3] text-neutral-950 font-sans selection:bg-neutral-950 selection:text-[#F8F7F3] overflow-hidden">
      
      {/* GLOBAL NOISE */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 1. CINEMATIC HERO */}
      <section className="relative h-screen min-h-[800px] flex flex-col justify-end pb-24 px-6 lg:px-12 mx-auto max-w-[1440px] pt-32">
        <motion.div 
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.6, ease: customEase, delay: 0.2 }}
          className="absolute top-0 left-0 w-full h-[85vh] overflow-hidden -z-10"
        >
          <motion.div style={{ y }} className="relative w-full h-[120%] -top-[10%]">
            <Image src={data.heroImage} alt={data.name} fill className="object-cover" priority />
          </motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: customEase, delay: 0.6 }}
              className="text-[14vw] md:text-[10vw] leading-[0.8] tracking-tighter font-extralight text-[#111111] mix-blend-difference"
            >
             {data.name} <span className="font-serif italic text-[#A7B18E]">{data.italicName}</span>
            </motion.h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          >
            <Link href="/book" className="flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-[#F8F7F3] mix-blend-difference hover:opacity-50 transition-opacity">
              <span className="w-12 h-px bg-[#F8F7F3]" /> Book Sanctuary
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. EDITORIAL STORY */}
      <section className="py-32 px-6 lg:px-12 mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="col-span-1 md:col-span-4">
            <p className="text-[10px] tracking-[0.4em] uppercase text-neutral-500">Philosophy</p>
            <h2 className="text-3xl font-light mt-4 tracking-tight">{data.tagline}</h2>
          </div>
          <div className="col-span-1 md:col-span-7 lg:col-span-6 lg:col-start-7">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: customEase }}
              className="text-xl md:text-2xl leading-[1.6] font-light text-neutral-800"
            >
              {data.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* 3. STAGGERED GALLERY (Saisei Blueprint Style) */}
      <section className="pb-32 px-6 lg:px-12 mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12 items-start">
          
          <motion.div 
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: customEase }}
            className="col-span-1 md:col-span-7 relative aspect-[4/3]"
          >
            <Image src={data.gallery[0]} alt="Gallery 1" fill className="object-cover" />
          </motion.div>

          <motion.div 
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: customEase, delay: 0.2 }}
            className="col-span-1 md:col-span-4 md:col-start-9 relative aspect-[3/4] md:mt-32"
          >
            <Image src={data.gallery[1]} alt="Gallery 2" fill className="object-cover" />
          </motion.div>

        </div>
      </section>

      {/* 4. ARCHITECTURAL MATRIX (Specs) */}
      <section className="py-32 px-6 lg:px-12 mx-auto max-w-[1440px] border-t border-neutral-900/10">
        <p className="text-[10px] tracking-[0.4em] uppercase text-neutral-400 mb-16">Specifications</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
          {data.specs.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: customEase }}
              className="border-t border-neutral-900/10 pt-4"
            >
              <p className="text-[9px] tracking-[0.2em] uppercase text-neutral-500">{s.label}</p>
              <p className="mt-2 text-2xl font-light">{s.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}