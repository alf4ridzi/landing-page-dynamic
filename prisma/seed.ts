import { seedHero } from "../prisma/seeders/hero";
import { seedPortfolios } from "../prisma/seeders/portfolios";
import { seedProblems } from "./seeders/problem";
import { seedQuestions } from "./seeders/question";
import { seedTeams } from "./seeders/teams";
import { seedTestimonials } from "./seeders/testimonial";
import { seedWebsite } from "./seeders/website";

async function main() {
    await seedHero();
    await seedPortfolios();
    await seedProblems();
    await seedTestimonials();
    await seedTeams();
    await seedQuestions();
    await seedWebsite();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});