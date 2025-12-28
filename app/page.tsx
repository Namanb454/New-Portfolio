import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import SliderLayout from "@/components/SliderLayout";
import { PortfolioProvider } from "@/context/PortfolioContext";

export default function Home() {
  return (
    <SliderLayout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
    </SliderLayout>
  );
}
