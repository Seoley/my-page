import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    period: z.string().optional(),
    role: z.string().optional(),
    team: z.string().optional(),
    result: z.string().optional(),
    tags: z.array(z.string()),
    order: z.number().default(0),
  }),
});

export const collections = {
  projects,
};
