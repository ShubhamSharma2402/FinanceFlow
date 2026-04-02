import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function InsightsCard({ title, description, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
      className={cn(
        "card-hover relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-card backdrop-blur-sm",
        "dark:border-zinc-800/80 dark:bg-zinc-900/70"
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/[0.04] via-transparent to-violet-500/[0.05] dark:from-indigo-500/[0.06]" />
      <div className="relative flex gap-4">
        {Icon && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md">
            <Icon size={21} strokeWidth={2} />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
