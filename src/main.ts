import { fetchProducts } from "./modules/api";
import { renderProducts } from "./modules/ui";
import { filterByCategory, filterByPrice, sortByPrice, sortByRating } from "./modules/filter";
import { Product } from "./modules/product";

let allProducts: Product[] = [];

async function init(): Promise<void> {
  allProducts = await fetchProducts();
  renderProducts(allProducts);
}

init();

export function updateUI() {
  renderProducts(allProducts);
}

function applyFilters(): void {
  const category = (document.getElementById("category-filter") as HTMLSelectElement).value;
  const maxPrice = parseFloat((document.getElementById("price-filter") as HTMLInputElement).value) || 0;

  let filteredProducts = filterByCategory(allProducts, category);
  filteredProducts = filterByPrice(filteredProducts, maxPrice);

  renderProducts(filteredProducts);
}

document.getElementById("apply-filters")?.addEventListener("click", applyFilters);

document.getElementById("sort-price-asc")?.addEventListener("click", () => renderProducts(sortByPrice(allProducts, true)));
document.getElementById("sort-price-desc")?.addEventListener("click", () => renderProducts(sortByPrice(allProducts, false)));
document.getElementById("sort-rating-asc")?.addEventListener("click", () => renderProducts(sortByRating(allProducts, true)));
document.getElementById("sort-rating-desc")?.addEventListener("click", () => renderProducts(sortByRating(allProducts, false)));