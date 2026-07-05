export const SITE_URL = "https://www.outstride.co";

export const SITE_NAME = "Outstride";

export const SITE_TAGLINE = "Founder Coaching";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-image-new.png`;

export const SITE_DESCRIPTION =
  "Ben Jones is a founder-turned-coach who helps scaling startup founders build the systems, rhythms and capabilities to grow without burning out. Pre-seed to Series C.";

export const HOMEPAGE_DESCRIPTION =
  "Founder coaching for ambitious startup founders scaling from pre-seed to Series C. Ben Jones built and scaled Nuri to 120 people — now he coaches founders through Outstride OS, a practical operating system for company, founder and human layers.";

export const PERSON = {
  name: "Ben Jones",
  jobTitle: "Founder Coach",
  url: SITE_URL,
  email: "ben@outstride.co",
  twitter: "https://twitter.com/BenPeterJones",
  linkedin: "https://www.linkedin.com/in/benjones/",
  image: `${SITE_URL}/images/web-developer.jpg`,
} as const;

export const MARKETING_ROUTES = [
  "/",
  "/testimonials/",
  "/referrals/",
  "/contact/",
] as const;

export const OS_INDEX_ROUTES = [
  "/os/",
  "/os/layers/",
  "/os/process/",
  "/os/force-form-flow/",
  "/os/capabilities/",
  "/os/tools/",
] as const;
