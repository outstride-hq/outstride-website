import { testimonials } from "@/lib/data";
import type { Capability, Tool } from "@/lib/os-types";
import { PERSON, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    author: {
      "@type": "Person",
      name: PERSON.name,
      url: PERSON.url,
    },
  };
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON.name,
    jobTitle: PERSON.jobTitle,
    url: PERSON.url,
    image: PERSON.image,
    email: PERSON.email,
    sameAs: [PERSON.twitter, PERSON.linkedin],
    description: SITE_DESCRIPTION,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function buildProfessionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE_NAME} — ${PERSON.jobTitle}`,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    provider: {
      "@type": "Person",
      name: PERSON.name,
      url: PERSON.url,
    },
    areaServed: "Worldwide",
    serviceType: [
      "Founder coaching",
      "Startup coaching",
      "Leadership coaching",
      "Executive coaching for founders",
    ],
  };
}

export function buildFaqJsonLd(
  items: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildArticleJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    author: {
      "@type": "Person",
      name: PERSON.name,
      url: PERSON.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function buildToolJsonLd(tool: Tool) {
  return buildArticleJsonLd({
    title: tool.title,
    description: tool.description,
    path: `/os/tools/${tool.id}/`,
  });
}

export function buildCapabilityJsonLd(capability: Capability) {
  return buildArticleJsonLd({
    title: capability.title,
    description: capability.summary,
    path: `/os/capabilities/${capability.id}/`,
  });
}

export function buildReviewJsonLd() {
  return testimonials.slice(0, 6).map((testimonial) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: testimonial.name,
      jobTitle: testimonial.role,
    },
    reviewBody: testimonial.quote,
    itemReviewed: {
      "@type": "ProfessionalService",
      name: `${SITE_NAME} — ${PERSON.jobTitle}`,
      url: SITE_URL,
    },
  }));
}

export const HOMEPAGE_FAQ = [
  {
    question: "Who do you work with?",
    answer:
      "I work with ambitious, exciting founders who give me energy. I support funded startups from pre-seed all the way to Series C.",
  },
  {
    question: "What is the difference between mentoring and coaching?",
    answer:
      "Mentoring comes from expertise — my experience as a founder. Coaching is asking the right questions to help that person become an expert in themselves.",
  },
  {
    question: "Do you work with individuals or groups?",
    answer:
      "Both. I do one-to-one coaching and group off-sites focused on vision, mission and strategy — normally once a quarter.",
  },
  {
    question: "What does a typical coaching setup look like?",
    answer:
      "A one-hour coaching session every two weeks is my standard setup. I am also available on an ad hoc basis when extra help is needed, for example during funding rounds.",
  },
] as const;
