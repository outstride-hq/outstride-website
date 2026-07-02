/**
 * The 3 Cs of a decision — Create → Collaborate → Communicate.
 *
 * A left-to-right flow showing how a decision moves from the founder forming a
 * view, to the few who shape it, to the team who hears it. Embedded on the
 * "Make the Right Calls" capability page and the three-cs-decision tool page.
 */
import { validateDiagramDefinition, type FlowDiagramDefinition } from "../schema";

export const threeCsDecisionDefinition: FlowDiagramDefinition = validateDiagramDefinition({
  type: "flow",
  id: "three-cs-decision",
  title: "Create → Collaborate → Communicate",
  theme: "pastel-retro",
  canvas: {
    width: 900,
    height: 420,
    background: "#f5f5f5",
  },
  accreditation: {
    note: "Outstride original",
  },
  showDividers: true,
  showArrows: true,
  stages: [
    {
      id: "create",
      columnLabel: "You",
      title: "Create",
      subtitle: "Form the view yourself",
      color: "blue",
    },
    {
      id: "collaborate",
      columnLabel: "You + the few who shape it",
      title: "Collaborate",
      subtitle: "Invite input, dissent, feedback",
      color: "coral",
    },
    {
      id: "communicate",
      columnLabel: "The team",
      title: "Communicate",
      subtitle: "Share the decision and the why",
      color: "green",
    },
  ],
  annotations: [
    {
      text: "The thinking work only you can do",
      underStageId: "create",
      align: "center",
    },
    {
      text: "By now it's decided — don't reopen it",
      underStageId: "communicate",
      align: "center",
    },
  ],
}) as FlowDiagramDefinition;
