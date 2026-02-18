// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// type SpecItem = {
//   label: string;
//   value: string;
// };

// export default function SpecSection() {
//   const specsTop: SpecItem[] = [
//     { label: "Land Size", value: "178 m²" },
//     { label: "Central Heating & Cooling", value: "3 Indoor & Outdoor AC" },
//     { label: "Outdoor Patio Size", value: "38 m²" },
//   ];

//   const specsBottom: SpecItem[] = [
//     { label: "Floor", value: "2 Levels" },
//     { label: "Number of Rooms", value: "3 Bedrooms & 2 Bathrooms" },
//     { label: "House Dimensions", value: "8 × 15 m" },
//   ];

//   return (
//     <section className="bg-[#F3F0EA]">
//       <div className="mx-auto max-w-[1440px] px-4 py-20 md:py-28">
//         <div className="grid grid-cols-12 gap-10 items-start">
//           <motion.div
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="col-span-12 lg:col-span-4 lg:col-start-2"
//           >
//             <p className="text-[13px] md:text-sm leading-relaxed text-neutral-700 max-w-sm">
//               NemuSaya Villa invites you to slow down. Where modern design and
//               calm proportions meet everyday comfort.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="col-span-12 lg:col-span-7 lg:col-start-6"
//           >
//             <div className="relative w-full h-[260px] md:h-[340px] lg:h-[380px]">
//               <Image
//                 src="/outline-villa.png" 
//                 alt="Villa elevation drawing"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           </motion.div>
//         </div>

//         <div className="mt-14 md:mt-16">
//           <div className="grid grid-cols-12 gap-y-10 gap-x-10">
//             {specsTop.map((s, idx) => (
//               <SpecCard key={s.label} item={s} colClass={specCol(idx)} />
//             ))}

//             {specsBottom.map((s, idx) => (
//               <SpecCard
//                 key={s.label}
//                 item={s}
//                 colClass={specCol(idx)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function SpecCard({
//   item,
//   colClass,
// }: {
//   item: { label: string; value: string };
//   colClass: string;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 12 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
//       transition={{ duration: 0.55, ease: "easeOut" }}
//       className={["col-span-12", colClass].join(" ")}
//     >
//       <p className="text-[11px] tracking-[0.22em] uppercase text-neutral-600">
//         {item.label}
//       </p>
//       <p className="mt-3 text-3xl md:text-4xl font-light text-neutral-900 leading-tight">
//         {item.value}
//       </p>
//     </motion.div>
//   );
// }

// function specCol(index: number) {
//   // index 0/1/2 for each row
//   if (index === 0) return "lg:col-span-3 lg:col-start-2";
//   if (index === 1) return "lg:col-span-6 lg:col-start-5";
//   return "lg:col-span-3 lg:col-start-11";
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type SpecItem = { label: string; value: string };

export default function SpecSection() {
  const leftSpecs: SpecItem[] = [
    { label: "Land Size", value: "178 m²" },
    { label: "Cooling", value: "3 Indoor & Outdoor AC" },
    { label: "Outdoor Patio Size", value: "38 m²" },
  ];

  const rightSpecs: SpecItem[] = [
    { label: "Floor", value: "2 Levels" },
    { label: "Number of Rooms", value: "3 Bedrooms & 2 Bathrooms" },
    { label: "House Dimensions", value: "8 × 15 m" },
  ];

  return (
    <section className="bg-[#F3F0EA]">
      <div className="mx-auto px-4 py-20 md:py-28">
        {/* Intro row (small, optional) */}
        {/* <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex mx-auto max-w-sm text-[13px] md:text-sm leading-relaxed text-neutral-700 lg:ml-[8.3333%]"
        >
          NemuSaya Villa invites you to slow down—where modern design and calm
          proportions meet everyday comfort.
        </motion.p> */}

        {/* Main layout */}
        <div className="mt-14 md:mt-16 grid grid-cols-12 gap-y-14 gap-x-24 items-center">
          {/* LEFT specs */}
          <div className="col-span-12 lg:col-span-3 lg:col-start-2">
            <div className="space-y-12 lg:space-y-14">
              {leftSpecs.map((s, i) => (
                <SpecBlock key={s.label} item={s} delay={i * 0.04} align="right" />
              ))}
            </div>
          </div>

          {/* CENTER outline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="col-span-12 lg:col-span-4 lg:col-start-5"
          >
            <div className="relative w-full h-[240px] md:h-[320px] lg:h-[380px]">
              <Image
                src="/outline-villa.png"
                alt="Villa outline"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT specs (slightly lower for asymmetry) */}
          <div className="col-span-12 lg:col-span-3 lg:col-start-9">
            <div className="space-y-12 lg:space-y-14">
              {rightSpecs.map((s, i) => (
                <SpecBlock
                  key={s.label}
                  item={s}
                  delay={0.06 + i * 0.04}
                  align="left"
                />
              ))}
            </div>
          </div>
        </div>

        {/* <div className="mt-16 hidden lg:block h-px bg-neutral-900/10" /> */}
      </div>
    </section>
  );
}

function SpecBlock({
  item,
  delay,
  align,
}: {
  item: SpecItem;
  delay: number;
  align: "left" | "right";
}) {
  const alignClass = align === "right" ? "text-right" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={alignClass}
    >
      <p className="text-[11px] tracking-[0.22em] uppercase text-neutral-600">
        {item.label}
      </p>
      <p className="mt-3 text-3xl md:text-4xl font-light text-neutral-900 leading-[1.08]">
        {item.value}
      </p>
    </motion.div>
  );
}
