import PageTransition from "../components/PageTransition";
import InsightsCard from "../components/InsightsCard";
import BarChartComponent from "../charts/BarChartComponent";
import { TrendingUp, PieChart, ArrowDown } from "lucide-react";
import { useTransactions } from "../context/TransactionsContext";

export default function Insights() {
  const { highestCategory, monthlyComparison } = useTransactions();

  return (
    <PageTransition>
      <div className="p-6 space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <InsightsCard
            title="Top Spending Category"
            description={highestCategory}
            icon={PieChart}
          />
          <InsightsCard
            title="Monthly Trend"
            description={monthlyComparison}
            icon={TrendingUp}
          />
          <InsightsCard
            title="Overall Pattern"
            description="Spending stable with minor spikes."
            icon={ArrowDown}
          />
        </div>

        <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-3">Monthly Expenses</h3>
          <BarChartComponent />
        </div>

      </div>
    </PageTransition>
  );
}