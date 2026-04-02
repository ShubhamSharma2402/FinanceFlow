import { cn } from "../../utils/cn";

export function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200",
        "dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700",
        "bg-[length:200%_100%] animate-shimmer",
        className
      )}
      {...props}
    />
  );
}
