import { useState } from "react";

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
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-zinc-900 border dark:border-zinc-700 rounded-xl p-5 shadow-sm space-y-3"
    >
      <h2 className="text-xl font-semibold mb-3">Add Transaction</h2>

      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => update("title", e.target.value)}
        className="w-full px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-md"
      />

      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => update("amount", e.target.value)}
        className="w-full px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-md"
      />

      <select
        value={form.category}
        onChange={(e) => update("category", e.target.value)}
        className="w-full px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-md"
      >
        <option value="">Select Category</option>
        <option>Food</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Travel</option>
      </select>

      <div className="flex gap-5">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={form.type === "income"}
            onChange={() => update("type", "income")}
          />
          Income
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={form.type === "expense"}
            onChange={() => update("type", "expense")}
          />
          Expense
        </label>
      </div>

      <input
        type="date"
        value={form.date}
        onChange={(e) => update("date", e.target.value)}
        className="w-full px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-md"
      />

      <button
        type="submit"
        className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all"
      >
        Add
      </button>
    </form>
  );
}