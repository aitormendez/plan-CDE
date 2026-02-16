import { defineCollection, z } from "astro:content";

const reports = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string().optional()
  })
});

export const collections = { reports };
