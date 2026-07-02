/**
 * Strategy One-Pager — bottom half ("The Path").
 *
 * Turns the destination into what matters now: the next company milestone
 * (often a funding round) and the long-, medium- and short-term OKRs that
 * cascade towards it across the business. Embedded on the "Chart the Path"
 * capability page. The top half lives in `strategy-destination`, and the
 * combined one-pager remains in `strategy-grid`.
 */
import { validateDiagramDefinition, type GridDiagramDefinition } from "../schema";

const MATRIX_CARD_SIZE = 130;

export const strategyPathDefinition: GridDiagramDefinition = validateDiagramDefinition({
  type: "grid",
  id: "strategy-path",
  title: "The Path",
  theme: "pastel-retro",
  canvas: {
    width: 1200,
    height: 760,
    background: "#f5f5f5",
  },
  accreditation: {
    note: "Outstride original",
  },
  cards: [
    {
      id: "next_milestone",
      title: "Next company milestone",
      subtitle: "e.g. funding round",
      x: 535,
      y: 40,
      width: 280,
      height: 100,
      color: "cyan",
    },
  ],
  rows: [
    { id: "long_term", label: "Long-term OKRs (2–3 yr)", y: 240 },
    { id: "medium_term", label: "Medium-term OKRs (12 mo)", y: 400 },
    { id: "short_term", label: "Short-term OKRs (quarter)", y: 560 },
  ],
  columns: [
    { id: "sales", label: "Sales & Revenue", x: 360, color: "blue" },
    { id: "product", label: "Product & Tech", x: 510, color: "yellow" },
    { id: "markets", label: "Markets & Expansion", x: 660, color: "orange" },
    { id: "team", label: "Team & Ops", x: 810, color: "teal" },
  ],
  matrix: {
    rows: ["long_term", "medium_term", "short_term"],
    columns: ["sales", "product", "markets", "team"],
    cardWidth: MATRIX_CARD_SIZE,
    cardHeight: MATRIX_CARD_SIZE,
    rowLabelX: 40,
    columnLabelY: 210,
  },
}) as GridDiagramDefinition;
