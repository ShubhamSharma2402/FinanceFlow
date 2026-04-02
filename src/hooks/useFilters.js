import { useState } from "react";

export default function useFilters() {
  const [filters, setFilters] = useState({
    type: "all",
    category: "all",
    search: "",
    minAmount: "",
    maxAmount: "",
    startDate: "",
    endDate: "",
  });

  const applyFilters = (transactions) => {
    let data = [...transactions];

    if (filters.type !== "all") {
      data = data.filter((t) => t.type === filters.type);
    }

    if (filters.category !== "all") {
      data = data.filter((t) => t.category === filters.category);
    }

    if (filters.search.trim()) {
      data = data.filter((t) =>
        t.category.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.minAmount) {
      data = data.filter((t) => t.amount >= Number(filters.minAmount));
    }

    if (filters.maxAmount) {
      data = data.filter((t) => t.amount <= Number(filters.maxAmount));
    }

    if (filters.startDate) {
      data = data.filter((t) => new Date(t.date) >= new Date(filters.startDate));
    }

    if (filters.endDate) {
      data = data.filter((t) => new Date(t.date) <= new Date(filters.endDate));
    }

    return data;
  };

  return { filters, setFilters, applyFilters };
}