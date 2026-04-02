// src/utils/calculations.js

export const calculateTotals = (transactions) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return {
    income,
    expenses,
    balance: income - expenses,
  };
};

export const calculateCategoryStats = (transactions) => {
  const map = {};

  transactions.forEach((t) => {
    if (!map[t.category]) {
      map[t.category] = 0;
    }
    map[t.category] += t.amount;
  });

  return map;
};

export const monthlyBreakdown = (transactions) => {
  const map = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7); // YYYY-MM
    if (!map[month]) map[month] = 0;

    map[month] += t.amount;
  });

  return map;
};