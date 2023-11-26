import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimony from "@/components/Testimony";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Carousel />
      <Projects />
      <Testimony />
      <Contact />
    </>
  );
}
