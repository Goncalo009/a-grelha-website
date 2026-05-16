export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  dishes: Dish[];
}

export interface MenuData {
  categories: Category[];
}
