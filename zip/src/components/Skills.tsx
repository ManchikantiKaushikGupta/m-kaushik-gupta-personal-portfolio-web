import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C', 'JavaScript']
    },
    {
      title: 'AI / Machine Learning',
      skills: ['Deep Learning', 'CNN', 'Transformer Models', 'Facial Expression Recognition']
    },
    {
      title: 'Tools & Technologies',
      skills: ['React', 'Node.js', 'MongoDB', 'Git', 'GitHub', 'PyTorch', 'MediaPipe']
    }
  ];

  return (
    <section id="skills" className="w-full">
      <SectionHeader title="skills" />
      <div className="flex flex-col md:flex-row gap-12">
        <div className="hidden md:block w-1/3 relative">
          {/* Decorative elements */}
          <svg className="absolute top-0 left-0 w-16 h-16 text-[#abb2bf]" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[0, 20, 40, 60, 80].map(x => 
              [0, 20, 40, 60, 80].map(y => 
                <circle key={`${x}-${y}`} cx={x+2} cy={y+2} r="2" fill="currentColor" />
              )
            )}
          </svg>
          <div className="absolute top-24 right-12 w-20 h-20 border border-[#abb2bf]"></div>
          <div className="absolute bottom-0 left-12 w-16 h-16 border border-[#c778dd]"></div>
        </div>
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-[#abb2bf] h-fit hover:border-[#c778dd] transition-colors"
            >
              <h3 className="p-2 border-b border-[#abb2bf] text-white font-medium">{category.title}</h3>
              <div className="p-2 flex flex-wrap gap-2 text-[#abb2bf]">
                {category.skills.join('  ')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
