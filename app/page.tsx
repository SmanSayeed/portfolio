import ProjectsAndServices from "./components/MOLECULE/ProjectsAndServices/ProjectsAndServices";
import SkillsAndExperience from "./components/MOLECULE/SkillsAndExperience/SkillsAndExperience";
import Hero from "./components/MOL/Hero/Hero";
import Skills from "./components/MOL/Skills/Skills";

export default function Home() {
  return (
    <main>
      <div className="cover-header" />
      <Hero />
      <Skills/>
      <SkillsAndExperience />
      <ProjectsAndServices/>
    </main>
  );
}
