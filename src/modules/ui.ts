import { Product } from "./product";
import { addToCart } from "./cart";

export function renderProducts(products: Product[]): void {
  const container = document.getElementById("products-container") as HTMLDivElement;
  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <h3>${product.getTitle()}</h3>
      <img src="${product.getImage()}" alt="${product.getTitle()}">
      <p>Stock: ${product.getStock()}</p>
      <p>Price: ${product.getDiscountedPrice()} $</p>
      <button data-id="${product.getTitle()}">Add to cart</button>
    `;

    card.querySelector("button")?.addEventListener("click", () => addToCart(product));
    container.appendChild(card);
  });
}

