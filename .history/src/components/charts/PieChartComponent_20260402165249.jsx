import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#6366F1",
  "#EC4899",
  "#10B981",
  "#F59E0B",
  "#3B82F6",
  "#8B5CF6",
];

export default function PieChartComponent({
  data,
  dataKey = "value",
  nameKey = "name",
}) {
  return (
    <div className="w-full h-72 bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-sm border dark:border-zinc-700">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            outerRadius={110}
            innerRadius={60}
            paddingAngle={2}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "rgb(39 39 42)",
              border: "none",
              color: "white",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}