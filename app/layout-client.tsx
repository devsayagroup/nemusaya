"use client";

import { useEffect, useState } from "react";
import { Tenor_Sans, Poppins, Raleway } from "next/font/google";
import Loading from "./loading";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsappButton from "@/components/ui/WhatsappButton";
import SmoothScroll from "@/components/ui/SmoothScroll";
// import FirstVisitModal from "@/components/ui/FirstVisitModal";

const textFont = Raleway({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const styeFont = Tenor_Sans({
  variable: "--font-style",
  subsets: ["latin"],
  weight: ["400"],
});


export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${textFont.variable} ${styeFont.variable} font-text`}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          {/* <FirstVisitModal/> */}
          <WhatsappButton />
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />
        </>
      )}
    </div>
  );
}
