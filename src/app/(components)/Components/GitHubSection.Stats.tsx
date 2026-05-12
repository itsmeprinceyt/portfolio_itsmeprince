"use client";

import { motion } from "framer-motion";

export default function StatCard({
  label,
  value,
  icon,
  delay,
}: {
  label: string;
  value: number | string;
  icon: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative flex flex-col items-center gap-2 px-8 py-5 border border-stone-800/60 hover:border-stone-700 overflow-hidden transition-all duration-300 cursor-default"
    >
      <span className="relative text-stone-600 transition-colors duration-300 group-hover:text-stone-400">
        {icon}
      </span>

      <span className="relative text-2xl font-light text-white tracking-wide">
        {value}
      </span>

      <span className="relative text-xs tracking-[0.3em] text-stone-600 uppercase">
        {label}
      </span>
    </motion.div>
  );
}
