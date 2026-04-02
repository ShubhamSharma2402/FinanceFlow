import TransactionFilters from "../components/transactions/TransactionFilters";
import TransactionTable from "../components/transactions/TransactionTable";
import AddTransactionForm from "../components/transactions/AddTransactionForm";
import SectionHeader from "../components/ui/SectionHeader";
import { Skeleton } from "../components/ui/Skeleton";
import { useTransactions } from "../context/TransactionContext";
import { useAuth } from "../context/AuthContext";

export default function Transactions() {
  const { filteredTransactions, addTransaction, applyFilters, isReady } = useTransactions();
  const { user } = useAuth();

  if (!isReady) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-24 w-full max-w-lg rounded-xl" />
        <Skeleton className="h-14 w-full rounded-2xl" />
        <Skeleton className="h-80 w-full rounded-2xl" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Ledger"
        title="Transactions"
        description="Filter, review, and reconcile every movement across accounts."
      />

      <TransactionFilters onFilter={applyFilters} />

      <TransactionTable transactions={filteredTransactions} />

      {user?.role === "admin" && <AddTransactionForm onAdd={addTransaction} />}
    </div>
  );
}
