import { useState } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { ALL_CATEGORIES } from "../../data/categories";
import { cn } from "../../utils/cn";

export default function TransactionFilters({ onFilter }) {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const handleApply = () => {
    onFilter({ type, category });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-card backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-5",
        "dark:border-zinc-800/80 dark:bg-zinc-900/60"
      )}
    >
      <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-zinc-300">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/80 dark:text-indigo-400">
          <SlidersHorizontal size={18} />
        </span>
        Filters
      </div>

      <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="input min-w-[140px] cursor-pointer py-2.5 text-sm"
        >
          <option value="">All types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input min-w-[180px] cursor-pointer py-2.5 text-sm"
        >
          <option value="">All categories</option>
          {ALL_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <motion.button
          type="button"
          onClick={handleApply}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn shrink-0 px-6"
        >
          Apply
        </motion.button>
      </div>
    </motion.div>
  );
}
