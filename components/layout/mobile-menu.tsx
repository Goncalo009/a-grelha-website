"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  links: Array<{ href: string; label: string }>;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, links, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t bg-background">
      <div className="container mx-auto px-4 py-4 space-y-3">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {link.label}
            </Link>
          );
        })}
        {/* CTA Button - Mobile */}
        <Link
          href="/encomendas"
          onClick={onClose}
          className="flex mt-4 items-center justify-center rounded-md bg-primary px-4 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Encomendar
        </Link>
      </div>
    </div>
  );
}
