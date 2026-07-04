import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Education" title="A strong academic foundation" description="My learning path and academic milestones." />
        <div className="relative ml-4 border-l border-cyan-400/20 pl-8 sm:ml-0 sm:pl-12">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="relative mb-12 rounded-[1.5rem] border border-white/10 bg-white/8 p-7 shadow-xl shadow-slate-950/30 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="absolute -left-[1.95rem] top-7 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/50 bg-slate-950 text-cyan-300 sm:-left-[2.45rem]">
                <GraduationCap size={16} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">{item.period}</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-100">{item.degree}</h3>
              <p className="mt-2 text-lg text-slate-300">{item.field}</p>
              <p className="mt-2 text-base text-slate-400">{item.institution}</p>
              <p className="mt-4 text-sm text-slate-300">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
