import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="mb-10 max-w-2xl"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-400">{description}</p> : null}
    </motion.div>
  );
}
