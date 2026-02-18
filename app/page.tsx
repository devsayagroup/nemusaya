import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import TypeSection from "@/components/section/TypeSection";
import SpecSection from "@/components/section/SpecSection";
export default function Home() {
  return (
   <>
    {/* <div className="h-[80vh]">
      <h1>hello</h1>
    </div> */}
      <HeroSection/>
      <AboutSection/>
      <TypeSection/>
      <SpecSection/>
   </>
  );
}
