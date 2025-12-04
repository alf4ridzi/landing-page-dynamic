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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Headline />
      <Problem />
      <Solution />
      <Portfolio />
      <Testimonials />
      <AboutUs />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
