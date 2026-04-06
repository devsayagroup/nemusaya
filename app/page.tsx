// import HeroSection from "@/components/section/HeroSection";
// import AboutSection from "@/components/section/AboutSection";
// import TypeSection from "@/components/section/TypeSection";
// import SpecSection from "@/components/section/SpecSection";
// export default function Home() {
//   return (
//    <>
//     {/* <div className="h-[80vh]">
//       <h1>hello</h1>
//     </div> */}
//       <HeroSection/>
//       <AboutSection/>
//       <TypeSection/>
//       <SpecSection/>
//    </>
//   );
// }

// app/page.tsx
"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";

import HeroSection from "@/components/section/HeroSection";
import StorySection from "@/components/section/AboutSection";
import VillasSection from "@/components/section/TypeSection";
import SpecsSection from "@/components/section/SpecSection";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  // We attach useScroll here so we can pass it down to child components later if needed for complex parallax
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <main ref={containerRef} className="overflow-hidden">
      <HeroSection />
      <StorySection />
      <VillasSection />
      <SpecsSection />
    </main>
  );
}
