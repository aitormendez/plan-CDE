import { defineCollection, z } from "astro:content";

const sharedSchema = z.object({
  title: z.string(),
  order: z.number(),
  summary: z.string().optional()
});

const plan = defineCollection({
  type: "content",
  schema: sharedSchema
});

const reports = defineCollection({
  type: "content",
  schema: sharedSchema
});

export const collections = { plan, reports };
