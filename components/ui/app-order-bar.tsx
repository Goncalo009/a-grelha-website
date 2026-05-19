"use client";

import { OrderDrawer } from "@/components/forms/order-drawer";
import { cn } from "@/lib/utils";

export function AppOrderBar({ className }: { className?: string }) {
  return (
    <div className={cn("fixed inset-x-3 bottom-[76px] z-40 mx-auto max-w-[404px] md:bottom-8", className)}>
      <OrderDrawer variant="summary" />
    </div>
  );
}
