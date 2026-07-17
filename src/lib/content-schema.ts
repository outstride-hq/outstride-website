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
      emphasis: z.enum(["none", "firstColumn"]).optional(),
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

export const capabilityContentSchema = z
  .object({
    format: z.literal("essay").optional(),
    hook: z.string().min(1),
    beforeAfter: z.object({
      today: z.array(z.string().min(1)).min(1).max(3),
      success: z.array(z.string().min(1)).min(1).max(3),
    }),
    why: z.string().min(1).optional(),
    whatGoodLooksLike: z.array(z.string().min(1)).length(3).optional(),
    whereFoundersGoWrong: z.array(z.string().min(1)).length(3).optional(),
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
  })
  .superRefine((content, ctx) => {
    if (content.format === "essay") {
      if (!content.blocks || content.blocks.length === 0) {
        ctx.addIssue({
          code: "custom",
          message: 'format "essay" requires a non-empty blocks essay',
        });
      }
      return;
    }

    for (const field of [
      "why",
      "whatGoodLooksLike",
      "whereFoundersGoWrong",
    ] as const) {
      if (content[field] === undefined) {
        ctx.addIssue({
          code: "custom",
          message: `"${field}" is required unless format is "essay"`,
        });
      }
    }
  });
