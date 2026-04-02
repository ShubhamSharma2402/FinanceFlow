export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-6 md:mb-8">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      {description && (
        <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
