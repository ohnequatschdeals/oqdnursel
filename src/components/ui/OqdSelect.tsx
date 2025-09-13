// src/components/ui/OqdSelect.tsx
"use client";

import { cn } from "@/lib/utils";
import { SelectHTMLAttributes } from "react";

type OqdSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: { value: string; label: string }[];
};

export function OqdSelect({ label, options, className, ...props }: OqdSelectProps) {
  return (
    <div className="flex flex-col gap-1 text-left">
      {label && <label className="text-sm text-oq-muted">{label}</label>}
      <select
        className={cn(
          "px-4 py-2 rounded-xl bg-oq-bg2 text-white border border-oq-bg3 focus:outline-none focus:ring-2 focus:ring-oq-turquoise",
          className
        )}
        {...props}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
