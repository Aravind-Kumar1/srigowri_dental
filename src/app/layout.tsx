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

const BASE_URL = "https://www.srigowridentalcare.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Best Dental Clinic in Hayathnagar | Sri Gowri Dental Care | Hyderabad",
    template: "%s | Sri Gowri Dental Care – Hayathnagar",
  },
  description:
    "Sri Gowri Dental Care is the #1 rated dental clinic in Hayathnagar, Hyderabad. Expert dentists offering dental implants, invisible aligners, root canal, smile designing, pediatric dentistry, crowns & bridges. Book a free consultation today!",
  keywords: [
    // Primary local keywords
    "dental clinic in Hayathnagar",
    "dentist in Hayathnagar",
    "best dental clinic Hayathnagar",
    "dental clinic near Hayathnagar",
    "Hayathnagar dentist",
    "dental hospital Hayathnagar Hyderabad",
    "teeth clinic Hayathnagar",
    // Service + location combos
    "dental implants Hayathnagar",
    "root canal treatment Hayathnagar",
    "invisible aligners Hayathnagar",
    "smile designing Hayathnagar",
    "kids dentist Hayathnagar",
    "pediatric dentist Hayathnagar Hyderabad",
    "teeth whitening Hayathnagar",
    "cosmetic dentist Hayathnagar",
    "emergency dentist Hayathnagar",
    "crowns and bridges Hayathnagar",
    "teeth cleaning Hayathnagar",
    // Broader Hyderabad area
    "dental clinic Hyderabad east",
    "best dentist near Kuntloor Road",
    "dental clinic Shubodaya Colony",
    "dentist near LB Nagar",
    "dental clinic near Nagole",
    "dental hospital near Uppal",
    // Sri Gowri brand
    "Sri Gowri Dental Care",
    "Gowri Dental Hayathnagar",
    "Dr N Sri Gowri dentist",
    // General high-volume
    "dental implants Hyderabad",
    "best dentist Hyderabad",
    "affordable dental clinic Hyderabad",
    "painless root canal Hyderabad",
    "dental veneers Hyderabad",
    "full mouth rehabilitation Hyderabad",
    "TMJ specialist Hyderabad",
    "BPS dentures Hyderabad",
    "braces and aligners Hyderabad",
    "dental x-ray Hyderabad",
    "dentist open Sunday Hayathnagar",
  ],
  authors: [{ name: "Sri Gowri Dental Care", url: BASE_URL }],
  creator: "Sri Gowri Dental Care",
  publisher: "Sri Gowri Dental Care",
  category: "Health & Medical",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Sri Gowri Dental Care",
    title: "Best Dental Clinic in Hayathnagar | Sri Gowri Dental Care",
    description:
      "Top-rated dental clinic in Hayathnagar, Hyderabad. Dental implants, invisible aligners, smile designing, root canal & more. Expert doctors, advanced technology.",
    images: [
      {
        url: "/gowri_logo.png",
        width: 1200,
        height: 630,
        alt: "Sri Gowri Dental Care – Best Dental Clinic in Hayathnagar Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dental Clinic in Hayathnagar | Sri Gowri Dental Care",
    description:
      "Top-rated dental clinic in Hayathnagar, Hyderabad. Expert dentists, advanced technology, affordable prices. Book your free consultation today!",
    images: ["/gowri_logo.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/gowri_logo.png",
    apple: "/gowri_logo.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "googlee7b8d921f7343df6",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

import Popup from "@/components/ui/Popup";

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Sri Gowri Dental Care",
  alternateName: "Gowri Dental Clinic Hayathnagar",
  image: `${BASE_URL}/gowri_logo.png`,
  url: BASE_URL,
  telephone: "+917981765567",
  email: "srigowridentalcare@gmail.com",
  priceRange: "₹₹",
  description:
    "Sri Gowri Dental Care is the best dental clinic in Hayathnagar, Hyderabad, offering dental implants, invisible aligners, smile designing, root canal, pediatric dentistry, crowns, bridges, and full mouth rehabilitation.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "H.No. 4-8-300/110 & 111, Shubodaya Colony, Opp. Substation, Kuntloor Road",
    addressLocality: "Hayathnagar",
    addressRegion: "Telangana",
    postalCode: "501505",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "17.3437",
    longitude: "78.6050",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "10:00",
      closes: "13:00",
    },
  ],
  sameAs: ["https://www.instagram.com/gowri.nadipalli/"],
  hasMap: "https://maps.google.com/maps?q=Gowri+Dental+Clinic,+Shubodaya+Colony,+Hayathnagar,+Hyderabad",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
  medicalSpecialty: [
    "Prosthodontics",
    "Implantology",
    "Pediatric Dentistry",
    "Orthodontics",
    "Periodontics",
    "Cosmetic Dentistry",
    "Oral & Maxillofacial Surgery",
  ],
};

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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

