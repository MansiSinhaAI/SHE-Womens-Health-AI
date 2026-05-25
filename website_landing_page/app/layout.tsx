import type { Metadata } from "next";
import Analytics from "@/components/analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sheapp.in"),
  title: {
    default: "SHE - Women's Health AI",
    template: "%s | SHE"
  },
  description: "Private AI-powered health conversations designed for women.",
  applicationName: "SHE",
  keywords: [
    "women health AI",
    "AI wellness",
    "period tracking",
    "hormone tracking",
    "blood report analysis",
    "PCOS support",
    "private health chat"
  ],
  authors: [{ name: "SHE" }],
  creator: "SHE",
  publisher: "SHE",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "https://sheapp.in",
    siteName: "SHE",
    title: "SHE - Women's Health AI",
    description: "Private AI-powered health conversations designed for women.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SHE - Women's Health AI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SHE - Women's Health AI",
    description: "Private AI-powered health conversations designed for women.",
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
