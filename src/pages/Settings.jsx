import { motion } from "framer-motion";
import { Bell, Shield, Palette } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader";

const rows = [
  {
    icon: Bell,
    title: "Notifications",
    body: "In-app alerts for large charges and low balance will appear here.",
  },
  {
    icon: Shield,
    title: "Privacy",
    body: "Your finance data never leaves this browser in the demo build.",
  },
  {
    icon: Palette,
    title: "Appearance",
    body: "Use the sun/moon control in the header to switch light and dark themes.",
  },
];

export default function Settings() {
  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Preferences"
        title="Settings"
        description="A calm place for account preferences — more controls ship over time."
      />

      <div className="grid gap-4">
        {rows.map(({ icon: Icon, title, body }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-card backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-900/60 sm:p-6"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-zinc-200">
              <Icon size={20} />
            </div>
            <div>
              <h2 className="font-display font-semibold text-slate-900 dark:text-white">{title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">{body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
