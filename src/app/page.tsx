import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Instructors from "@/components/sections/Instructors";
import Achievements from "@/components/sections/Achievements";
import Schedule from "@/components/sections/Schedule";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-bone-50 focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-navy-900"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Programs />
        <Instructors />
        <Achievements />
        <Schedule />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
