// components/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard") || false;

  return (
    <>
      {!isDashboard && <Header />}
      <main className={isDashboard ? "" : "flex-grow"}>{children}</main>
      {!isDashboard && <Footer />}
    </>
  );
}
