import { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";
import { INCOME_CATEGORIES, EXPENSE_CATEGORIES } from "../../data/categories";
import { cn } from "../../utils/cn";

export default function AddTransactionForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const setType = (type) => {
    setForm((prev) => ({ ...prev, type, category: "" }));
  };

  const categories = form.type === "income" ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.amount || !form.date || !form.category)
      return alert("Please fill all fields");

    onAdd({
      ...form,
      id: crypto.randomUUID(),
      amount: Number(form.amount),
    });

    setForm({
      title: "",
      amount: "",
      category: "",
      type: "expense",
      date: "",
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onSubmit={handleSubmit}
      className={cn(
        "space-y-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-card backdrop-blur-sm sm:p-6",
        "dark:border-zinc-800/80 dark:bg-zinc-900/60"
      )}
    >
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
          <PlusCircle size={20} />
        </span>
        <div>
          <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Add transaction</h2>
          <p className="text-xs text-slate-500 dark:text-zinc-500">Creates a new ledger entry.</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-zinc-400">Title</label>
          <input
            type="text"
            placeholder="e.g.  subscription"
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            className="input w-full"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-zinc-400">Amount</label>
          <input
            type="number"
            step="0.01"
            min="0"
            placeholder="0"
            value={form.amount}
            onChange={(e) => update("amount", e.target.value)}
            className="input w-full tabular-nums"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-zinc-400">Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className="input w-full"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-zinc-400">Type</label>
          <div className="flex gap-3 pt-1">
            <label
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-colors",
                form.type === "income"
                  ? "border-indigo-500 bg-indigo-50 text-indigo-800 dark:border-indigo-500 dark:bg-indigo-950/50 dark:text-indigo-200"
                  : "border-slate-200 bg-white dark:border-zinc-700 dark:bg-zinc-900"
              )}
            >
              <input
                type="radio"
                className="sr-only"
                checked={form.type === "income"}
                onChange={() => setType("income")}
              />
              Income
            </label>
            <label
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-colors",
                form.type === "expense"
                  ? "border-indigo-500 bg-indigo-50 text-indigo-800 dark:border-indigo-500 dark:bg-indigo-950/50 dark:text-indigo-200"
                  : "border-slate-200 bg-white dark:border-zinc-700 dark:bg-zinc-900"
              )}
            >
              <input
                type="radio"
                className="sr-only"
                checked={form.type === "expense"}
                onChange={() => setType("expense")}
              />
              Expense
            </label>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-zinc-400">Category</label>
          <select
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
            className="input w-full cursor-pointer"
          >
            <option value="">Select category</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="btn w-full"
      >
        Add transaction
      </motion.button>
    </motion.form>
  );
}
