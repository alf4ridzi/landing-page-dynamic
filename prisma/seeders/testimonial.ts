import prisma from "@/lib/prisma";

const testimonial = [
  {
    name: "Siti Rahman",
    role: "CEO, Acme Tech",
    quote:
      "Working with this team transformed our online presence. The website loads incredibly fast and our conversion rate increased by 40%. Great result, fast delivery.",
    rating: 5,
    company: "Acme",
  },
  {
    name: "Budi Santoso",
    role: "CTO, Beta Solutions",
    quote:
      "The technical expertise is outstanding. Our site performance improved 3x and the code quality is exceptional. Best development partner we've worked with.",
    rating: 5,
    company: "Beta",
  },
  {
    name: "Maya Putri",
    role: "Founder, StartupX",
    quote:
      "From concept to launch in just 4 weeks! The attention to detail and modern design exceeded our expectations. Highly recommend for any serious project.",
    rating: 5,
    company: "StartupX",
  },
  {
    name: "Rizki Pratama",
    role: "Marketing Director, Commerce Co",
    quote:
      "Our e-commerce platform now runs smoothly with zero downtime. Customer satisfaction has increased significantly since the redesign.",
    rating: 5,
    company: "Commerce Co",
  },
];

export async function seedTestimonials() {
    await prisma.testimonials.createMany({
        data: testimonial.map((t) => ({
            name: t.name,
            role: t.role,
            quote: t.quote,
            rating: t.rating,
            company: t.company
        })),
        skipDuplicates: true
    });

    console.log("testimonials seeded");
}