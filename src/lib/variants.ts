export type VariantBrand = "coral" | "new";

export type VariantConfig = {
  id: string;
  name: string;
  vibe: string;
  brand: VariantBrand;
  fontLinks: string[];
};

export const variants: VariantConfig[] = [
  {
    id: "1",
    name: "Coral Bloom",
    vibe: "Bright and warm: coral as the lead color, apricot gradients, ink text, rounded modern surfaces.",
    brand: "coral",
    fontLinks: [
      "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
    ],
  },
  {
    id: "2",
    name: "Coral Editorial",
    vibe: "Premium and thoughtful: ivory paper, coral-rust accents, sharp editorial spacing, serif display headings.",
    brand: "coral",
    fontLinks: [
      "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,550;9..144,700&display=swap",
    ],
  },
  {
    id: "3",
    name: "Coral Night",
    vibe: "A darker premium take: midnight base, coral glow, muted lavender and teal accents for depth.",
    brand: "coral",
    fontLinks: [
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
    ],
  },
  {
    id: "4",
    name: "Coral Grove",
    vibe: "Calm and human: coral warmth balanced with sage, bone surfaces, charcoal text and soft rounded UI.",
    brand: "coral",
    fontLinks: [
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap",
    ],
  },
];

export function getVariantById(id: string): VariantConfig | undefined {
  return variants.find((variant) => variant.id === id);
}
