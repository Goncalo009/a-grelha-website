import * as React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Dish } from "@/types/menu";

interface DishCardProps {
  /** New API: pass a dish object */
  dish?: Dish;
  /** Legacy API: individual props */
  name?: string;
  description?: string;
  price?: number | string;
  imageUrl?: string;
  onOrder?: () => void;
  className?: string;
}

export function DishCard({
  dish,
  name,
  description,
  price,
  imageUrl,
  onOrder,
  className,
}: DishCardProps) {
  const dishName = dish?.name ?? name;
  const dishDescription = dish?.description ?? description;
  const dishImage = dish?.image ?? imageUrl;
  
  // Handle price: if from dish, it's number. If from legacy, could be string with currency symbol.
  const priceValue = dish?.price ?? price;
  const displayPrice = typeof priceValue === 'number' 
    ? `${priceValue.toFixed(2)} €`
    : priceValue; // assume string already formatted

  return (
    <Card className={cn("flex flex-col overflow-hidden transition-shadow hover:shadow-lg", className)}>
      {dishImage && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={dishImage}
            alt={dishName ?? "Prato"}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <CardHeader className="p-4 pb-2">
        <h3 className="font-semibold leading-none">{dishName}</h3>
      </CardHeader>
      <CardContent className="flex-1 p-4 pt-0">
        <p className="text-sm text-muted-foreground">{dishDescription}</p>
        {dish?.tags && dish.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {dish.tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="mt-auto flex items-center justify-between p-4 pt-0">
        <p className="text-lg font-bold">{displayPrice}</p>
        {onOrder && (
          <Button size="sm" onClick={onOrder}>
            Pedir
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
