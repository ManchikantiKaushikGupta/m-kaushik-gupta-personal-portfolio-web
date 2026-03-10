import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Github } from 'lucide-react';
import { projects } from '../data/projects';
import SectionHeader from '../components/SectionHeader';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="w-full max-w-[1024px] px-4 md:px-8 py-24 text-center">
        <h1 className="text-4xl text-white mb-4">Project not found</h1>
        <Link to="/" className="text-[#c778dd] hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-[1024px] px-4 md:px-8 py-12 flex flex-col gap-12"
    >
      <div className="flex flex-col gap-6">
        <Link to="/#projects" className="flex items-center gap-2 text-[#abb2bf] hover:text-white w-fit transition-colors">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          <span className="text-[#c778dd]">/</span>{project.title}
        </h1>
        <p className="text-[#abb2bf] text-lg">{project.description}</p>
      </div>

      <div className="w-full aspect-video border border-[#abb2bf] bg-[#282c33] flex items-center justify-center overflow-hidden relative">
        {project.video ? (
          <video
            src={project.video}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#abb2bf 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            <span className="text-[#abb2bf] font-mono text-3xl z-10">{project.title} Preview</span>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 flex flex-col gap-12">
          <section>
            <SectionHeader title="overview" />
            <p className="text-[#abb2bf] leading-relaxed">{project.overview}</p>
          </section>

          <section>
            <SectionHeader title="problem-statement" />
            <p className="text-[#abb2bf] leading-relaxed">{project.problem}</p>
          </section>

          <section>
            <SectionHeader title="solution-approach" />
            <p className="text-[#abb2bf] leading-relaxed">{project.solution}</p>
            <ul className="list-disc list-inside text-[#abb2bf] mt-4 space-y-2">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="flex flex-col gap-8">
          <div className="border border-[#abb2bf] p-4">
            <h3 className="text-white font-medium mb-4 text-xl">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <span key={tech} className="px-2 py-1 bg-[#abb2bf]/10 text-[#abb2bf] text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-[#abb2bf] p-4">
            <h3 className="text-white font-medium mb-4 text-xl">Links</h3>
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#abb2bf] hover:text-white transition-colors">
              <Github size={20} /> GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
