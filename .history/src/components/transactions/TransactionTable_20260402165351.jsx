export default function TransactionTable({ transactions }) {
  return (
    <div className="bg-white dark:bg-zinc-900 border dark:border-zinc-700 p-5 rounded-xl shadow-sm overflow-x-auto">
      <table className="w-full text-left min-w-[600px]">
        <thead>
          <tr className="text-zinc-600 dark:text-zinc-400 text-sm border-b dark:border-zinc-700">
            <th className="py-2">Date</th>
            <th className="py-2">Title</th>
            <th className="py-2">Category</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Type</th>
          </tr>
        </thead>

        <tbody>
          {transactions.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="text-center py-4 text-zinc-500 dark:text-zinc-400"
              >
                No transactions found
              </td>
            </tr>
          )}

          {transactions.map((t) => (
            <tr
              key={t.id}
              className="border-b dark:border-zinc-700 text-sm transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
            >
              <td className="py-3">{t.date}</td>
              <td className="py-3">{t.title}</td>
              <td className="py-3">{t.category}</td>
              <td className="py-3 font-medium">₹{t.amount}</td>
              <td
                className={`py-3 font-semibold ${
                  t.type === "income"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {t.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}