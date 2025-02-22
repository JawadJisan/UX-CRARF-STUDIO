import type React from "react";
import { cn } from "@/lib/utils";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-blue-400/20 text-blue-300 px-1 py-0.5 rounded",
        className
      )}
    >
      {children}
    </span>
  );
};
