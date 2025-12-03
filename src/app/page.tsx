import Headline from "@/components/Headline";
import Problem from "@/components/Problems";
import Solution from "@/components/solutions";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/Faqs";
import CTA from "@/components/CTA";
import Footer from "@/components/Fooster";
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
