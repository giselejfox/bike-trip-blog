import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    miles_by_bike: z.number().optional(),
    minutes_by_transit: z.number().optional(),
  }),
});

export const collections = { blog };

