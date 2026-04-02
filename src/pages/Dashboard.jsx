import SummaryCard from "../components/dashboard/SummaryCard";
import LineChartComponent from "../components/charts/LineChartComponent";
import PieChartComponent from "../components/charts/PieChartComponent";
import SectionHeader from "../components/ui/SectionHeader";
import { Skeleton } from "../components/ui/Skeleton";
import { Wallet, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { useTransactions } from "../context/TransactionContext";
import { useMemo } from "react";
import { formatCurrency } from "../utils/format";
import { cn } from "../utils/cn";

function buildPieData(transactions) {
  const map = {};
  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      map[t.category] = (map[t.category] || 0) + t.amount;
    });
  return Object.entries(map)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
}

function buildLineData(transactions) {
  const sorted = [...transactions].sort((a, b) => a.date.localeCompare(b.date));
  const byDay = {};
  sorted.forEach((t) => {
    const delta = t.type === "income" ? t.amount : -t.amount;
    byDay[t.date] = (byDay[t.date] || 0) + delta;
  });
  const dates = Object.keys(byDay).sort();
  let running = 0;
  return dates.map((d) => {
    running += byDay[d];
    return { name: d.slice(5), value: running };
  });
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
      <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-indigo-500/[0.06] blur-3xl dark:bg-indigo-500/10" />
      <div className="relative mb-4">
        <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
        {subtitle && <p className="mt-1 text-xs text-slate-500 dark:text-zinc-500">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

export default function Dashboard() {
  const { totalBalance, totalIncome, totalExpense, transactions, isReady } = useTransactions();

  const pieData = useMemo(() => buildPieData(transactions), [transactions]);
  const lineData = useMemo(() => buildLineData(transactions), [transactions]);

  if (!isReady) {
    return (
      <div className="space-y-10">
        <div>
          <Skeleton className="mb-2 h-3 w-24" />
          <Skeleton className="h-8 w-64 max-w-full" />
          <Skeleton className="mt-2 h-4 w-full max-w-lg" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-32 rounded-2xl" />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Skeleton className="h-[340px] rounded-2xl" />
          <Skeleton className="h-[340px] rounded-2xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Overview"
        title="Financial pulse"
        description="Running balance and spending mix from your synced activity — refined for clarity."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <SummaryCard
          title="Total balance"
          value={formatCurrency(totalBalance)}
          icon={Wallet}
          color="#6366f1"
          delay={0}
        />
        <SummaryCard
          title="Total income"
          value={formatCurrency(totalIncome)}
          icon={ArrowUpCircle}
          color="#059669"
          delay={0.06}
        />
        <SummaryCard
          title="Total expenses"
          value={formatCurrency(totalExpense)}
          icon={ArrowDownCircle}
          color="#dc2626"
          delay={0.12}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ChartPanel
          title="Balance trajectory"
          subtitle="Cumulative balance after each day’s net change."
        >
          <LineChartComponent data={lineData} />
        </ChartPanel>

        <ChartPanel title="Spending mix" subtitle="Expense share by category.">
          <PieChartComponent data={pieData} />
        </ChartPanel>
      </div>
    </div>
  );
}
