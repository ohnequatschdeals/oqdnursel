// src/components/layout/SectionWrapper.tsx
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: "dark" | "gradient" | "none";
};

export function SectionWrapper({
  id,
  children,
  className,
  background = "none",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full px-6 py-16 md:py-24",
        "max-w-6xl mx-auto",
        background === "dark" && "bg-oq-bg2",
        background === "gradient" && "bg-oq-section",
        className
      )}
    >
      {children}
    </section>
  );
}
