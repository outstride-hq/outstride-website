/**
 * Operating Cadence — frequency swimlanes for the meetings that run the company.
 *
 * Each card names a meeting and its one job (plan, hold accountable, communicate,
 * connect). Embedded on the "Install the Operating Rhythm" capability page and
 * the operating-cadence tool page.
 */
import { validateDiagramDefinition, type GridDiagramDefinition } from "../schema";

const CARD_WIDTH = 200;
const CARD_HEIGHT = 80;
const CARD_START_X = 180;

export const operatingCadenceDefinition: GridDiagramDefinition = validateDiagramDefinition({
  type: "grid",
  id: "operating-cadence",
  title: "Operating Cadence",
  theme: "pastel-retro",
  canvas: {
    width: 900,
    height: 680,
    background: "#f5f5f5",
  },
  accreditation: {
    note: "Outstride original",
  },
  rows: [
    { id: "weekly", label: "Weekly", y: 55 },
    { id: "fortnightly", label: "Fortnightly", y: 175 },
    { id: "monthly", label: "Monthly", y: 295 },
    { id: "quarterly", label: "Quarterly", y: 415 },
    { id: "annual", label: "Annual", y: 535 },
  ],
  cards: [
    {
      id: "weekly_strategy",
      title: "Strategy meeting",
      subtitle: "Plan — direction, priorities, big calls",
      x: CARD_START_X,
      y: 80,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      color: "blue",
    },
    {
      id: "weekly_leadership",
      title: "Leadership meeting",
      subtitle: "Hold accountable — metrics, blockers, decisions",
      x: CARD_START_X + 220,
      y: 80,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      color: "coral",
    },
    {
      id: "fortnightly_okr_review",
      title: "OKR traffic-light",
      subtitle: "Hold accountable — report against agreed goals",
      x: CARD_START_X,
      y: 200,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      color: "coral",
    },
    {
      id: "monthly_all_hands",
      title: "All-hands",
      subtitle: "Communicate — story, progress, priorities",
      x: CARD_START_X,
      y: 320,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      color: "green",
    },
    {
      id: "monthly_founder_dinner",
      title: "Founder dinner",
      subtitle: "Connect — informal, off-agenda",
      x: CARD_START_X + 220,
      y: 320,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      color: "teal",
    },
    {
      id: "quarterly_strategy_reset",
      title: "Strategy reset",
      subtitle: "Plan — revisit destination and next quarter",
      x: CARD_START_X,
      y: 440,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      color: "blue",
    },
    {
      id: "quarterly_retro",
      title: "Quarterly retro",
      subtitle: "Review — what worked, what didn't",
      x: CARD_START_X + 220,
      y: 440,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      color: "coral",
    },
    {
      id: "quarterly_okr_cascade",
      title: "OKR cascade",
      subtitle: "Collaborate — company to team goals",
      x: CARD_START_X + 440,
      y: 440,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      color: "indigo",
    },
    {
      id: "annual_offsite",
      title: "Annual offsite",
      subtitle: "Plan — strategy, SWOT, long-range bets",
      x: CARD_START_X,
      y: 560,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      color: "blue",
    },
  ],
}) as GridDiagramDefinition;
