"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-neutral-50" id="story">
      <div className="hidden md:block mx-auto max-w-[1440px] px-4 py-32">
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
              src="/villa-1.webp"
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
              src="/villa-3.webp"
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
              src="/villa5.webp"
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

      {/* ======================================================================
          MOBILE VIEW
          Restructured into a beautiful vertical editorial flow.
      ====================================================================== */}
      <div className="md:hidden px-6 py-24 flex flex-col gap-12">
        
        {/* Mobile Heading 1 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-[42px] font-light leading-[1.1] text-neutral-900"
        >
          A <span className="font-style italic">Place</span> to
          <br />
          Slow down
        </motion.h2>

        {/* Tall Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full h-[450px]"
        >
          <Image
            src="/villa-1.webp"
            alt="Villa exterior detail"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-lg leading-relaxed text-neutral-700"
        >
          NemuSaya Villa is a modern private residence designed to slow the
          pace of living.
        </motion.p>

        {/* Mobile Heading 2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-[38px] font-light leading-[1.1] text-neutral-900 pt-4"
        >
          where <span className="font-style italic">Architecture</span> 
          <br />
          meets <span className="font-style italic">Nature</span>
        </motion.h2>

        {/* Text 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-lg leading-relaxed text-neutral-700"
        >
          Surrounded by trees and crafted with honest materials, the villa
          offers a quiet balance between contemporary architecture and
          nature.
        </motion.p>

        {/* Wide Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full h-[300px]"
        >
          <Image
            src="/villa-3.webp"
            alt="Villa interior with garden view"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text 3 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-lg leading-relaxed text-neutral-700"
        >
          Located on Sunset Road, Bali, each space is shaped by light,
          proportion, and silence. Creating a place that feels both refined
          and deeply personal.
        </motion.p>

        {/* Detail Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full aspect-[4/3] mt-4"
        >
          <Image
            src="/villa5.webp"
            alt="Material and light detail"
            fill
            className="object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}