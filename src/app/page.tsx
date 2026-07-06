import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OperatingSystem from "@/components/OperatingSystem";
import Writing from "@/components/Writing";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { HOMEPAGE_DESCRIPTION } from "@/lib/site";
import {
  buildFaqJsonLd,
  buildPersonJsonLd,
  buildProfessionalServiceJsonLd,
  buildWebsiteJsonLd,
  HOMEPAGE_FAQ,
} from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Founder Coaching for Scaling Startups",
  description: HOMEPAGE_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <div id="main-wrapper">
      <JsonLd
        data={[
          buildWebsiteJsonLd(),
          buildPersonJsonLd(),
          buildProfessionalServiceJsonLd(),
          buildFaqJsonLd([...HOMEPAGE_FAQ]),
        ]}
      />
      <Header />
      <main id="content" role="main">
        <Hero />
        <About />
        <OperatingSystem />
        <Writing />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
