import { validateDiagramDefinition, type GridDiagramDefinition } from "../schema";

export const twoEquilibriaDefinition: GridDiagramDefinition = validateDiagramDefinition({
  type: "grid",
  id: "two-equilibria",
  title: "The Two Equilibria",
  theme: "pastel-retro",
  canvas: {
    width: 1080,
    height: 560,
    background: "#f5f5f5",
  },
  accreditation: {
    note: "Outstride original",
  },
  cards: [
    {
      id: "good_equilibrium",
      title: "Good equilibrium",
      subtitle:
        "Planning ahead\nTaking real breaks\nRegular exercise\nDecisions at full capacity",
      x: 70,
      y: 160,
      width: 320,
      height: 260,
      color: "green",
    },
    {
      id: "triggers",
      title: "Triggers →",
      subtitle:
        "Conference weeks\nTravel & hotels\nFundraising\nCaffeine & alcohol",
      x: 430,
      y: 100,
      width: 220,
      height: 150,
      color: "orange",
    },
    {
      id: "recovery_moves",
      title: "← Recovery moves",
      subtitle:
        "Two hours for a long run\nA spa day\nSex\nA weekend fully offline",
      x: 430,
      y: 330,
      width: 220,
      height: 150,
      color: "teal",
    },
    {
      id: "bad_equilibrium",
      title: "Bad equilibrium",
      subtitle:
        "Reactive all day\nRunning on stress\nCaffeine up, alcohol down\nNo recovery in sight",
      x: 690,
      y: 160,
      width: 320,
      height: 260,
      color: "coral",
    },
  ],
}) as GridDiagramDefinition;
