import PageTransition from "../components/PageTransition";
import TransactionFilters from "../components/TransactionFilters";
import TransactionTable from "../components/TransactionTable";
import AddTransactionForm from "../components/AddTransactionForm";
import { useTransactions } from "../context/TransactionsContext";
import { useRole } from "../context/RoleContext";

export default function Transactions() {
  const { filteredTransactions, addTransaction, applyFilters } =
    useTransactions();
  const { role } = useRole();

  return (
    <PageTransition>
      <div className="p-6 space-y-6">

        <TransactionFilters onFilter={applyFilters} />

        <TransactionTable transactions={filteredTransactions} />

        {role === "admin" && (
          <AddTransactionForm onAdd={addTransaction} />
        )}

      </div>
    </PageTransition>
  );
}