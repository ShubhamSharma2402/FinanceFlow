import { motion } from "framer-motion";
import { Inbox } from "lucide-react";
import { formatCurrency, formatDate } from "../../utils/format";
import { cn } from "../../utils/cn";

export default function TransactionTable({ transactions }) {
  const empty = transactions.length === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 shadow-card backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/60"
      )}
    >
      <div className="border-b border-slate-200/80 px-5 py-4 dark:border-zinc-800/80 sm:px-6">
        <h3 className="font-display text-sm font-semibold text-slate-900 dark:text-white">All movements</h3>
        <p className="mt-0.5 text-xs text-slate-500 dark:text-zinc-500">
          {empty ? "No rows match your filters." : `${transactions.length} records`}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/80 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400">
              <th className="px-5 py-3 sm:px-6">Date</th>
              <th className="px-5 py-3 sm:px-6">Title</th>
              <th className="px-5 py-3 sm:px-6">Category</th>
              <th className="px-5 py-3 sm:px-6 text-right">Amount</th>
              <th className="px-5 py-3 sm:px-6">Type</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/90">
            {empty && (
              <tr>
                <td colSpan={5} className="px-6 py-16">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-slate-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-500">
                      <Inbox size={26} strokeWidth={1.5} />
                    </div>
                    <p className="font-medium text-slate-700 dark:text-zinc-300">Nothing to show yet</p>
                    <p className="mt-1 max-w-xs text-xs text-slate-500 dark:text-zinc-500">
                      Loosen filters or add a transaction to populate this table.
                    </p>
                  </div>
                </td>
              </tr>
            )}

            {transactions.map((t, i) => (
              <motion.tr
                key={t.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: Math.min(i * 0.015, 0.35) }}
                className="group text-slate-700 transition-colors hover:bg-slate-50/90 dark:text-zinc-300 dark:hover:bg-zinc-800/40"
              >
                <td className="whitespace-nowrap px-5 py-3.5 font-medium text-slate-600 dark:text-zinc-400 sm:px-6">
                  {formatDate(t.date)}
                </td>
                <td className="max-w-[220px] truncate px-5 py-3.5 font-medium text-slate-900 dark:text-white sm:px-6">
                  {t.title ?? "—"}
                </td>
                <td className="px-5 py-3.5 sm:px-6">
                  <span className="inline-flex rounded-lg border border-slate-200/90 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-700 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300">
                    {t.category}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-right font-semibold tabular-nums text-slate-900 dark:text-white sm:px-6">
                  {formatCurrency(t.amount)}
                </td>
                <td className="px-5 py-3.5 sm:px-6">
                  <span
                    className={cn(
                      "inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold",
                      t.type === "income"
                        ? "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"
                        : "bg-rose-500/10 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400"
                    )}
                  >
                    {t.type}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
