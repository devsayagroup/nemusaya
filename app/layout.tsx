import { Metadata } from "next";
import "@/styles/globals.css";
import LayoutClient from "./layout-client";

export const metadata: Metadata = {
  title: "Nemu Saya Villa",
  description: "Tech Solution Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
