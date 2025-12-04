import prisma from "@/lib/prisma";

const projects = [
  {
    title: "E-commerce Platform",
    tag: "e-commerce",
    image: "/assets/images/portfolio/ecommerce.png",
    description: "Modern storefront with 50% faster checkout",
    metrics: "+120% conversion",
  },
  {
    title: "SaaS Dashboard",
    tag: "landing",
    image: "/assets/images/portfolio/sass.png",
    description: "Real-time analytics platform for B2B",
    metrics: "10k+ daily users",
  },
  {
    title: "Marketing Website",
    tag: "e-commerce",
    image: "/assets/images/portfolio/marketing.webp",
    description: "High-converting landing pages",
    metrics: "+85% lead gen",
  },
  {
    title: "Corporate Portal",
    tag: "landing",
    image: "/assets/images/portfolio/corporate.png",
    description: "Enterprise intranet solution",
    metrics: "500+ employees",
  },
  {
    title: "Mobile App",
    tag: "e-commerce",
    image: "/assets/images/portfolio/cross-platform.png",
    description: "Cross-platform booking system",
    metrics: "4.8★ rating",
  },
  {
    title: "Blog Platform",
    tag: "landing",
    image: "/assets/images/portfolio/blog-platform.webp",
    description: "Headless CMS with rich content",
    metrics: "1M+ views/mo",
  },
];

export async function seedPortfolios() {
  await prisma.portfolios.createMany({
    data: projects.map((p) => ({
      title: p.title,
      tag: p.tag,
      image: p.image,
      description: p.description,
      metrics: p.metrics,
    })),
    skipDuplicates: true,
  });

  console.log("Portfolios seeded!");
}
