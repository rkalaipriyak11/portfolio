import { motion } from 'framer-motion';
import { Mail, MapPin, PhoneCall } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Contact" title="Let’s connect" description="Open to opportunities, collaboration, and meaningful conversations." />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h3 className="text-2xl font-semibold text-slate-100">I’d love to hear from you.</h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-400">If you are looking for a passionate developer who enjoys building polished products and solving real challenges, feel free to reach out.</p>
              <div className="mt-8 space-y-4">
                <a href="https://www.google.com/maps/search/?api=1&query=Chennai%2C+India" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 transition hover:text-slate-100">
                  <MapPin size={18} className="text-cyan-300" /> {personalInfo.location}
                </a>
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 text-slate-300 transition hover:text-slate-100">
                  <PhoneCall size={18} className="text-cyan-300" /> {personalInfo.phone}
                </a>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-slate-300 transition hover:text-slate-100">
                  <Mail size={18} className="text-cyan-300" /> {personalInfo.email}
                </a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 transition hover:text-slate-100">
                  <FaGithub size={18} className="text-cyan-300" /> GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 transition hover:text-slate-100">
                  <FaLinkedin size={18} className="text-cyan-300" /> LinkedIn
                </a>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Quick Note</p>
              <p className="mt-4 text-lg leading-8 text-slate-200">Open to internships, collaborative projects, and opportunities to contribute to impactful development work.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
