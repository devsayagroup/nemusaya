// import Image from "next/image";

// export default function Loading() {
//     return (
//       <div className="flex h-screen items-center bg-black justify-center z-10!important">
//         <div className="flex flex-col justify-center items-center gap-4">
//           <div className="loader z-20!important">
//             <h1 className="text-white text-2xl">NEMUSAYA VILLA</h1>
//             {/* <Image src="/logo/LogotypeIcon-01.png" width={150} height={150} alt="Logo 7Sundays Network"/> */}
//           </div>
//         </div>
//       </div>
//     );
//   }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-50"
    >
      <div className="flex flex-col items-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Image
            src="/logo/logo-black.webp"
            alt="NemuSaya Villa Logo"
            width={160}
            height={80}
            priority
            className="opacity-90"
          />
        </motion.div>

        {/* Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
          className="mt-8 h-px w-48 bg-neutral-900 origin-left"
        />

        {/* Subtle Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1 }}
          className="mt-6 text-xs uppercase tracking-widest text-neutral-700"
        >
          Preparing your stay
        </motion.p>

      </div>
    </motion.div>
  );
}
