import prisma from "@/lib/prisma";

const faqs = [
  {
    q: "How long do projects take?",
    a: "Typical websites take 2-6 weeks depending on complexity. Simple landing pages can be ready in 2 weeks, while complex e-commerce or custom platforms may take 4-6 weeks. We provide detailed timelines during our initial consultation.",
  },
  {
    q: "Do you do design?",
    a: "Yes – UI/UX design is included in all our packages. We handle everything from wireframes to final mockups. Alternatively, if you already have a designer, we're happy to collaborate and bring their vision to life.",
  },
  {
    q: "What technologies do you use?",
    a: "We specialize in modern web technologies including Next.js, React, TypeScript, Tailwind CSS, and headless CMS solutions like Strapi and Sanity. We always choose the best stack for your specific needs.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Absolutely! We offer maintenance packages that include bug fixes, security updates, content updates, and performance monitoring. Your success is our priority even after launch.",
  },
  {
    q: "What's your pricing model?",
    a: "We offer both fixed-price packages and custom quotes based on project scope. Every project starts with a free consultation where we discuss your needs and provide a transparent, detailed proposal.",
  },
  {
    q: "Can you help with SEO and marketing?",
    a: "Yes! We build all websites with SEO best practices from the ground up. We can also assist with Google Analytics setup, performance optimization, and connecting you with marketing partners.",
  },
];

export async function seedQuestions() {
    await prisma.questions.createMany({
        data: faqs.map((f) => ({
            question: f.q,
            answer: f.a
        })),
        skipDuplicates: true,
    });

    console.log("questions seeded");
}