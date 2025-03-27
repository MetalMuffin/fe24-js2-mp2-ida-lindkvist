import { Product } from "./product";
import { renderProducts } from "./ui";
import { updateUI } from "../main";

const cart: Product[] = [];

export function addToCart(product: Product): void {
  if (product.getStock() > 0) {
    cart.push(product);
    product.updateStock(1);
    updateUI();
  } else {
    alert("Produkten är slut");
  }
}

