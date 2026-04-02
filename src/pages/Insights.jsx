import InsightsCard from "../components/dashboard/InsightsCard";
import BarChartComponent from "../components/charts/BarChartComponent";
import SectionHeader from "../components/ui/SectionHeader";
import { Skeleton } from "../components/ui/Skeleton";
import { TrendingUp, PieChart, Sparkles } from "lucide-react";
import { useTransactions } from "../context/TransactionContext";
import { useMemo } from "react";
import { cn } from "../utils/cn";

function monthlyExpenseBars(transactions) {
  const map = {};
  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      const month = t.date.slice(0, 7);
      map[month] = (map[month] || 0) + t.amount;
    });
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, value]) => ({ name, value }));
}

function ChartPanel({ title, subtitle, children, className }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/75 p-5 shadow-card backdrop-blur-md sm:p-6",
        "dark:border-zinc-800/80 dark:bg-zinc-900/55",
        className
      )}
    >
      <div className="pointer-events-none absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-violet-500/[0.07] blur-3xl dark:bg-violet-500/10" />
      <div className="relative mb-4">
        <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
        {subtitle && <p className="mt-1 text-xs text-slate-500 dark:text-zinc-500">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

export default function Insights() {
  const { highestCategory, monthlyComparison, overallPattern, transactions, isReady } = useTransactions();
  const barData = useMemo(() => monthlyExpenseBars(transactions), [transactions]);

  if (!isReady) {
    return (
      <div className="space-y-10">
        <Skeleton className="h-24 w-full max-w-lg rounded-xl" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-36 rounded-2xl" />
          ))}
        </div>
        <Skeleton className="h-[360px] rounded-2xl" />
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Intelligence"
        title="Insights & trends"
        description="Surface signals from your cash flows — where spend concentrates and how months compare."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <InsightsCard
          title="Top spending category"
          description={highestCategory}
          icon={PieChart}
          delay={0}
        />
        <InsightsCard
          title="Month over month"
          description={monthlyComparison}
          icon={TrendingUp}
          delay={0.06}
        />
        <InsightsCard
          title="Spending rhythm"
          description={overallPattern}
          icon={Sparkles}
          delay={0.12}
        />
      </div>

      <ChartPanel
        title="Monthly expense bars"
        subtitle="Total outflows grouped by calendar month."
      >
        <BarChartComponent data={barData} />
      </ChartPanel>
    </div>
  );
}
