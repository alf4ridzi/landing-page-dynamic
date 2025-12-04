import prisma from "@/lib/prisma";

const team = [
  {
    name: "Muhammad Alfaridzi",
    role: "Founder & CEO",
    image: "/assets/images/chee.jpeg",
    expertise: "Strategy & Vision",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Dina Putri",
    role: "Lead Engineer",
    image: "/assets/images/reze.jpeg",
    expertise: "Backend & DevOps",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Rama Santoso",
    role: "UI/UX Designer",
    image: "/assets/images/jfk.jpeg",
    expertise: "User Experience",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Sari Lestari",
    role: "Frontend Developer",
    image: "/assets/images/maomao.jpeg",
    expertise: "React & Next.js",
    color: "from-green-500 to-emerald-500",
  },
];

export async function seedTeams() {
    await prisma.teams.createMany({
        data: team.map((t) => ({
            name: t.name,
            role: t.role,
            image: t.image,
            expertise: t.expertise,
            color: t.color
        })),
        skipDuplicates: true
    });

    console.log("teams seeded");
}