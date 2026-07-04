import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Projects" title="Selected work that reflects my growth" description="Projects built with a strong focus on real-world problem solving and modern web development." />
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-7 shadow-2xl shadow-slate-950/30 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold text-slate-100">{project.title}</h3>
                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-300">Featured</div>
              </div>
              <p className="mt-4 text-base leading-8 text-slate-400">{project.description}</p>
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Technologies</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Features</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:-translate-y-0.5 hover:bg-cyan-400/20">
                  <FaGithub size={16} /> GitHub
                </a>
                <a href={project.demo} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/20">
                  <ExternalLink size={16} /> Live Demo • Coming Soon
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
