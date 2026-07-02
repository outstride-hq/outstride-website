# Tool intake

Answers here are the raw material for tool pages in `src/lib/os.ts` (metadata) and
`src/lib/tools-content.ts` (page body). Ben fills in a tool's seven questions (bullet
points or voice-memo transcript both fine — rough beats polished); an LLM session then
drafts the tool to the format spec in `AGENTS.md` ("Adding OS tools" section).

**Ground rules for whoever drafts from this:**

- Questions 1, 3 and 4 are non-negotiable. If they're empty, don't draft — leave the
  tool without page content or mark it draft in `os.ts`.
- Anonymize everything per the Granola rules in `AGENTS.md`: composite scenarios,
  changed sectors/stages/numbers, no identifiable clients.
- Capture the majority of what Ben says; paraphrase for tightness but don't cut large
  chunks or lose distinctive phrasings.
- Mark crafted composites explicitly (e.g. "(No verbatim example captured yet)") so they
  can be replaced later.
- Park open questions and side-decisions at the bottom of each tool section.

## The seven questions

1. **What is it — one line?**
   Becomes `description` in `os.ts`. Standalone sentence clear enough for a future MCP
   or tool registry without page context.
2. **When do you reach for it / what's broken?**
   Becomes `intro` plus the opening paragraph in `tools-content.ts` — the moment a
   founder would pull this off the shelf.
3. **How do you run it, step by step?**
   Becomes a `steps` or `list` block. Include examples or prompts where Ben gives them.
4. **The one insight or POV that makes it yours?**
   Becomes a `callout` — the line that separates this from generic advice.
5. **Is there a picture in your head?**
   Diagram sketch, Miro reference, or layout notes. If yes, plan a definition in
   `src/lib/diagram/definitions/` and a registry entry; link via `diagramId` on the tool
   and/or a `diagram` block in `tools-content.ts`.
6. **Whose framework is this?**
   Original owner/source for `accreditation` in `src/lib/accreditation.ts`, or
   "Outstride original". If a diagram represents the same framework, credit it on the
   diagram definition too.
7. **Which capabilities does it serve / related tools?**
   Becomes `capabilityIds` and `relatedToolIds` in `os.ts`, plus optional
   `capabilityRefs` / `toolRef` blocks at the bottom of the page.

---

## Tools (add sections as you capture them)

### Example template (`tool-id-here`)

_(Captured from Ben's chat notes, YYYY-MM-DD.)_

1.
2.
3.
4.
5.
6.
7.

**Open questions:**

-
