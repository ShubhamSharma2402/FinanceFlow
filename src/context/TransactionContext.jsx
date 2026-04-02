import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import defaultTransactions from "../data/initialTransactions.json";

const TransactionContext = createContext();

const STORAGE_KEY = "transactions";
/** Bumped when the bundled seed changes; triggers merge with user-only rows once. */
const SEED_VERSION_KEY = "transactions_seed_version";
const SEED_VERSION = "3";

function normalizeTransactions(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((t, i) => ({
      id: t.id ?? i + 1,
      title: t.title ?? t.category ?? "Transaction",
      date: String(t.date ?? ""),
      amount: Number(t.amount) || 0,
      category: String(t.category ?? ""),
      type: t.type === "income" || t.type === "expense" ? t.type : "expense",
    }))
    .filter((t) => t.date && t.category && t.type);
}

function getDefaultTransactions() {
  return normalizeTransactions(defaultTransactions);
}

function computeMonthlyComparison(transactions) {
  const byMonth = {};
  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      const m = t.date.slice(0, 7);
      byMonth[m] = (byMonth[m] || 0) + t.amount;
    });
  const months = Object.keys(byMonth).sort();
  if (months.length < 2) {
    return months.length === 1
      ? `Last month spend: ₹${Math.round(byMonth[months[0]]).toLocaleString("en-IN")}`
      : "Not enough months to compare yet.";
  }
  const last = months[months.length - 1];
  const prev = months[months.length - 2];
  const a = byMonth[last];
  const b = byMonth[prev];
  if (!b) return `Recent spend: ₹${Math.round(a).toLocaleString("en-IN")}`;
  const pct = ((a - b) / b) * 100;
  if (!Number.isFinite(pct)) return "Stable spending.";
  const label = pct > 0 ? "Up" : "Down";
  return `${label} ${Math.abs(pct).toFixed(0)}% vs prior month`;
}

function computeOverallPattern(transactions) {
  const expenses = transactions.filter((t) => t.type === "expense");
  if (!expenses.length) return "No expenses recorded yet.";
  const byMonth = {};
  expenses.forEach((t) => {
    const m = t.date.slice(0, 7);
    byMonth[m] = (byMonth[m] || 0) + t.amount;
  });
  const vals = Object.values(byMonth);
  const avg = vals.reduce((x, y) => x + y, 0) / vals.length;
  return `Avg. monthly spend ~ ₹${Math.round(avg).toLocaleString("en-IN")}`;
}

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const hydratedRef = useRef(false);

  useEffect(() => {
    if (hydratedRef.current) return;
    hydratedRef.current = true;

    const defaults = getDefaultTransactions();
    const seedIds = new Set(defaults.map((t) => String(t.id)));

    const savedVersion = localStorage.getItem(SEED_VERSION_KEY);
    const saved = localStorage.getItem(STORAGE_KEY);

    let next = defaults;

    if (savedVersion === SEED_VERSION) {
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const normalized = normalizeTransactions(parsed);
            if (normalized.length > 0) {
              next = normalized;
            }
          }
        } catch {
          /* keep defaults */
        }
      }
    } else {
      next = [...defaults];
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            const normalized = normalizeTransactions(parsed);
            for (const t of normalized) {
              if (!seedIds.has(String(t.id))) {
                next.push(t);
              }
            }
          }
        } catch {
          /* defaults only */
        }
      }
      next.sort((a, b) => a.date.localeCompare(b.date));
      localStorage.setItem(SEED_VERSION_KEY, SEED_VERSION);
    }

    setTransactions(next);
    setFilteredTransactions(next);
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions, isReady]);

  const addTransaction = (tx) => {
    const newTx = { ...tx, id: Date.now() };
    const newList = [...transactions, newTx];
    setTransactions(newList);
    setFilteredTransactions(newList);
  };

  const applyFilters = (filters) => {
    let data = [...transactions];

    const typeVal = filters.type === "" || filters.type === "all" ? "all" : filters.type;
    const categoryVal =
      filters.category === "" || filters.category === "all" ? "all" : filters.category;

    if (typeVal !== "all") {
      data = data.filter((t) => t.type === typeVal);
    }

    if (categoryVal !== "all") {
      data = data.filter((t) => t.category === categoryVal);
    }

    if (filters.search) {
      const q = filters.search.toLowerCase();
      data = data.filter(
        (t) =>
          (t.category && t.category.toLowerCase().includes(q)) ||
          (t.title && t.title.toLowerCase().includes(q))
      );
    }

    setFilteredTransactions(data);
  };

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const totalBalance = totalIncome - totalExpense;

  const highestCategory = (() => {
    const map = {};
    transactions.forEach((t) => {
      if (t.type === "expense") {
        map[t.category] = (map[t.category] || 0) + t.amount;
      }
    });

    const sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);
    return sorted[0] ? sorted[0][0] : "No expenses";
  })();

  const monthlyComparison = useMemo(
    () => computeMonthlyComparison(transactions),
    [transactions]
  );

  const overallPattern = useMemo(
    () => computeOverallPattern(transactions),
    [transactions]
  );

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        filteredTransactions,
        addTransaction,
        applyFilters,
        totalIncome,
        totalExpense,
        totalBalance,
        highestCategory,
        monthlyComparison,
        overallPattern,
        isReady,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export const useTransactions = () => useContext(TransactionContext);
