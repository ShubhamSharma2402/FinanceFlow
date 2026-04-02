export default function InsightsCard({ title, description, icon: Icon }) {
  return (
    <div
      className="p-5 rounded-xl bg-white dark:bg-zinc-900 border dark:border-zinc-700 
      shadow-sm transition-all duration-300 hover:scale-[1.015] hover:shadow-md"
    >
      <div className="flex gap-3 items-start">
        {Icon && (
          <div className="p-3 rounded-lg bg-indigo-500 text-white">
            <Icon size={20} />
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}