import type { DiagramDefinition } from "@/lib/diagram/schema";
import { getDiagramDefinition } from "@/lib/diagram/registry";
import HtmlCanvasRenderer from "./HtmlCanvasRenderer";
import ResponsiveGridRenderer from "./ResponsiveGridRenderer";
import SvgCanvasRenderer from "./SvgCanvasRenderer";

type DiagramRendererProps = {
  diagramId: string;
  variant?: "svg" | "html" | "responsive";
};

export default function DiagramRenderer({
  diagramId,
  variant = "svg",
}: DiagramRendererProps) {
  const definition = getDiagramDefinition(diagramId);
  if (!definition) {
    return null;
  }

  return renderDiagramDefinition(definition, variant);
}

export function renderDiagramDefinition(
  definition: DiagramDefinition,
  variant: "svg" | "html" | "responsive",
) {
  switch (variant) {
    case "svg":
      return <SvgCanvasRenderer definition={definition} />;
    case "html":
      return <HtmlCanvasRenderer definition={definition} />;
    case "responsive":
      return <ResponsiveGridRenderer definition={definition} />;
    default: {
      const _exhaustive: never = variant;
      return _exhaustive;
    }
  }
}
