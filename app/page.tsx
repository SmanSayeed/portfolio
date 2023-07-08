import Hero from "./components/molecules/Hero/Hero";
import Skills from "./components/molecules/Skills/Skills";

export default function Home() {
  return (
    <main>
      <div className="cover-header" />
      <Hero />
      <Skills/>
    </main>
  );
}
