import Headline from "@/components/Headline";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/Faq";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import prisma from "@/lib/prisma";

export default async function Home() {
  const hero = await prisma.hero.findFirst();
  const problems = await prisma.problems.findMany();
  const portfolios = await prisma.portfolios.findMany();
  const questions = await prisma.questions.findMany();
  const teams = await prisma.teams.findMany();
  const testimonials = await prisma.testimonials.findMany();
  const website = await prisma.website.findFirst();

  return (
    <main>
      <Navbar />
      <Headline hero={hero} />
      <Problem problems={problems} />
      <Solution />
      <Portfolio projects={portfolios} />
      <Testimonials items={testimonials} />
      <AboutUs team={teams} />
      <FAQ faqs={questions} />
      <CTA website={website} />
      <Footer />
    </main>
  );
}
