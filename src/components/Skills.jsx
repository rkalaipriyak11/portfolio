import { motion } from 'framer-motion';
import { Code2, Database, LayoutGrid, Library, ServerCog, Wrench } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { skills } from '../data/portfolioData';

const iconMap = {
  Code2,
  Database,
  LayoutGrid,
  Library,
  ServerCog,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Skills" title="Technical stack and capabilities" description="A snapshot of the tools and technologies I work with." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skillGroup, index) => {
            const Icon = iconMap[skillGroup.icon] || Code2;
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 shadow-xl shadow-slate-950/30 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm text-slate-400">{skillGroup.category}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-100">{skillGroup.category}</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
