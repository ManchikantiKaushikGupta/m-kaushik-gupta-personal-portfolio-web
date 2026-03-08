import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <SectionHeader title="projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-[#abb2bf] flex flex-col h-full hover:border-[#c778dd] transition-colors"
          >
            <div className="w-full aspect-video border-b border-[#abb2bf] bg-[#282c33] flex items-center justify-center overflow-hidden relative">
              {/* Placeholder image pattern */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#abb2bf 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              <span className="text-[#abb2bf] font-mono text-xl z-10">{project.title}</span>
            </div>
            <div className="p-2 border-b border-[#abb2bf] flex flex-wrap gap-2 text-[#abb2bf] text-sm font-mono">
              {project.techStack.join(' ')}
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-2xl font-medium text-white mb-4">{project.title}</h3>
              <p className="text-[#abb2bf] mb-6 flex-grow">{project.description}</p>
              <div className="flex gap-4 mt-auto">
                <Link to={`/project/${project.id}`} className="px-4 py-2 border border-[#c778dd] text-white hover:bg-[#c778dd]/20 transition-colors">
                  View More
                </Link>
                <a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 border border-[#abb2bf] text-[#abb2bf] hover:text-white hover:border-white transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
