import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from "recharts";
import { chartTooltipStyle } from "./chartTheme";
import { cn } from "../../utils/cn";

const COLORS = [
  "#6366f1",
  "#8b5cf6",
  "#ec4899",
  "#14b8a6",
  "#f59e0b",
  "#3b82f6",
  "#10b981",
  "#f43f5e",
];

export default function PieChartComponent({
  data = [],
  dataKey = "value",
  nameKey = "name",
  className,
}) {
  const hasData = data.length > 0;

  return (
    <div className={cn("h-72 w-full", className)}>
      {!hasData ? (
        <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-slate-200/90 text-sm text-slate-500 dark:border-zinc-700 dark:text-zinc-500">
          No expense categories yet
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey={dataKey}
              nameKey={nameKey}
              cx="50%"
              cy="48%"
              outerRadius={100}
              innerRadius={58}
              paddingAngle={3}
              stroke="none"
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} className="outline-none" />
              ))}
            </Pie>

            <Tooltip
              contentStyle={chartTooltipStyle}
              formatter={(value, _n, p) => [
                `₹${Number(value).toLocaleString("en-IN")}`,
                p.payload?.name ?? "",
              ]}
            />
            <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: 11 }} />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
