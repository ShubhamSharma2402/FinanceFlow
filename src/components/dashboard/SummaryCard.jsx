import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function SummaryCard({ title, value, icon: Icon, color, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className={cn(
        "card-hover group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-card backdrop-blur-sm",
        "dark:border-zinc-800/80 dark:bg-zinc-900/70"
      )}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-2xl dark:from-indigo-500/15" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
            {title}
          </p>
          <p className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-[1.65rem]">
            {value}
          </p>
        </div>

        {Icon && (
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg ring-2 ring-white/20 transition-transform duration-300 group-hover:scale-105 dark:ring-white/10"
            style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
          >
            <Icon size={22} strokeWidth={2} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
