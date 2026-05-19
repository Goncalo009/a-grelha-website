import menuData from "@/content/menu.json";
import type { Category, Dish, MenuData } from "@/types/menu";

const menu = menuData as MenuData;

type MenuImage = {
  image: string;
  alt: string;
  imagePosition?: string;
};

export type AppMenuItem = {
  slug: string;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  unit: Dish["unit"];
  orderOnly?: boolean;
  image: string;
  alt: string;
  category: string;
  categoryId: string;
  section: "featured" | "popular";
  imagePosition?: string;
};

export type AppMenuGroup = {
  id: string;
  name: string;
  description?: string;
  note?: string;
  pricingUnit?: Category["pricingUnit"];
  items: AppMenuItem[];
};

const featuredDishNames = new Set(["Frango", "Picanha", "Maminha"]);

const namedImages: Record<string, MenuImage> = {
  Azeitonas: {
    image: "/stitch/menu/azeitonas.jpg",
    alt: "Azeitonas servidas como entrada",
    imagePosition: "object-[50%_52%]",
  },
  Frango: {
    image: "/stitch/home/whole-bird.jpg",
    alt: "Frango assado no carvão",
    imagePosition: "object-[52%_52%]",
  },
  Picanha: {
    image: "/stitch/home/hero.jpg",
    alt: "Picanha preparada na brasa",
    imagePosition: "object-[50%_58%]",
  },
  Maminha: {
    image: "/stitch/home/hero.jpg",
    alt: "Maminha grelhada na brasa",
    imagePosition: "object-[50%_58%]",
  },
  Entrecosto: {
    image: "/stitch/home/fire-wings.jpg",
    alt: "Entrecosto marcado no carvão",
    imagePosition: "object-[50%_55%]",
  },
  "Batata Frita": {
    image: "/stitch/menu/chourico.jpg",
    alt: "Acompanhamento para grelhados",
    imagePosition: "object-[50%_50%]",
  },
  "Arroz Branco": {
    image: "/stitch/menu/chourico.jpg",
    alt: "Acompanhamento para grelhados",
    imagePosition: "object-[50%_50%]",
  },
};

const categoryImages: Record<string, MenuImage> = {
  entradas: {
    image: "/stitch/menu/azeitonas.jpg",
    alt: "Entrada servida à mesa",
    imagePosition: "object-[50%_52%]",
  },
  "grelhados-pratos-principais": {
    image: "/stitch/home/hero.jpg",
    alt: "Carne grelhada no carvão",
    imagePosition: "object-[50%_58%]",
  },
  acompanhamentos: {
    image: "/stitch/menu/chourico.jpg",
    alt: "Acompanhamentos para grelhados",
    imagePosition: "object-[50%_50%]",
  },
  combos: {
    image: "/stitch/home/hero.jpg",
    alt: "Combo de grelhado com batata frita",
    imagePosition: "object-[50%_58%]",
  },
};

const allMenuDishes = menu.categories.flatMap((category) => category.dishes);

function imageFor(dish: Dish, category: Category): MenuImage {
  return namedImages[dish.name] ?? categoryImages[category.id] ?? categoryImages["grelhados-pratos-principais"];
}

function descriptionFor(dish: Dish, category: Category) {
  if (dish.description) return dish.description;
  if (dish.orderOnly) return "Por encomenda, 3 dias antes. Preço por kg.";
  if (dish.unit === "kg") {
    return category.id === "acompanhamentos"
      ? "Acompanhamento para completar o grelhado. Preço por kg."
      : "Grelhado para takeaway. Preço por kg.";
  }

  return "Entrada/couvert com preço à unidade.";
}

export function formatMenuPrice(dish: Pick<Dish, "price" | "priceText" | "unit">) {
  const priceText = dish.priceText || `${dish.price.toFixed(2).replace(".", ",")} €`;
  return dish.unit === "kg" ? `${priceText}/kg` : priceText;
}

function toAppMenuItem(dish: Dish, category: Category): AppMenuItem {
  const image = imageFor(dish, category);

  return {
    slug: dish.id,
    name: dish.name,
    description: descriptionFor(dish, category),
    price: formatMenuPrice(dish),
    priceValue: dish.price,
    unit: dish.unit,
    orderOnly: dish.orderOnly,
    image: dish.image ?? image.image,
    alt: image.alt,
    category: category.name,
    categoryId: category.id,
    section: featuredDishNames.has(dish.name) ? "featured" : "popular",
    imagePosition: image.imagePosition,
  };
}

export const appMenuGroups: AppMenuGroup[] = menu.categories.map((category) => ({
  id: category.id,
  name: category.name,
  description: category.description,
  note: category.note,
  pricingUnit: category.pricingUnit,
  items: category.dishes.map((dish) => toAppMenuItem(dish, category)),
}));

export const appMenuCategories = appMenuGroups.map((category) => category.name);
export const appMenuItems = appMenuGroups.flatMap((category) => category.items);
export const featuredMenuItems = appMenuItems.filter((item) => item.section === "featured");
export const popularMenuItems = appMenuItems.filter((item) => item.section === "popular");

export const menuNotes = menu.notes ?? [];
export const menuAllergens = menu.allergens;
export const menuCouvert = menu.couvert;

export function getAppMenuItem(slug: string) {
  return appMenuItems.find((item) => item.slug === slug);
}

export const productWeightOptions = [
  { label: "500g", detail: undefined, active: true },
  { label: "1kg", detail: undefined, active: false },
  { label: "1,5kg", detail: undefined, active: false },
];

export const productUnitOptions = [
  { label: "1 un.", detail: undefined, active: true },
  { label: "2 un.", detail: undefined, active: false },
  { label: "3 un.", detail: undefined, active: false },
];

export const productExtras = ["Azeitonas", "Pão", "Batata Frita", "Arroz Branco"].flatMap((name) => {
  const dish = allMenuDishes.find((item) => item.name === name);
  return dish ? [{ label: dish.name, price: formatMenuPrice(dish) }] : [];
});
