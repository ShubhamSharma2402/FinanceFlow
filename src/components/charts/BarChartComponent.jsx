import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { chartTooltipStyle } from "./chartTheme";
import { cn } from "../../utils/cn";

function formatMonthTick(val) {
  if (typeof val === "string" && /^\d{4}-\d{2}$/.test(val)) {
    const [y, m] = val.split("-");
    const d = new Date(Number(y), Number(m) - 1, 1);
    return d.toLocaleDateString("en-IN", { month: "short", year: "2-digit" });
  }
  return val;
}

export default function BarChartComponent({
  data = [],
  xKey = "name",
  yKey = "value",
  className,
}) {
  const hasData = data.length > 0;

  return (
    <div className={cn("h-72 w-full", className)}>
      {!hasData ? (
        <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-slate-200/90 text-sm text-slate-500 dark:border-zinc-700 dark:text-zinc-500">
          Not enough monthly data yet
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="18%" margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
            <defs>
              <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(129 140 248)" stopOpacity={1} />
                <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity={0.85} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="4 6" vertical={false} />
            <XAxis
              dataKey={xKey}
              tick={{ fill: "var(--chart-axis)", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatMonthTick}
              dy={6}
            />
            <YAxis
              tick={{ fill: "var(--chart-axis)", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => {
                const n = Number(v);
                if (Math.abs(n) >= 100000) return `${(n / 100000).toFixed(1)}L`;
                if (Math.abs(n) >= 1000) return `${Math.round(n / 1000)}k`;
                return `${Math.round(n)}`;
              }}
              width={40}
            />
            <Tooltip
              contentStyle={chartTooltipStyle}
              labelFormatter={formatMonthTick}
              formatter={(value) => [`₹${Number(value).toLocaleString("en-IN")}`, "Spent"]}
            />
            <Bar dataKey={yKey} radius={[8, 8, 0, 0]} maxBarSize={48}>
              {data.map((_, i) => (
                <Cell key={i} fill="url(#barGrad)" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
