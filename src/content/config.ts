import { defineCollection, z } from 'astro:content';

const especialidades = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    subcategories: z.array(z.string()),
    brands: z.array(z.object({
      name: z.string(),
      logo: z.string().optional(),
    })),
    applications: z.array(z.object({
      brand: z.string(),
      models: z.string(),
    })),
    gallery: z.array(z.object({
      alt: z.string(),
      src: z.string(),
    })).optional(),
    footer: z.object({
      web: z.string(),
      social: z.string(),
    }).optional(),
  }),
});

export const collections = {
  'especialidades': especialidades,
};
