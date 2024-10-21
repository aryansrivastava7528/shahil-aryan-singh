import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Getit.Dev",
  description:
    "Getit.Dev is a website development agency specializing in Framer, Shopify, Code, WordPress, and more. We create stunning and effective websites tailored to your business needs.",
  generator: "Next.js",
  applicationName: "Getit.Dev",
  keywords: [
    "web development",
    "Framer",
    "Shopify",
    "WordPress",
    "frontend",
    "backend",
    "website design",
    "responsive design",
    "custom development",
    "e-commerce",
    "portfolio",
    "development agency",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Getit.Dev",
    description:
      "Getit.Dev is a website development agency specializing in Framer, Shopify, Code, WordPress, and more. We create stunning and effective websites tailored to your business needs.",
    url: "https://getit.dev/",
    siteName: "Getit.Dev",
    images: [
      {
        url: "../public/gidlogo.png",
        width: 1200,
        height: 630,
        alt: "Getit.Dev — Your Partner in Website Development",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Getit.Dev",
    description:
      "Getit.Dev is a website development agency specializing in Framer, Shopify, Code, WordPress, and more. We create stunning and effective websites tailored to your business needs.",
    creator: "Getit.Dev",
    creatorId: "463548645248",
    images: [
      "../public/gidlogo.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
