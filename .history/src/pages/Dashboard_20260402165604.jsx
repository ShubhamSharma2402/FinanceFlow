import PageTransition from "../components/PageTransition";
import SummaryCard from "../components/SummaryCard";
import LineChartComponent from "../charts/LineChartComponent";
import PieChartComponent from "../charts/PieChartComponent";
import { Wallet, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { useTransactions } from "../context/TransactionsContext";

export default function Dashboard() {
  const { transactions, totalBalance, totalIncome, totalExpense } =
    useTransactions();

  return (
    <PageTransition>
      <div className="p-6 space-y-6">

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <SummaryCard
            title="Total Balance"
            value={`₹${totalBalance}`}
            icon={Wallet}
            color="#6366f1"
          />
          <SummaryCard
            title="Income"
            value={`₹${totalIncome}`}
            icon={ArrowUpCircle}
            color="#16a34a"
          />
          <SummaryCard
            title="Expenses"
            value={`₹${totalExpense}`}
            icon={ArrowDownCircle}
            color="#dc2626"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-3">Balance Trend</h3>
            <LineChartComponent />
          </div>

          <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-3">Spending Breakdown</h3>
            <PieChartComponent />
          </div>
        </div>

      </div>
    </PageTransition>
  );
}