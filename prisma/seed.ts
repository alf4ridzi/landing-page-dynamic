import { seedHero } from "../prisma/seeders/hero";
import { seedPortfolios } from "../prisma/seeders/portfolios";
import { seedProblems } from "./seeders/problem";
import { seedTestimonials } from "./seeders/testimonial";

async function main() {
    await seedHero();
    await seedPortfolios();
    await seedProblems();
    await seedTestimonials();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});