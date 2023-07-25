import Expertise from "./components/molecules/Expertise/Expertise";
import Hero from "./components/molecules/Hero/Hero";
import SkillsAndExperience from "./components/molecules/SkillsAndExperience/SkillsAndExperience";

export default function Home() {
  return (
    <main>
      <div className="cover-header" />
      <Hero />
      <Expertise />
      {/* <Skills/> */}
      <SkillsAndExperience />
      {/* <ProjectsAndServices/> */}
    </main>
  );
}
