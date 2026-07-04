import { motion } from 'framer-motion';
import { BriefcaseBusiness } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { internships } from '../data/portfolioData';

export default function Internships() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Internships" title="Hands-on experience across web and AI" description="A summary of my professional internship journey." />
        <div className="grid gap-6 lg:grid-cols-3">
          {internships.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/10 p-7 shadow-xl shadow-slate-950/30 backdrop-blur-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <BriefcaseBusiness size={20} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-100">{item.role}</h3>
              <p className="mt-2 text-sm font-medium text-cyan-300">{item.company}</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
