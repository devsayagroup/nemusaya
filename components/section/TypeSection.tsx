// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function TypeSection() {
//   return (
//     <section className="relative min-h-screen bg-neutral-50 text-black">
//       {/* transparent green like footer */}
//       <div className="absolute inset-0 bg-[#0E3B2E]/18" />
//       <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />

//       <div className="relative mx-auto max-w-[1440px] px-4 py-20 md:py-24 min-h-screen flex flex-col">
//         <div className="mb-10 md:mb-12">
//           <h2 className="mt-4 text-[40px] md:text-[56px] font-light leading-tight text-black">
//             Two ways to <span className="font-style italic">slow down</span>
//           </h2>
//         </div>

//         <div className="flex-1 grid grid-cols-12 gap-10 items-stretch">
//           <Link
//             href="/villa/nemu-rasa"
//             className="group col-span-12 lg:col-span-6 lg:col-start-2"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.55, ease: "easeOut" }}
//               className="h-full flex flex-col"
//             >
//               <div className="relative flex-1 overflow-hidden ring-1 ring-black/12">
//                 <Image
//                   src="/villa2.webp"
//                   alt="Nemu Rasa"
//                   fill
//                   className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
//               </div>

//               <div className="mt-5 flex items-end justify-between">
//                 <div>
//                   <p className="text-black/70 text-xs tracking-[0.22em] uppercase">
//                     Warm Modern Sanctuary
//                   </p>
//                   <p className="mt-2 text-3xl md:text-4xl font-light text-black leading-none">
//                     Nemu <span className="font-style italic">Rasa</span>
//                   </p>
//                 </div>

//                 <span className="text-black/70 text-2xl group-hover:translate-x-1 transition-transform">
//                   →
//                 </span>
//               </div>
//             </motion.div>
//           </Link>

//           {/* RIGHT (wide) — Nemu Jiwa */}
//           <Link
//             href="/villa/nemu-jiwa"
//             className="group col-span-12 lg:col-span-6 lg:col-start-6"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.06, duration: 0.55, ease: "easeOut" }}
//               className="h-full flex flex-col"
//             >
//               {/* make this one shorter for asymmetry */}
//               <div className="relative flex-1 overflow-hidden ring-1 ring-black/12">
//                 <Image
//                   src="/villa3.webp"
//                   alt="Nemu Rasa"
//                   fill
//                   className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
//               </div>

//               <div className="mt-auto pt-6 flex items-end justify-between">
//                 <div>
//                   <p className="text-black/70 text-xs tracking-[0.22em] uppercase">
//                     Quiet Minimal Retreat
//                   </p>
//                   <p className="mt-2 text-3xl md:text-4xl font-light text-black leading-none">
//                     Nemu <span className="font-style italic">Jiwa</span>
//                   </p>
//                 </div>

//                 <span className="text-black/70 text-2xl group-hover:translate-x-1 transition-transform">
//                   →
//                 </span>
//               </div>
//             </motion.div>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TypeSection() {
  return (
    <section className="relative min-h-screen bg-[#FCFAF7] text-black overflow-hidden" id="villa">
      {/* Signature NemuSaya Green Wash */}
      <div className="absolute inset-0 bg-[#0E3B2E]/[0.03] pointer-events-none" />
      
      <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:py-32">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.5em] uppercase mb-4"
          >
            Our Collections
          </motion.p>
          <h2 className="text-[44px] md:text-[64px] font-light leading-[1.1] text-neutral-900">
            Two ways to <span className="font-serif italic">slow down</span>
          </h2>
        </div>

        {/* Asymmetric Tall Grid */}
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
          
          {/* LEFT CARD — Nemu Rasa (Starts higher) */}
          <Link
            href="/villa/nemu-rasa"
            className="group col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col"
            >
              {/* Taller Image Container */}
              <div className="relative aspect-[3/4.5] md:aspect-[6/3] overflow-hidden bg-neutral-200">
                <Image
                  src="/villa2.webp"
                  alt="Nemu Rasa"
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="mt-8 flex justify-between items-start">
                <div>
                  <span className="text-[9px] tracking-[0.3em] uppercase opacity-50">Warm Modern Sanctuary</span>
                  <h3 className="mt-2 text-3xl font-light tracking-tight">Nemu <span className="italic font-serif">Rasa</span></h3>
                </div>
                <div className="h-10 w-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <span className="text-xl">→</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* RIGHT CARD — Nemu Jiwa (Lower/Staggered) */}
          <Link
            href="/villa/nemu-jiwa"
            className="group col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-7 md:mt-32"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="relative aspect-[3/4.5] md:aspect-[6/3] overflow-hidden bg-neutral-200">
                <Image
                  src="/villa3.webp"
                  alt="Nemu Jiwa"
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="mt-8 flex justify-between items-start">
                <div>
                  <span className="text-[9px] tracking-[0.3em] uppercase opacity-50">Quiet Minimal Retreat</span>
                  <h3 className="mt-2 text-3xl font-light tracking-tight">Nemu <span className="italic font-serif">Jiwa</span></h3>
                </div>
                <div className="h-10 w-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <span className="text-xl">→</span>
                </div>
              </div>
            </motion.div>
          </Link>

        </div>
      </div>
    </section>
  );
}