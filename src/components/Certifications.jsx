import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Certifications" title="Credentials that support my learning journey" description="Professional and academic certifications aligned with my interests and development path." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 shadow-xl shadow-slate-950/30 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-violet-500/10 p-3 text-violet-300"><Award size={18} /></div>
                <h3 className="text-lg font-semibold text-slate-100">{certificate}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
