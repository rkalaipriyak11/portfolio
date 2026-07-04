import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Achievements" title="Milestones that reflect dedication" description="A few milestones from my journey in problem solving and innovation." />
        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 p-7 shadow-xl shadow-slate-950/30 backdrop-blur-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950/70 text-cyan-300">
                <Trophy size={20} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-100">{achievement.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{achievement.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
