import prisma from "@/lib/prisma";

export async function seedWebsite() {
    await prisma.website.create({
        data: {
            email: "alfaridzi@gmail.com",
            phone: 123456789,
        }
    })

    console.log("website seeded");
}