import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full">
      <SectionHeader title="contact" />
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <p className="text-[#abb2bf] mb-6">
            I'm interested in working on ambitious projects with positive people and goal-oriented companies.
            <br /><br />
            However, if you have other requests or questions, don't hesitate to contact me.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-auto"
        >
          <div className="border border-[#abb2bf] p-4 flex flex-col gap-4">
            <h3 className="text-white font-medium mb-2">Message me here</h3>
            <a href="mailto:manchikanti.kaushikgupta@gmail.com" className="flex items-center gap-2 text-[#abb2bf] hover:text-[#c778dd] transition-colors">
              <Mail size={20} /> manchikanti.kaushikgupta@gmail.com
            </a>
            <a href="tel:+919676385729" className="flex items-center gap-2 text-[#abb2bf] hover:text-[#c778dd] transition-colors">
              <Phone size={20} /> +91 9676385729
            </a>
            <a href="https://github.com/ManchikantiKaushikGupta" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#abb2bf] hover:text-[#c778dd] transition-colors">
              <Github size={20} /> @ManchikantiKaushikGupta
            </a>
            <a href="https://www.linkedin.com/in/m-kaushik-gupta" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#abb2bf] hover:text-[#c778dd] transition-colors">
              <Linkedin size={20} /> @m-kaushik-gupta
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
