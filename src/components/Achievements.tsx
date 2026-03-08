import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';

export default function Achievements() {
  const achievements = [
    {
      role: 'Campus Ambassador',
      event: 'Kshitij 2024 – IIT Kharagpur'
    },
    {
      role: 'Head – Literary Club',
      event: 'Keshav Memorial Engineering College'
    },
    {
      role: 'Organizing Committee Member',
      event: 'College Technical & Cultural Events'
    },
    {
      role: 'Intercultural Communication Project',
      event: 'Landshut University of Applied Sciences, Germany collaboration'
    }
  ];

  return (
    <section id="achievements" className="w-full">
      <SectionHeader title="achievements" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-[#abb2bf] p-4 hover:border-[#c778dd] transition-colors"
          >
            <h3 className="text-white font-medium text-lg mb-2">{achievement.role}</h3>
            <p className="text-[#abb2bf]">{achievement.event}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
