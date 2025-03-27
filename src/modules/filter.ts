import { Product } from "./product";

export function filterByCategory(products: Product[], category: string): Product[] {
  return category ? products.filter((p) => p.getCategory() === category) : products;
}

export function filterByPrice(products: Product[], maxPrice: number): Product[] {
  return maxPrice ? products.filter((p) => p.getDiscountedPrice() <= maxPrice) : products;
}

export function sortByPrice(products: Product[], ascending: boolean): Product[] {
  return [...products].sort((a, b) => ascending ? a.getDiscountedPrice() - b.getDiscountedPrice() : b.getDiscountedPrice() - a.getDiscountedPrice());
}

export function sortByRating(products: Product[], ascending: boolean): Product[] {
  return [...products].sort((a, b) => ascending ? a.getRating() - b.getRating() : b.getRating() - a.getRating());
}


