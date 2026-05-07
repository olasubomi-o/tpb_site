import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Course from "@/components/Course";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Stats />
        <About />
        <Course />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
