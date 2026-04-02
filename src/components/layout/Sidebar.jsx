import { NavLink } from "react-router-dom";
import { Home, List, BarChart3, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function Sidebar({ basePath }) {
  const links = [
    { label: "Dashboard", to: basePath, end: true, icon: Home },
    { label: "Transactions", to: `${basePath}/transactions`, icon: List },
    { label: "Insights", to: `${basePath}/insights`, icon: BarChart3 },
    { label: "Settings", to: `${basePath}/settings`, icon: Settings },
  ];

  return (
    <aside className="sticky top-0 z-20 flex w-full shrink-0 flex-col border-b border-slate-200/80 bg-white/75 px-3 py-4 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/75 md:h-screen md:w-[260px] md:border-b-0 md:border-r md:px-4 md:py-6">
      <div className="mb-4 px-2 md:mb-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-indigo-600/90 dark:text-indigo-400/90">
          Workspace
        </p>
        <h1 className="mt-1 font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          FinanceFlow
        </h1>
      </div>

      <nav className="flex flex-1 flex-row gap-1 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
        {links.map(({ label, to, icon: Icon, end }, i) => (
          <motion.div
            key={to}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 md:w-full"
          >
            <NavLink
              to={to}
              end={end}
              title={label}
              className={({ isActive }) =>
                `group flex items-center gap-2.5 whitespace-nowrap rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ease-out md:gap-3
                ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-glow"
                    : "text-slate-600 hover:bg-slate-100/90 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-white"
                }`
              }
            >
              <Icon
                size={20}
                className="shrink-0 opacity-90 transition-transform duration-200 group-hover:scale-105"
              />
              <span className="hidden sm:inline">{label}</span>
            </NavLink>
          </motion.div>
        ))}
      </nav>

      <div className="mt-4 hidden rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-3 text-xs text-slate-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 md:mt-auto md:block">
        <p className="font-medium text-slate-700 dark:text-zinc-300">Need help?</p>
        <p className="mt-0.5 leading-relaxed">Data stays in your browser.</p>
      </div>
    </aside>
  );
}
