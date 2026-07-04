import { motion } from 'framer-motion';
import { Download, Mail, PhoneCall } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const text = ['Full Stack Developer', 'Problem Solver', 'Lifelong Learner'];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.15),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.2),_transparent_35%),linear-gradient(135deg,_rgba(2,6,23,0.95),_rgba(15,23,42,0.95))]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">Portfolio • 2026</p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            Hello, I&apos;m <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">{personalInfo.name}</span>
          </h1>
          <div className="mt-5 flex min-h-[3rem] items-center text-xl font-medium text-slate-300 sm:text-2xl">
            <span className="mr-2">I&apos;m a</span>
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              <span className="inline-block animate-[pulse_2s_ease-in-out_infinite]">{text[0]}</span>
            </span>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{personalInfo.summary}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/resume/Kalaipriya-Resume.txt" download className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-400/20">
              <Download size={18} /> Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-slate-100 transition hover:-translate-y-1 hover:bg-white/20">
              <Mail size={18} /> Contact Me
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-slate-100 transition hover:-translate-y-1 hover:bg-white/20">
              <FaGithub size={18} /> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-slate-100 transition hover:-translate-y-1 hover:bg-white/20">
              <FaLinkedin size={18} /> LinkedIn
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-400">
            <a href={`tel:${personalInfo.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 transition hover:text-slate-100">
              <PhoneCall size={16} /> {personalInfo.phone}
            </a>
            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 transition hover:text-slate-100">
              <Mail size={16} /> {personalInfo.email}
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 via-violet-500/20 to-fuchsia-500/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Experience', value: 'Internships + Projects' },
                { label: 'Focus', value: 'Full Stack & AI' },
                { label: 'Education', value: 'B.E. CSE' },
                { label: 'Location', value: 'Chennai, India' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="mt-2 text-lg font-medium text-slate-100">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-violet-600/10 p-5">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Available for opportunities</p>
              <p className="mt-2 text-xl font-semibold text-white">Building thoughtful web experiences with modern tools.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
