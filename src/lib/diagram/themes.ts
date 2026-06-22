export type ThemeColorName =
  | "purple"
  | "pink"
  | "coral"
  | "blue"
  | "cyan"
  | "yellow"
  | "orange"
  | "teal"
  | "green"
  | "red"
  | "maroon"
  | "indigo"
  | "amber";

export type DiagramTheme = {
  id: string;
  label: string;
  background: string;
  fontFamily: string;
  labelColor: string;
  labelFontSize: number;
  rowLabelFontSize: number;
  columnLabelFontSize: number;
  cardTextColor: string;
  cardSubtitleColor: string;
  cardTitleFontSize: number;
  cardSubtitleFontSize: number;
  cardRadius: number;
  cardShadow: string;
  colors: Record<ThemeColorName | string, string>;
};

export const pastelRetroTheme: DiagramTheme = {
  id: "pastel-retro",
  label: "Pastel Retro",
  background: "#f5f5f5",
  fontFamily: "Poppins, sans-serif",
  labelColor: "#1a1a1a",
  labelFontSize: 14,
  rowLabelFontSize: 13,
  columnLabelFontSize: 13,
  cardTextColor: "#1a1a1a",
  cardSubtitleColor: "#4a4a4a",
  cardTitleFontSize: 15,
  cardSubtitleFontSize: 12,
  cardRadius: 0,
  cardShadow: "2px 4px 8px rgba(0, 0, 0, 0.12)",
  colors: {
    purple: "#c4b5fd",
    pink: "#f9a8d4",
    coral: "#fca5a5",
    blue: "#93c5fd",
    cyan: "#67e8f9",
    yellow: "#fde047",
    orange: "#fdba74",
    teal: "#5eead4",
    green: "#86efac",
    red: "#f87171",
    maroon: "#e879a0",
    indigo: "#a5b4fc",
    amber: "#fcd34d",
    // Dial intensity ramp
    "dial-1": "#bfdbfe",
    "dial-2": "#93c5fd",
    "dial-3": "#60a5fa",
    "dial-4": "#3b82f6",
    "dial-5": "#1d4ed8",
    // Pyramid layers bottom-to-top
    "pyramid-1": "#3b82f6",
    "pyramid-2": "#7c3aed",
    "pyramid-3": "#be185d",
    "pyramid-4": "#f97316",
    "pyramid-5": "#eab308",
  },
};

const themes: Record<string, DiagramTheme> = {
  "pastel-retro": pastelRetroTheme,
};

export function getTheme(themeId: string): DiagramTheme {
  const theme = themes[themeId];
  if (!theme) {
    return pastelRetroTheme;
  }
  return theme;
}

export function resolveColor(theme: DiagramTheme, colorName: string): string {
  return theme.colors[colorName] ?? colorName;
}

export function getDialRampColor(theme: DiagramTheme, index: number, total: number): string {
  const rampKey = `dial-${Math.min(index + 1, 5)}`;
  if (theme.colors[rampKey]) {
    return theme.colors[rampKey];
  }
  const ratio = index / Math.max(total - 1, 1);
  const lightness = 85 - ratio * 35;
  return `hsl(215, 85%, ${lightness}%)`;
}
