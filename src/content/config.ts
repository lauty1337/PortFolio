import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        isActive: z.boolean(),
        subtitle: z.string(),
        title: z.string(),
        img: z.string(),
        imgMobile: z.string(),
        imgDesktop: z.string(),
        description: z.string(),
        stack: z.array(z.string()),
        live: z.string().url(),
        github: z.string().url(),
        span: z.string().default("col-span-1"),
    })
})

export const collections = { projects }