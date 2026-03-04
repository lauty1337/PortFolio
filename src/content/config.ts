import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        subtitle: z.string(),
        title: z.string(),
        img: z.string(),
        description: z.string(),
        stack: z.array(z.string()),
        live: z.string().url(),
        github: z.string().url(),
        size: z.string(),
    })
})

export const collections = { projects }