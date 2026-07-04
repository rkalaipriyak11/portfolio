import { motion } from 'framer-motion';
import { Brain, GraduationCap, Sparkles } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { personalInfo, education } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="About" title="Crafting thoughtful digital experiences" description="A concise overview of my academic foundation, professional interests, and direction." />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-slate-900/30 backdrop-blur-xl">
            <p className="text-lg leading-8 text-slate-300">{personalInfo.summary}</p>
            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 p-5">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Career Objective</p>
              <p className="mt-3 text-slate-200">{personalInfo.objective}</p>
            </div>
          </motion.div>
          <div className="grid gap-6">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300"><GraduationCap size={20} /></div>
                <h3 className="text-xl font-semibold text-slate-100">Education Overview</h3>
              </div>
              <div className="mt-6 space-y-5">
                {education.map((item) => (
                  <div key={item.degree} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-lg font-medium text-slate-100">{item.degree}</p>
                    <p className="mt-1 text-sm text-cyan-300">{item.institution}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.field}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.period}</p>
                    <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-violet-500/10 p-3 text-violet-300"><Brain size={20} /></div>
                <h3 className="text-xl font-semibold text-slate-100">Programming Interests</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {personalInfo.interests.map((interest) => (
                  <span key={interest} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                    {interest}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-400">
                <div className="flex items-center gap-2 text-cyan-300"><Sparkles size={16} /> Focused on building modern, scalable, and user-friendly solutions.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
