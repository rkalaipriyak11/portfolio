import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-100">{personalInfo.name}</p>
          <p className="mt-2 text-sm text-slate-400">© 2026 {personalInfo.name}. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <a href="#home" className="transition hover:text-slate-100">Home</a>
          <a href="#about" className="transition hover:text-slate-100">About</a>
          <a href="#projects" className="transition hover:text-slate-100">Projects</a>
          <a href="#contact" className="transition hover:text-slate-100">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 p-2.5 text-slate-200 transition hover:text-slate-100">
            <FaGithub size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 p-2.5 text-slate-200 transition hover:text-slate-100">
            <FaLinkedin size={18} />
          </a>
          <button type="button" onClick={scrollToTop} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 p-2.5 text-cyan-300 transition hover:bg-cyan-400/20">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
