import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Advanced Dental Care | Professional Dental Services",
  description:
    "Complete oral healthcare—preventive, restorative, cosmetic, and emergency dental care with advanced technology and a patient-first approach.",
  keywords: [
    "dental clinic",
    "dentist",
    "dental implants",
    "invisible aligners",
    "kids dentist",
    "emergency dentist",
  ],
  icons: {
    icon: "/gowri_logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

import Popup from "@/components/ui/Popup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-primary/20 selection:text-primary" suppressHydrationWarning>
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        {children}
        <Popup />

      </body>
    </html>
  );
}

