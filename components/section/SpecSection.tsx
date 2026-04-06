// // // "use client";

// // // import Image from "next/image";
// // // import { motion } from "framer-motion";

// // // type SpecItem = {
// // //   label: string;
// // //   value: string;
// // // };

// // // export default function SpecSection() {
// // //   const specsTop: SpecItem[] = [
// // //     { label: "Land Size", value: "178 m²" },
// // //     { label: "Central Heating & Cooling", value: "3 Indoor & Outdoor AC" },
// // //     { label: "Outdoor Patio Size", value: "38 m²" },
// // //   ];

// // //   const specsBottom: SpecItem[] = [
// // //     { label: "Floor", value: "2 Levels" },
// // //     { label: "Number of Rooms", value: "3 Bedrooms & 2 Bathrooms" },
// // //     { label: "House Dimensions", value: "8 × 15 m" },
// // //   ];

// // //   return (
// // //     <section className="bg-[#F3F0EA]">
// // //       <div className="mx-auto max-w-[1440px] px-4 py-20 md:py-28">
// // //         <div className="grid grid-cols-12 gap-10 items-start">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 14 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.6, ease: "easeOut" }}
// // //             className="col-span-12 lg:col-span-4 lg:col-start-2"
// // //           >
// // //             <p className="text-[13px] md:text-sm leading-relaxed text-neutral-700 max-w-sm">
// // //               NemuSaya Villa invites you to slow down. Where modern design and
// // //               calm proportions meet everyday comfort.
// // //             </p>
// // //           </motion.div>

// // //           <motion.div
// // //             initial={{ opacity: 0, y: 18 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.7, ease: "easeOut" }}
// // //             className="col-span-12 lg:col-span-7 lg:col-start-6"
// // //           >
// // //             <div className="relative w-full h-[260px] md:h-[340px] lg:h-[380px]">
// // //               <Image
// // //                 src="/outline-villa.png" 
// // //                 alt="Villa elevation drawing"
// // //                 fill
// // //                 className="object-contain"
// // //               />
// // //             </div>
// // //           </motion.div>
// // //         </div>

// // //         <div className="mt-14 md:mt-16">
// // //           <div className="grid grid-cols-12 gap-y-10 gap-x-10">
// // //             {specsTop.map((s, idx) => (
// // //               <SpecCard key={s.label} item={s} colClass={specCol(idx)} />
// // //             ))}

// // //             {specsBottom.map((s, idx) => (
// // //               <SpecCard
// // //                 key={s.label}
// // //                 item={s}
// // //                 colClass={specCol(idx)}
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // function SpecCard({
// // //   item,
// // //   colClass,
// // // }: {
// // //   item: { label: string; value: string };
// // //   colClass: string;
// // // }) {
// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 12 }}
// // //       whileInView={{ opacity: 1, y: 0 }}
// // //       viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
// // //       transition={{ duration: 0.55, ease: "easeOut" }}
// // //       className={["col-span-12", colClass].join(" ")}
// // //     >
// // //       <p className="text-[11px] tracking-[0.22em] uppercase text-neutral-600">
// // //         {item.label}
// // //       </p>
// // //       <p className="mt-3 text-3xl md:text-4xl font-light text-neutral-900 leading-tight">
// // //         {item.value}
// // //       </p>
// // //     </motion.div>
// // //   );
// // // }

// // // function specCol(index: number) {
// // //   // index 0/1/2 for each row
// // //   if (index === 0) return "lg:col-span-3 lg:col-start-2";
// // //   if (index === 1) return "lg:col-span-6 lg:col-start-5";
// // //   return "lg:col-span-3 lg:col-start-11";
// // // }

// // "use client";

// // import Image from "next/image";
// // import { motion } from "framer-motion";

// // type SpecItem = { label: string; value: string };

// // export default function SpecSection() {
// //   const leftSpecs: SpecItem[] = [
// //     { label: "Land Size", value: "178 m²" },
// //     { label: "Cooling", value: "3 Indoor & Outdoor AC" },
// //     { label: "Outdoor Patio Size", value: "38 m²" },
// //   ];

// //   const rightSpecs: SpecItem[] = [
// //     { label: "Floor", value: "2 Levels" },
// //     { label: "Number of Rooms", value: "3 Bedrooms & 2 Bathrooms" },
// //     { label: "House Dimensions", value: "8 × 15 m" },
// //   ];

// //   return (
// //     <section className="bg-[#F3F0EA]">
// //       <div className="mx-auto px-4 py-20 md:py-28">
// //         {/* Intro row (small, optional) */}
// //         {/* <motion.p
// //           initial={{ opacity: 0, y: 10 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.55, ease: "easeOut" }}
// //           className="flex mx-auto max-w-sm text-[13px] md:text-sm leading-relaxed text-neutral-700 lg:ml-[8.3333%]"
// //         >
// //           NemuSaya Villa invites you to slow down—where modern design and calm
// //           proportions meet everyday comfort.
// //         </motion.p> */}

// //         {/* Main layout */}
// //         <div className="mt-14 md:mt-16 grid grid-cols-12 gap-y-14 gap-x-24 items-center">
// //           {/* LEFT specs */}
// //           <div className="col-span-12 lg:col-span-3 lg:col-start-2">
// //             <div className="space-y-12 lg:space-y-14">
// //               {leftSpecs.map((s, i) => (
// //                 <SpecBlock key={s.label} item={s} delay={i * 0.04} align="right" />
// //               ))}
// //             </div>
// //           </div>

// //           {/* CENTER outline */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 12 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.7, ease: "easeOut" }}
// //             className="col-span-12 lg:col-span-4 lg:col-start-5"
// //           >
// //             <div className="relative w-full h-[240px] md:h-[320px] lg:h-[380px]">
// //               <Image
// //                 src="/outline-villa.png"
// //                 alt="Villa outline"
// //                 fill
// //                 className="object-contain"
// //                 priority
// //               />
// //             </div>
// //           </motion.div>

// //           {/* RIGHT specs (slightly lower for asymmetry) */}
// //           <div className="col-span-12 lg:col-span-3 lg:col-start-9">
// //             <div className="space-y-12 lg:space-y-14">
// //               {rightSpecs.map((s, i) => (
// //                 <SpecBlock
// //                   key={s.label}
// //                   item={s}
// //                   delay={0.06 + i * 0.04}
// //                   align="left"
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* <div className="mt-16 hidden lg:block h-px bg-neutral-900/10" /> */}
// //       </div>
// //     </section>
// //   );
// // }

// // function SpecBlock({
// //   item,
// //   delay,
// //   align,
// // }: {
// //   item: SpecItem;
// //   delay: number;
// //   align: "left" | "right";
// // }) {
// //   const alignClass = align === "right" ? "text-right" : "text-left";

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 10 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
// //       transition={{ duration: 0.55, delay, ease: "easeOut" }}
// //       className={alignClass}
// //     >
// //       <p className="text-[11px] tracking-[0.22em] uppercase text-neutral-600">
// //         {item.label}
// //       </p>
// //       <p className="mt-3 text-3xl md:text-4xl font-light text-neutral-900 leading-[1.08]">
// //         {item.value}
// //       </p>
// //     </motion.div>
// //   );
// // }


// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform, type Variants } from "framer-motion";

// type SpecItem = { label: string; value: string };

// const villaSpecs: SpecItem[] = [
//   { label: "Land Size", value: "178 m²" },
//   { label: "Cooling", value: "3 Indoor & Outdoor AC" },
//   { label: "Outdoor Patio Size", value: "38 m²" },
//   { label: "Floor", value: "2 Levels" },
//   { label: "Number of Rooms", value: "3 Bedrooms & 2 Bathrooms" },
//   { label: "House Dimensions", value: "8 × 15 m" },
// ];

// export default function SpecSection() {
//   const sectionRef = useRef<HTMLElement>(null);

//   // 1. Scroll tracking for the subtle Parallax
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"], // Track from entering viewport to leaving
//   });

//   // 2. Parallax value: Moves the image slightly opposite to the scroll
//   const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

//   // 3. Orchestrated Stagger for the specs matrix
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.4 },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // Ultra-smooth ease-out
//     },
//   };

//   return (
//     <section ref={sectionRef} className="bg-[#F3F0EA] overflow-hidden">
//       <div className="mx-auto max-w-[1440px] px-6 py-24 md:py-32 flex flex-col relative">
        
//         {/* Subtle Ambient Grain (Optional, enhances the blueprint feel) */}
//         <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

//         {/* Header Tag */}
//         <div className="mb-12 md:mb-16 flex justify-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             whileInView={{ opacity: 1, height: 40 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: "easeInOut" }}
//             className="flex flex-col items-center"
//           >
//             <p className="text-[9px] tracking-[0.4em] uppercase text-neutral-500">
//               Specifications
//             </p>
//             {/* Minimalist vertical anchor line */}
//             <div className="mt-4 w-[1px] h-8 bg-neutral-900/20" />
//           </motion.div>
//         </div>

//         {/* Center Focal Image with Parallax */}
//         <div className="relative w-full max-w-4xl mx-auto h-[260px] md:h-[400px] lg:h-[500px] flex items-center justify-center z-0">
//           <motion.div 
//             style={{ y: imageY }} 
//             className="relative w-full h-full"
//           >
//             <Image
//               src="/outline-villa.png"
//               alt="Villa architectural outline"
//               fill
//               className="object-contain opacity-80"
//               priority
//             />
//           </motion.div>
//         </div>

//         {/* The Architectural Matrix (Specs Grid) */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
//           className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-20 gap-y-12 md:gap-y-16 relative z-10"
//         >
//           {villaSpecs.map((s) => (
//             <motion.div
//               key={s.label}
//               variants={itemVariants}
//               className="flex flex-col border-t border-neutral-900/10 pt-6 group"
//             >
//               <p className="text-[10px] tracking-[0.25em] uppercase text-neutral-400 transition-colors duration-500 group-hover:text-neutral-800">
//                 {s.label}
//               </p>
//               <p className="mt-4 text-2xl md:text-3xl lg:text-[32px] font-light text-neutral-900 leading-[1.1] tracking-tight">
//                 {s.value}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }


// components/SpecsSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { customEase } from "@/lib/constants";

const specs = [
  { label: "Land Size", value: "178 m²" },
  { label: "Cooling", value: "3 Indoor & Outdoor AC" },
  { label: "Outdoor Patio Size", value: "38 m²" },
  { label: "Floor", value: "2 Levels" },
  { label: "Number of Rooms", value: "3 Bed & 2 Bath" },
  { label: "House Dimensions", value: "8 × 15 m" },
];

export default function SpecsSection() {
  return (
    <section className="py-32 md:py-48 px-6 lg:px-12 mx-auto max-w-[1440px] border-t border-[#111]/10 relative" id="services">
      <div className="flex justify-center mb-16 md:mb-24">
        <p className="text-[9px] tracking-[0.4em] uppercase text-neutral-400">Specifications</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: customEase }}
        className="relative w-full max-w-4xl mx-auto h-[260px] md:h-[500px]"
      >
        <Image 
          src="/outline-villa.png" 
          alt="Architectural Blueprint" 
          fill 
          className="object-contain opacity-80" 
        />
      </motion.div>

      <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 md:gap-y-16">
        {specs.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: customEase }}
            className="border-t border-[#111]/10 pt-4 md:pt-6 group"
          >
            <p className="text-[9px] tracking-[0.25em] uppercase text-neutral-500 transition-colors duration-500 group-hover:text-neutral-900">{s.label}</p>
            <p className="mt-2 md:mt-4 text-2xl md:text-3xl font-light tracking-tight">{s.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}