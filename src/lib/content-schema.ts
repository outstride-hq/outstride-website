import { z } from "zod";

export const toolStepSchema = z.object({
  title: z.string().min(1),
  note: z.string().min(1),
  example: z.string().optional(),
});

export const toolBlockSchema = z.lazy(() =>
  z.discriminatedUnion("kind", [
    z.object({ kind: z.literal("paragraph"), text: z.string().min(1) }),
    z.object({ kind: z.literal("heading"), text: z.string().min(1) }),
    z.object({ kind: z.literal("list"), items: z.array(z.string().min(1)).min(1) }),
    z.object({
      kind: z.literal("table"),
      columns: z.array(z.string().min(1)).min(1),
      rows: z.array(z.array(z.string()).min(1)).min(1),
    }),
    z.object({ kind: z.literal("steps"), steps: z.array(toolStepSchema).min(1) }),
    z.object({ kind: z.literal("callout"), text: z.string().min(1) }),
    z.object({ kind: z.literal("diagram"), diagramId: z.string().min(1) }),
    z.object({
      kind: z.literal("image"),
      src: z.string().min(1),
      alt: z.string().min(1),
    }),
    z.object({
      kind: z.literal("toolRef"),
      toolIds: z.array(z.string().min(1)).min(1),
    }),
    z.object({
      kind: z.literal("toolEmbed"),
      toolId: z.string().min(1),
      note: z.string().optional(),
    }),
    z.object({
      kind: z.literal("capabilityRefs"),
      capabilityIds: z.array(z.string().min(1)).min(1),
    }),
  ]),
);

export type ToolBlockSchema = z.infer<typeof toolBlockSchema>;

export const toolContentSchema = z.object({
  intro: z.string().min(1),
  blocks: z.array(toolBlockSchema),
});

export const capabilityContentSchema = z.object({
  hook: z.string().min(1),
  beforeAfter: z.object({
    today: z.array(z.string().min(1)).min(1).max(3),
    success: z.array(z.string().min(1)).min(1).max(3),
  }),
  why: z.string().min(1),
  whatGoodLooksLike: z.array(z.string().min(1)).length(3),
  whereFoundersGoWrong: z.array(z.string().min(1)).length(3),
  doNow: z
    .array(
      z.object({
        action: z.string().min(1),
        note: z.string().min(1),
        toolId: z.string().optional(),
      }),
    )
    .min(1)
    .max(4)
    .optional(),
  blocks: z.array(toolBlockSchema).optional(),
});
