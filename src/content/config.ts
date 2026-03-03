import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        subtitle: z.string(),
        title: z.string(),
        description: z.string(),
        stack: z.string(),
        live: z.string().url(),
        github: z.string().url(),
        size: z.enum(["sm", "md", "lg", "xl"]).default("md")
    })
})

export const collections = { projects }