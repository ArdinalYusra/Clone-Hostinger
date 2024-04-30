"use client";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/" && <Navbar bgColor={"white"} />}
      {children}
      <Footer bgColor={pathname === "/pro" ? "black" : "white"} />
    </div>
  );
}
