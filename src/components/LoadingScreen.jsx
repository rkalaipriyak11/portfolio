import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30" />
              <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-cyan-400 border-r-fuchsia-500" />
            </div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-300">Loading portfolio</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
