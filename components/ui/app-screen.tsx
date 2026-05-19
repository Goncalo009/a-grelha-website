import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function AppScreen({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className="bg-[#f2f1ef] md:px-6 md:py-8">
      <div
        className={cn(
          "relative mx-auto min-h-[calc(100dvh-64px)] max-w-[430px] overflow-hidden bg-white text-[#1c1c1c] shadow-none md:min-h-[820px] md:rounded-[36px] md:shadow-[0_28px_90px_rgba(28,28,28,0.18)] md:ring-1 md:ring-black/10",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
