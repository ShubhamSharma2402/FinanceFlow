import { useState } from "react";

export default function TransactionFilters({ onFilter }) {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const handleApply = () => {
    onFilter({ type, category });
  };

  return (
    <div className="flex gap-3 items-center bg-white dark:bg-zinc-900 border p-4 rounded-xl dark:border-zinc-700 shadow-sm">

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-3 py-2 bg-zinc-100 dark:bg-zinc-800 border dark:border-zinc-700 rounded-md"
      >
        <option value="">All Types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-3 py-2 bg-zinc-100 dark:bg-zinc-800 border dark:border-zinc-700 rounded-md"
      >
        <option value="">All Categories</option>
        <option value="Food">Food</option>
        <option value="Bills">Bills</option>
        <option value="Shopping">Shopping</option>
        <option value="Travel">Travel</option>
      </select>

      <button
        onClick={handleApply}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Apply
      </button>
    </div>
  );
}