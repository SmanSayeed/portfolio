import Expertise from "./components/molecules/Expertise/Expertise";
import Hero from "./components/molecules/Hero/Hero";
import Projects from "./components/molecules/ProjectsAndServices/Projects";
import SkillsAndExperience from "./components/molecules/SkillsAndExperience/SkillsAndExperience";

export default function Home() {
  return (
    <main>
      <div className="cover-header" />
      <Hero />
      <Expertise />
      <SkillsAndExperience />
      <Projects />
    </main>
  );
}
