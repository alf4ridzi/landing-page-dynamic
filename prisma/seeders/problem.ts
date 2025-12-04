import prisma from "@/lib/prisma";

const problems = [
  {
    icon: "faGauge",
    title: "Legacy CMS migrations",
    description:
      "Stuck with outdated WordPress or Drupal? We migrate to modern headless solutions.",
    impact: "50% slower load times",
  },
  {
    icon: "faBolt",
    title: "Slow page loads & poor lighthouse scores",
    description: "Poor performance kills conversions and SEO rankings.",
    impact: "40% bounce rate increase",
  },
  {
    icon: "faChartLine",
    title: "Hard-to-scale frontends",
    description: "Monolithic architectures that break when traffic spikes.",
    impact: "Limited growth potential",
  },
  {
    icon: "faShieldHalved",
    title: "Security vulnerabilities",
    description:
      "Outdated dependencies, exposed APIs, and weak configurations put your product at risk.",
    impact: "High breach probability",
  },
];

export async function seedProblems() {
    await prisma.problems.createMany({
        data: problems.map((p) => ({
            icon: p.icon,
            title: p.title,
            description: p.description,
            impact: p.impact
        })),
        skipDuplicates: true,
    })

    console.log("problems seeded");
}