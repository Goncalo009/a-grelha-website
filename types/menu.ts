export type PricingUnit = "unit" | "kg";

export interface Dish {
  id: string;
  name: string;
  description?: string;
  price: number;
  priceText: string;
  unit?: PricingUnit;
  image?: string;
  tags?: string[];
  orderOnly?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  note?: string;
  pricingUnit?: PricingUnit;
  dishes: Dish[];
}

export interface MenuNote {
  reference: string;
  text: string;
}

export interface MenuTextBlock {
  title: string;
  text: string;
}

export interface CouvertInfo extends MenuTextBlock {
  definition: string;
  legislation: string;
}

export interface MenuData {
  brand: string;
  currency: "EUR";
  vatIncluded: boolean;
  categories: Category[];
  notes?: MenuNote[];
  allergens?: MenuTextBlock;
  couvert?: CouvertInfo;
}
