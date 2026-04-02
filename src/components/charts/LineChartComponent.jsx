import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from "recharts";
import { chartTooltipStyle } from "./chartTheme";
import { cn } from "../../utils/cn";

export default function LineChartComponent({
  data = [],
  xKey = "name",
  yKey = "value",
  className,
}) {
  return (
    <div className={cn("h-72 w-full", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
          <defs>
            <linearGradient id="lineBalanceGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(99 102 241)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="4 6" vertical={false} />
          <XAxis
            dataKey={xKey}
            tick={{ fill: "var(--chart-axis)", fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            dy={6}
          />
          <YAxis
            tick={{ fill: "var(--chart-axis)", fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => {
              const n = Number(v);
              if (Math.abs(n) >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
              if (Math.abs(n) >= 1000) return `₹${(n / 1000).toFixed(0)}k`;
              return `₹${Math.round(n)}`;
            }}
            width={48}
          />
          <Tooltip
            contentStyle={chartTooltipStyle}
            labelStyle={{ color: "#e2e8f0", marginBottom: 4 }}
            formatter={(value) => [`₹${Number(value).toLocaleString("en-IN")}`, "Balance"]}
          />
          <Area
            type="monotone"
            dataKey={yKey}
            stroke="none"
            fill="url(#lineBalanceGrad)"
            fillOpacity={1}
          />
          <Line
            type="monotone"
            dataKey={yKey}
            stroke="rgb(99 102 241)"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, strokeWidth: 0, fill: "rgb(129 140 248)" }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
