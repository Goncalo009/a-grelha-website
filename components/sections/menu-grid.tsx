import { DishCard } from "@/components/ui/dish-card";
import { cn } from "@/lib/utils";
import type { Category } from "@/types/menu";

interface MenuGridProps {
  categories: Category[];
  className?: string;
}

export function MenuGrid({ categories, className }: MenuGridProps) {
  return (
    <div className={cn("space-y-12", className)}>
      {categories.map((category) => (
        <section key={category.id} id={category.id}>
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{category.name}</h2>
            {category.description && (
              <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
                {category.description}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.dishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
