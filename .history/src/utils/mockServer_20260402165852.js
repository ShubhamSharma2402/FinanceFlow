// src/utils/mockServer.js

export const mockDelay = (ms = 600) =>
  new Promise((resolve) => setTimeout(resolve, ms));

let transactions = [
  {
    id: "t1",
    type: "income",
    category: "Salary",
    amount: 50000,
    date: "2026-03-01",
  },
  {
    id: "t2",
    type: "expense",
    category: "Food",
    amount: 1200,
    date: "2026-03-02",
  },
];

export const mockServer = {
  async getTransactions() {
    await mockDelay();
    return [...transactions];
  },

  async addTransaction(data) {
    await mockDelay();
    const newTx = { id: crypto.randomUUID(), ...data };
    transactions.push(newTx);
    return newTx;
  },

  async deleteTransaction(id) {
    await mockDelay();
    transactions = transactions.filter((t) => t.id !== id);
    return { success: true };
  },

  async updateTransaction(id, updatedData) {
    await mockDelay();
    transactions = transactions.map((t) =>
      t.id === id ? { ...t, ...updatedData } : t
    );
    return transactions.find((t) => t.id === id);
  },
};