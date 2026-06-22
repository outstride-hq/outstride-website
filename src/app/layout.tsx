import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Outstride - Founder Coaching",
  description:
    "Ben is a founder-turned-coach who helps entrepreneurs grow. Ben founded Nuri (prev. Bitwala) and grew it to 120 people before moving to chairman and starting his coaching journey.",
  authors: [
    { name: "Ben Jones", url: "https://www.twitter.com/BenPeterJones" },
  ],
  openGraph: {
    title: "Outstride - Founder Coaching",
    description:
      "Ben is a founder-turned-coach who helps entrepreneurs grow. Ben founded Nuri (prev. Bitwala) and grew it to 120 people before moving to chairman and starting his coaching journey.",
    images: ["https://outstride.co/images/og-image-new.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/css/stylesheet.css" />
        <link rel="stylesheet" href="/css/custom.css" />
      </head>
      <body>
        <Script
          src="/vendor/bootstrap/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
