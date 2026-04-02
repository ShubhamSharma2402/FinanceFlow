// src/utils/filters.js

export const filterTransactions = (transactions, filters) => {
  return transactions.filter((t) => {
    const matchType =
      filters.type === "all" || t.type === filters.type;

    const matchCategory =
      filters.category === "all" || t.category === filters.category;

    const matchDate =
      !filters.date ||
      t.date === filters.date ||
      t.date.startsWith(filters.date);

    const matchSearch =
      t.category.toLowerCase().includes(filters.search.toLowerCase()) ||
      String(t.amount).includes(filters.search);

    return matchType && matchCategory && matchDate && matchSearch;
  });
};

export const groupTransactions = (transactions, groupBy) => {
  if (groupBy === "none") return { none: transactions };

  const groups = {};

  transactions.forEach((t) => {
    const key =
      groupBy === "category"
        ? t.category
        : t.date.slice(0, 7); // month grouping

    if (!groups[key]) groups[key] = [];
    groups[key].push(t);
  });

  return groups;
};