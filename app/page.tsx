import Hero from "./components/molecules/Hero/Hero";
import Stats from "./components/molecules/Stats/Stats";
import Expertise from "./components/molecules/Expertise/Expertise";
import Projects from "./components/molecules/ProjectsAndServices/Projects";
import ExperienceTree from "./components/molecules/ExperienceTree/ExperienceTree";
import WhatsAppButton from "./components/molecules/WhatsAppButton/WhatsAppButton";
import About from "./components/molecules/About/About";
import Services from "./components/molecules/Services/Services";
import Achievements from "./components/molecules/Achievements/Achievements";
import Testimonials from "./components/molecules/Testimonials/Testimonials";
import Link from "next/link";
import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { portfolio } from "@/app/data/portfolio";
import Timeline from "./components/molecules/Timeline/Timeline";
import Footer from "./components/molecules/Footer/Footer";

export default function Home() {
  const { socials } = portfolio;
  return (
    <main className="min-h-screen bg-background text-foreground scroll-smooth">
      <Hero />
      <Stats />
      <About />
      <ExperienceTree />
      <Projects />
      <Achievements />
      <Timeline />
      <Testimonials />
      <Services />
      <Expertise />

      <WhatsAppButton />

      <Footer />
    </main>
  );
}
