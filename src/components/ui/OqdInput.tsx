// src/components/ui/OqdInput.tsx
"use client";

import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

type OqdInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function OqdInput({ label, className, ...props }: OqdInputProps) {
  return (
    <div className="flex flex-col gap-1 text-left">
      {label && <label className="text-sm text-oq-muted">{label}</label>}
      <input
        className={cn(
          "px-4 py-2 rounded-xl bg-oq-bg2 text-white placeholder-oq-muted border border-oq-bg3 focus:outline-none focus:ring-2 focus:ring-oq-turquoise",
          className
        )}
        {...props}
      />
    </div>
  );
}
