import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function BarChartComponent({
  data,
  xKey = "name",
  yKey = "value",
}) {
  return (
    <div className="w-full h-72 bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-sm border dark:border-zinc-700">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey={xKey} stroke="currentColor" />
          <YAxis stroke="currentColor" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgb(39 39 42)",
              border: "none",
              color: "white",
            }}
          />
          <Bar
            dataKey={yKey}
            fill="hsl(var(--primary))"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}