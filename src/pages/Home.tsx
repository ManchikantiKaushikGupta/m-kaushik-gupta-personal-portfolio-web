import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="w-full max-w-[1024px] px-4 md:px-8 flex flex-col gap-24 py-12">
      <Hero />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </div>
  );
}
