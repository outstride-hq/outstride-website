/**
 * Strategy One-Pager — top half ("The Destination").
 *
 * The aspirational DNA of the company: problem, mission, vision and the
 * 10-year goal. Embedded on the "Found the Cult" (map-the-destination) page. The
 * bottom half (milestone + OKRs) lives in `strategy-path`, and the combined
 * one-pager remains in `strategy-grid`.
 */
import { validateDiagramDefinition, type GridDiagramDefinition } from "../schema";

export const strategyDestinationDefinition: GridDiagramDefinition = validateDiagramDefinition({
  type: "grid",
  id: "strategy-destination",
  title: "The Destination",
  theme: "pastel-retro",
  canvas: {
    width: 1200,
    height: 400,
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
  ],
}) as GridDiagramDefinition;
