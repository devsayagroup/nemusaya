// "use client";

// import { motion } from "framer-motion";

// export default function HeroSection() {
//   return (
//     <section className="relative h-[100svh] w-full overflow-hidden bg-neutral-900">
      
//       {/* Background Image */}
//       <motion.div
//         initial={{ scale: 1.05 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1.8, ease: "easeOut" }}
//         className="absolute inset-0"
//       >
//         <img
//           src="/villa1.jpg"
//           alt="NemuSaya Villa"
//           className="h-full w-full object-cover"
//         />
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/30" />
//       </motion.div>

//       {/* Content Grid */}
//       <div className="relative z-10 mx-auto max-w-[1440px] h-full px-4">
//         <div className="grid grid-cols-12 h-full text-white">
          
//           {/* Title */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             className="col-span-6 pt-40"
//           >
//             <h1 className="font-text font-medium text-[56px] md:text-[4em] font-light tracking-wide leading-[1.05]">
//               <span className="italic font-style">Green</span> Light
//               <br />
//               City <span className="italic font-style">Villa</span>
//             </h1>
//           </motion.div>

//           {/* Spacer */}
//           <div className="col-span-6" />

//           {/* Bottom Text */}
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.6 }}
//             className="col-span-4 self-end pb-24 text-sm uppercase tracking-wider text-neutral-200"
//           >
//             A Private Sanctuary <br />
//             On Sunset Road, Bali
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F3F0EA] text-neutral-900">
      <div className="mx-auto max-w-[1440px] px-4 pt-22 pb-16 md:pb-20">
        {/* Split layout */}
        <div className="grid grid-cols-12 gap-10 items-start">
          {/* LEFT column */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-1 relative">
            {/* small inset image */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-[140px] md:w-[170px] aspect-square overflow-hidden"
            >
              <Image
                src="/villa1.jpg"
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

            {/* Big editorial headline */}
            {/* <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-14 md:mt-16 text-[54px] md:text-[78px] leading-[0.95] font-light"
            >
              A PLACE
              <br />
              WHERE
              <br />
              TIME <span className="font-style italic">SLOWS</span>
              
            </motion.h1> */}
                     
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

            {/* Location microcopy bottom-left */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 w-[30%] text-[10px] tracking-[0.22em] uppercase text-neutral-600"
            >
              A private Sanctuary, on Sunset Road, Bali
            </motion.p>
          </div>

          {/* RIGHT column (large hero image) */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="relative overflow-hidden"
            >
              {/* Keep it tall like the reference */}
              <div className="relative w-full h-[520px] md:h-[620px]">
                <Image
                  src="/villa1.jpg"
                  alt="NemuSaya Villa"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

