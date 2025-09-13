// src/components/ui/OqdButton.tsx
"use client";

import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "gradient" | "outlineTeal";
};

export function OqdButton({
  className,
  variant = "gradient",
  ...props
}: Props) {
  if (variant === "outlineTeal") {
    return (
      <button
        className={cn(
          "border border-oq-turquoise text-oq-turquoise hover:bg-oq-turquoise/10 px-4 py-2 rounded-xl",
          className
        )}
        {...props}
      />
    );
  }
  return (
    <button
      className={cn(
        "text-white shadow-md bg-[linear-gradient(90deg,#ec4899,#3b82f6)] hover:opacity-95 px-4 py-2 rounded-xl",
        className
      )}
      {...props}
    />
  );
}
