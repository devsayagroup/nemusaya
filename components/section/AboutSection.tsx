"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-[1440px] px-4 py-32">
        <div className="grid grid-cols-12 gap-8 mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="col-span-12 md:col-span-5  md:col-start-2 text-[40px] md:text-[56px] font-light leading-tight text-neutral-900"
          >
            A <span className="font-style italic">Place</span> to
            <br />
            Slow down
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.2 }}
            className="col-span-12 md:col-span-5 md:col-start-8 text-[40px] md:text-[56px] font-light leading-tight text-right text-neutral-900"
          >
            where <span className="font-style italic">Architecture</span> 
            <br />
            meets <span className="font-style italic">Nature</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 "
          >
            <Image
              src="/villa1.jpg"
              alt="Villa exterior detail"
              width={600}
              height={850}
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="col-span-12 md:col-span-4 md:col-start-5 text-neutral-700 place-self-end"
          >
            <p className="leading-relaxed">
              NemuSaya Villa is a modern private residence designed to slow the
              pace of living.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="col-span-12 md:col-span-4 md:col-start-3 text-neutral-700 place-self-end"
          >
            <p className="leading-relaxed text-right">
              Surrounded by trees and crafted with honest materials, the villa
              offers a quiet balance between contemporary architecture and
              nature.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="col-span-12 md:col-span-6 md:col-start-7 mt-8"
          >
            <Image
              src="/villa1.jpg"
              alt="Villa interior with garden view"
              width={900}
              height={600}
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="col-span-12 md:col-span-3 mt-8"
          >
            <Image
              src="/villa1.jpg"
              alt="Material and light detail"
              width={600}
              height={400}
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="col-span-12 md:col-span-4 md:col-start-4 text-neutral-700 place-self-end"
          >
            <p className="leading-relaxed">
              Located on Sunset Road, Bali, each space is shaped by light,
              proportion, and silence. Creating a place that feels both refined
              and deeply personal.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function AboutSection() {
//   return (
//     <section className="bg-neutral-50">
//       <div className="mx-auto max-w-[1440px] px-4 py-32">
//         <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between mb-32">
//           <motion.h2
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1, duration: 0.6 }}
//             className="
//               text-[40px] md:text-[56px] font-light leading-tight text-neutral-900
//               md:basis-[41.6667%] md:ml-[8.3333%]
//             "
//           >
//             A <span className="font-style italic">Place</span> to
//             <br />
//             Slow down
//           </motion.h2>

//           <motion.h2
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, duration: 0.2 }}
//             className="
//               text-[40px] md:text-[56px] font-light leading-tight text-neutral-900 text-right
//               md:basis-[41.6667%]
//             "
//           >
//             where <span className="font-style italic">Architecture</span>
//             <br />
//             meets <span className="font-style italic">Nature</span>
//           </motion.h2>
//         </div>

//         <div className="flex flex-col md:flex-row gap-12 mt-24">
//           <div className="w-full lg:w-3/10 ">
//             <Image
//               src="/villa1.jpg"
//               alt="Villa exterior detail"
//               width={600}
//               height={850}
//               className="object-cover"
//             />
//           </div>

//           <div className="hidden lg:block w-1/3 sticky top-12 self-start">
//             <div className="w-full text-neutral-700 md:self-start">
//               <p className="leading-relaxed">
//                 NemuSaya Villa is a modern private residence designed to slow the
//                 pace of living.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row justify-end gap-12 mt-24">
//           <div className="hidden lg:block w-1/3 sticky top-12 self-start">
//             <div className="w-full text-neutral-700 md:self-start">
//               <p className="leading-relaxed text-right">
//                 Surrounded by trees and crafted with honest materials, the villa
//                 offers a quiet balance between contemporary architecture and
//                 nature.
//               </p>
//             </div>
//           </div>
//           <div className="w-full lg:w-5/10 ">
//             <Image
//               src="/villa1.jpg"
//               alt="Villa exterior detail"
//               width={900}
//               height={600}
//               className="object-cover"
//             />
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row gap-12 mt-24">
//           <div className="w-full lg:w-2/10 ">
//             <Image
//               src="/villa1.jpg"
//               alt="Villa exterior detail"
//               width={600}
//               height={400}
//               className="object-cover"
//             />
//           </div>

//           <div className="hidden lg:block w-2/4 sticky top-12 self-start">
//             <div className="w-full text-neutral-700 md:self-start">
//               <p className="leading-relaxed">
//                 Located on Sunset Road, Bali, each space is shaped by light,
//                 proportion, and silence. Creating a place that feels both refined
//                 and deeply personal.
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function AboutSection() {
//   return (
//     <section className="bg-neutral-50">
//       <div className="mx-auto max-w-[1440px] px-4 py-32">
//         <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between mb-32">
//           <motion.h2
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1, duration: 0.6 }}
//             className="
//               text-[40px] md:text-[56px] font-light leading-tight text-neutral-900
//               md:basis-[41.6667%] md:ml-[8.3333%]
//             "
//           >
//             A <span className="font-style italic">Place</span> to
//             <br />
//             Slow down
//           </motion.h2>

//           <motion.h2
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, duration: 0.2 }}
//             className="
//               text-[40px] md:text-[56px] font-light leading-tight text-neutral-900 text-right
//               md:basis-[41.6667%]
//             "
//           >
//             where <span className="font-style italic">Architecture</span>
//             <br />
//             meets <span className="font-style italic">Nature</span>
//           </motion.h2>
//         </div>

//         {/* ROW 1 (image 850) */}
//         <div className="flex flex-col lg:flex-row gap-12 mt-24 lg:items-stretch lg:min-h-[400px]">
//           {/* Image sticky */}
//           <div className="w-full lg:w-3/10">
//             <div className="sticky top-12 self-start">
//               <Image
//                 src="/villa1.jpg"
//                 alt="Villa exterior detail"
//                 width={600}
//                 height={850}
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           {/* Text bottom aligned within 850px row height */}
//           <div className="w-full lg:w-1/3 flex flex-col ">
//             <p className="leading-relaxed text-neutral-700 ">
//               NemuSaya Villa is a modern private residence designed to slow the
//               pace of living.
//             </p>
//           </div>
//         </div>

//         {/* ROW 2 (image 600) */}
//         <div className="flex flex-col lg:flex-row justify-end gap-12 mt-12 lg:items-stretch lg:min-h-[600px]">
//           {/* Text bottom aligned within 600px row height */}
//           <div className="w-full lg:w-1/3 flex flex-col ">
//             <p className="leading-relaxed text-neutral-700 text-right">
//               Surrounded by trees and crafted with honest materials, the villa
//               offers a quiet balance between contemporary architecture and
//               nature.
//             </p>
//           </div>

//           {/* Image sticky */}
//           <div className="w-full lg:w-5/10">
//             <div className="sticky top-12 self-start">
//               <Image
//                 src="/villa1.jpg"
//                 alt="Villa interior with garden view"
//                 width={900}
//                 height={600}
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* ROW 3 (image 400) */}
//         <div className="flex flex-col lg:flex-row gap-12 mt-12 lg:items-stretch lg:min-h-[300px]">
//           {/* Image sticky */}
//           <div className="w-full lg:w-2/10">
//             <div className="sticky top-12 self-start">
//               <Image
//                 src="/villa1.jpg"
//                 alt="Material and light detail"
//                 width={600}
//                 height={400}
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           {/* Text bottom aligned within 400px row height */}
//           <div className="w-full lg:w-2/4 flex flex-col justify-end">
//             <p className="leading-relaxed text-neutral-700">
//               Located on Sunset Road, Bali, each space is shaped by light,
//               proportion, and silence. Creating a place that feels both refined
//               and deeply personal.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
