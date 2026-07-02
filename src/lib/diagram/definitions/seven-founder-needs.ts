import { validateDiagramDefinition, type GridDiagramDefinition } from "../schema";

const CARD_WIDTH = 150;
const CARD_HEIGHT = 210;
const STEP_X = 170;
const STEP_Y = 60;

const needs = [
  {
    id: "exercise",
    title: "Regular\nExercise",
    subtitle: "For willpower\n3 workouts\nper week",
    color: "blue",
  },
  {
    id: "eating",
    title: "Healthy\nEating",
    subtitle: "For energy\n3 cheat meals\nper week",
    color: "indigo",
  },
  {
    id: "sleep",
    title: "Enough\nSleep",
    subtitle: "For patience\n3 early nights per\nlate night",
    color: "cyan",
  },
  {
    id: "friends_family",
    title: "Friends &\nFamily",
    subtitle: "For happiness\n3 meetups\nper week",
    color: "teal",
  },
  {
    id: "solitude",
    title: "Solitude",
    subtitle: "For clarity\n3 walks\nper week",
    color: "green",
  },
  {
    id: "training_coaching",
    title: "Training &\nCoaching",
    subtitle: "For skill\nOnce every\n3 months",
    color: "amber",
  },
  {
    id: "vacation",
    title: "Vacation",
    subtitle: "For perspective\n3 times\nper year",
    color: "orange",
  },
];

export const sevenFounderNeedsDefinition: GridDiagramDefinition = validateDiagramDefinition({
  type: "grid",
  id: "seven-founder-needs",
  title: "7 Core Founder Needs",
  theme: "pastel-retro",
  canvas: {
    width: 1240,
    height: 720,
    background: "#f5f5f5",
  },
  accreditation: {
    originator: "Dave Bailey",
    source: "Core Needs Check-in, “How to Support a Team Under Pressure”",
    sourceUrl: "https://www.dave-bailey.com/blog/check-ins",
    note: "Adapted for Outstride OS with founder purposes and cadences",
  },
  cards: needs.map((need, index) => ({
    id: need.id,
    title: need.title,
    subtitle: need.subtitle,
    x: 40 + index * STEP_X,
    y: 460 - index * STEP_Y,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    color: need.color,
  })),
}) as GridDiagramDefinition;
