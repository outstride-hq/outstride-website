/**
 * Strategy One-Pager grid diagram definition.
 *
 * TODO: Add YAML loader so definitions can live in version-controlled .yaml files.
 * For now, definitions are authored as typed TypeScript objects.
 */
import { validateDiagramDefinition, type GridDiagramDefinition } from "../schema";

const MATRIX_CARD_SIZE = 130;

export const strategyGridDefinition: GridDiagramDefinition = validateDiagramDefinition({
  type: "grid",
  id: "strategy-grid",
  title: "Strategy One-Pager",
  theme: "pastel-retro",
  canvas: {
    width: 1200,
    height: 960,
    background: "#f5f5f5",
  },
  accreditation: {
    note: "Outstride original",
  },
  cards: [
    {
      id: "problem",
      title: "Problem",
      x: 360,
      y: 80,
      width: 190,
      height: 110,
      color: "purple",
    },
    {
      id: "mission",
      title: "Mission",
      x: 560,
      y: 80,
      width: 190,
      height: 110,
      color: "pink",
    },
    {
      id: "vision",
      title: "Vision",
      x: 760,
      y: 80,
      width: 190,
      height: 110,
      color: "coral",
    },
    {
      id: "ten_year_goal",
      title: "10 year goal",
      x: 535,
      y: 230,
      width: 280,
      height: 100,
      color: "blue",
    },
    {
      id: "next_milestone",
      title: "Next company milestone",
      subtitle: "e.g. funding round",
      x: 535,
      y: 360,
      width: 280,
      height: 100,
      color: "cyan",
    },
  ],
  rows: [
    { id: "two_to_three_years", label: "2-3 years goal", y: 520 },
    { id: "twelve_months", label: "12 months", y: 670 },
    { id: "okrs", label: "OKRs (3 month)", y: 820 },
  ],
  columns: [
    { id: "sales", label: "Sales & Revenue", x: 360, color: "blue" },
    { id: "product", label: "Product & Tech", x: 510, color: "yellow" },
    { id: "markets", label: "Markets & Expansion", x: 660, color: "orange" },
    { id: "team", label: "Team & Ops", x: 810, color: "teal" },
  ],
  matrix: {
    rows: ["two_to_three_years", "twelve_months", "okrs"],
    columns: ["sales", "product", "markets", "team"],
    cardWidth: MATRIX_CARD_SIZE,
    cardHeight: MATRIX_CARD_SIZE,
    rowLabelX: 40,
    columnLabelY: 490,
  },
}) as GridDiagramDefinition;
