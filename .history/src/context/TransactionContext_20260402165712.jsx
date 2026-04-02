import { createContext, useContext, useEffect, useState } from "react";

const TransactionContext = createContext();

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  // Load saved transactions OR use mock
  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      const parsed = JSON.parse(saved);
      setTransactions(parsed);
      setFilteredTransactions(parsed);
    } else {
      const mockData = [
        {
          id: 1,
          date: "2024-01-10",
          amount: 5000,
          category: "Salary",
          type: "income",
        },
        {
          id: 2,
          date: "2024-01-12",
          amount: 1200,
          category: "Groceries",
          type: "expense",
        },
        {
          id: 3,
          date: "2024-01-14",
          amount: 800,
          category: "Transport",
          type: "expense",
        },
      ];
      setTransactions(mockData);
      setFilteredTransactions(mockData);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Add new transaction
  const addTransaction = (tx) => {
    const newTx = { ...tx, id: Date.now() };
    const newList = [...transactions, newTx];
    setTransactions(newList);
    setFilteredTransactions(newList);
  };

  // Apply filters
  const applyFilters = (filters) => {
    let data = [...transactions];

    if (filters.type !== "all") {
      data = data.filter((t) => t.type === filters.type);
    }

    if (filters.category !== "all") {
      data = data.filter((t) => t.category === filters.category);
    }

    if (filters.search) {
      data = data.filter((t) =>
        t.category.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    setFilteredTransactions(data);
  };

  // Insights
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

  const monthlyComparison = "Stable spending across months";

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
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export const useTransactions = () => useContext(TransactionContext);