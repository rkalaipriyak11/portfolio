import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 400);
    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 rounded-full border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-300 shadow-lg shadow-cyan-950/40 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-cyan-400/20"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
