import prisma from "@/lib/prisma";

export async function seedHero() {
  const title = await prisma.hero.create({
    data: {
      title: "We Build Beautiful, Fast Websites",
      tagline:
        "Development & custom solutions for startups and enterprises. Next.js, Headless CMS, e-commerce, and performance-first builds.",
    },
  });
  console.log(title);
}