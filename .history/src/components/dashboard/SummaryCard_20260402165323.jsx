export default function SummaryCard({ title, value, icon: Icon, color }) {
  return (
    <div
      className={`p-5 rounded-xl shadow-sm border bg-white dark:bg-zinc-900 dark:border-zinc-700 
      transition-all duration-300 hover:scale-[1.02] hover:shadow-md`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{title}</p>
          <h2 className="text-2xl font-semibold mt-1">{value}</h2>
        </div>

        {Icon && (
          <div
            className={`p-3 rounded-lg text-white`}
            style={{ backgroundColor: color }}
          >
            <Icon size={22} />
          </div>
        )}
      </div>
    </div>
  );
}