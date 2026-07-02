import { z } from "zod";
import type { Accreditation } from "@/lib/accreditation";

export const accreditationSchema = z.object({
  originator: z.string().optional(),
  source: z.string().optional(),
  sourceUrl: z.string().url().optional(),
  note: z.string().optional(),
});

export const canvasSchema = z.object({
  width: z.number(),
  height: z.number(),
  background: z.string(),
});

export const diagramBaseSchema = z.object({
  id: z.string(),
  title: z.string(),
  theme: z.string(),
  canvas: canvasSchema,
  accreditation: accreditationSchema.optional(),
});

export const cardSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
  x: z.number(),
  y: z.number(),
  width: z.number(),
  height: z.number(),
  color: z.string(),
});

export const rowSchema = z.object({
  id: z.string(),
  label: z.string(),
  y: z.number(),
});

export const columnSchema = z.object({
  id: z.string(),
  label: z.string(),
  x: z.number(),
  color: z.string(),
});

export const matrixSchema = z.object({
  rows: z.array(z.string()),
  columns: z.array(z.string()),
  cardWidth: z.number(),
  cardHeight: z.number(),
  rowLabelX: z.number().optional(),
  columnLabelY: z.number().optional(),
});

export const gridDiagramSchema = diagramBaseSchema.extend({
  type: z.literal("grid"),
  cards: z.array(cardSchema),
  rows: z.array(rowSchema).optional(),
  columns: z.array(columnSchema).optional(),
  matrix: matrixSchema.optional(),
});

export const dialSegmentSchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string().optional(),
  example: z.string().optional(),
  color: z.string(),
});

export const dialDiagramSchema = diagramBaseSchema.extend({
  type: z.literal("dial"),
  segments: z.array(dialSegmentSchema),
});

export const flowStageSchema = z.object({
  id: z.string(),
  columnLabel: z.string().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  color: z.string(),
});

export const flowAnnotationSchema = z.object({
  text: z.string(),
  underStageId: z.string(),
  align: z.enum(["left", "center", "right"]).optional(),
});

export const flowDiagramSchema = diagramBaseSchema.extend({
  type: z.literal("flow"),
  stages: z.array(flowStageSchema),
  annotations: z.array(flowAnnotationSchema).optional(),
  showDividers: z.boolean().optional(),
  showArrows: z.boolean().optional(),
});

export const pyramidLayerSchema = z.object({
  id: z.string(),
  label: z.string(),
  leftLabel: z.string().optional(),
  rightLabel: z.string().optional(),
  color: z.string(),
});

export const pyramidDiagramSchema = diagramBaseSchema.extend({
  type: z.literal("pyramid"),
  layers: z.array(pyramidLayerSchema),
});

export const diagramDefinitionSchema = z.discriminatedUnion("type", [
  gridDiagramSchema,
  dialDiagramSchema,
  flowDiagramSchema,
  pyramidDiagramSchema,
]);

export type DiagramCard = z.infer<typeof cardSchema>;
export type DiagramRow = z.infer<typeof rowSchema>;
export type DiagramColumn = z.infer<typeof columnSchema>;
export type DiagramMatrix = z.infer<typeof matrixSchema>;
export type DiagramCanvas = z.infer<typeof canvasSchema>;
export type GridDiagramDefinition = z.infer<typeof gridDiagramSchema>;
export type DialDiagramDefinition = z.infer<typeof dialDiagramSchema>;
export type FlowDiagramDefinition = z.infer<typeof flowDiagramSchema>;
export type PyramidDiagramDefinition = z.infer<typeof pyramidDiagramSchema>;
export type DiagramDefinition = z.infer<typeof diagramDefinitionSchema>;
export type DialSegment = z.infer<typeof dialSegmentSchema>;
export type FlowStage = z.infer<typeof flowStageSchema>;
export type FlowAnnotation = z.infer<typeof flowAnnotationSchema>;
export type PyramidLayer = z.infer<typeof pyramidLayerSchema>;

export function validateDiagramDefinition(
  definition: DiagramDefinition,
): DiagramDefinition {
  return diagramDefinitionSchema.parse(definition);
}

export function isGridDiagram(
  definition: DiagramDefinition,
): definition is GridDiagramDefinition {
  return definition.type === "grid";
}

export function isDialDiagram(
  definition: DiagramDefinition,
): definition is DialDiagramDefinition {
  return definition.type === "dial";
}

export function isFlowDiagram(
  definition: DiagramDefinition,
): definition is FlowDiagramDefinition {
  return definition.type === "flow";
}

export function isPyramidDiagram(
  definition: DiagramDefinition,
): definition is PyramidDiagramDefinition {
  return definition.type === "pyramid";
}

export type MatrixCell = {
  rowId: string;
  columnId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  title?: string;
};

export function getMatrixCells(definition: DiagramDefinition): MatrixCell[] {
  if (definition.type !== "grid" || !definition.matrix || !definition.rows || !definition.columns) {
    return [];
  }

  const { matrix, rows, columns } = definition;
  const cells: MatrixCell[] = [];

  for (const rowId of matrix.rows) {
    const row = rows.find((item) => item.id === rowId);
    if (!row) {
      continue;
    }

    for (const columnId of matrix.columns) {
      const column = columns.find((item) => item.id === columnId);
      if (!column) {
        continue;
      }

      cells.push({
        rowId,
        columnId,
        x: column.x,
        y: row.y,
        width: matrix.cardWidth,
        height: matrix.cardHeight,
        color: column.color,
      });
    }
  }

  return cells;
}

export function getDiagramAccreditation(
  definition: DiagramDefinition,
): Accreditation | undefined {
  return definition.accreditation;
}
