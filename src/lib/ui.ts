export type UiColorToken = {
  name: string;
  token: string;
  value: string;
  use: string;
};

export type UiPaletteGroup = {
  name: string;
  description: string;
  colors: UiColorToken[];
};

export const uiPaletteGroups: UiPaletteGroup[] = [
  {
    name: "Coral Core",
    description: "Primary brand scale for buttons, links, emphasis and hero gradients.",
    colors: [
      { name: "Coral 900", token: "--out-coral-900", value: "#6f211d", use: "Deep text on coral-tinted surfaces" },
      { name: "Coral 800", token: "--out-coral-800", value: "#91302b", use: "Hero display text and strong accents" },
      { name: "Coral 700", token: "--out-coral-700", value: "#b83f39", use: "Hover states and darker CTA gradients" },
      { name: "Coral 600", token: "--out-coral-600", value: "#d64d45", use: "Pressed states and compact UI accents" },
      { name: "Coral 500", token: "--out-coral-500", value: "#e4534c", use: "Default primary action and links" },
      { name: "Coral 400", token: "--out-coral-400", value: "#f07167", use: "Secondary highlights" },
      { name: "Coral 300", token: "--out-coral-300", value: "#ff958b", use: "Warm diagram fill" },
      { name: "Coral 200", token: "--out-coral-200", value: "#ffc0b6", use: "Soft blocks and hero glow" },
      { name: "Coral 100", token: "--out-coral-100", value: "#ffe3dd", use: "Subtle surface tint" },
      { name: "Coral 50", token: "--out-coral-50", value: "#fff3ef", use: "Page wash and quiet backgrounds" },
    ],
  },
  {
    name: "Pastel Diagram Set",
    description: "Sticky-note colors for tools, canvases and diagrams that need many distinct categories.",
    colors: [
      { name: "Lavender", token: "--out-pastel-lavender", value: "#b9afff", use: "Problem / tension" },
      { name: "Rose", token: "--out-pastel-rose", value: "#f49ad8", use: "Mission / people" },
      { name: "Salmon", token: "--out-pastel-salmon", value: "#ff9a9a", use: "Vision / risk" },
      { name: "Blue", token: "--out-pastel-blue", value: "#94bdf6", use: "Goals / milestones" },
      { name: "Sky", token: "--out-pastel-sky", value: "#9de0f0", use: "Flow / process" },
      { name: "Mint", token: "--out-pastel-mint", value: "#8be0d6", use: "Team / operations" },
      { name: "Lemon", token: "--out-pastel-lemon", value: "#ffe875", use: "Revenue / metrics" },
      { name: "Apricot", token: "--out-pastel-apricot", value: "#ffb878", use: "Markets / expansion" },
      { name: "Sage", token: "--out-pastel-sage", value: "#b8c7a3", use: "Health / sustainability" },
      { name: "Sand", token: "--out-pastel-sand", value: "#ead8bf", use: "Neutral context" },
    ],
  },
  {
    name: "Surfaces",
    description: "Backgrounds, cards, borders and text colors for the Bootstrap-based UI.",
    colors: [
      { name: "Ink", token: "--out-ink", value: "#151f27", use: "Primary text and dark buttons" },
      { name: "Muted", token: "--out-muted", value: "#5f6d73", use: "Secondary text" },
      { name: "Soft", token: "--out-soft", value: "#fff1ec", use: "Alternating section background" },
      { name: "Soft Strong", token: "--out-soft-strong", value: "#ffd9ce", use: "Badges and pills" },
      { name: "Card", token: "--out-card", value: "#fffaf7", use: "White-with-warmth cards" },
      { name: "Border", token: "--out-border", value: "#f0d5cc", use: "Warm borders and dividers" },
    ],
  },
];

export const uiStickies = [
  { label: "Problem", value: "#b9afff" },
  { label: "Mission", value: "#f49ad8" },
  { label: "Vision", value: "#ff9a9a" },
  { label: "10 year goal", value: "#94bdf6" },
  { label: "Milestone", value: "#9de0f0" },
  { label: "Sales & Revenue", value: "#94bdf6" },
  { label: "Product & Tech", value: "#ffe875" },
  { label: "Markets & Expansion", value: "#ffb878" },
  { label: "Team & Ops", value: "#8be0d6" },
];
