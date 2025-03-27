export class Product {
  private id: number;
  private title: string;
  private thumbnail: string;
  private stock: number;
  private price: number;
  private discountPercentage: number;
  private category: string;
  private rating: number;

  constructor(data: {
    id: number;
    title: string;
    thumbnail: string;
    stock: number;
    price: number;
    discountPercentage: number;
    category: string;
    rating: number;
  }) 
  
  {
    this.id = data.id;
    this.title = data.title;
    this.thumbnail = data.thumbnail;
    this.stock = data.stock;
    this.price = data.price;
    this.discountPercentage = data.discountPercentage;
    this.category = data.category;
    this.rating = data.rating;
  }

  public getTitle(): string {
    return this.title;
  }

  public getImage(): string {
    return this.thumbnail;
  }

  public getStock(): number {
    return this.stock;
  }

  public getCategory(): string {
    return this.category;
  }

  public getRating(): number {
    return this.rating;
  }

  public getDiscountedPrice(): number {
    return parseFloat((this.price * (1 - this.discountPercentage / 100)).toFixed(2));
  }

  public updateStock(amount: number): void {
    if (this.stock - amount >= 0) {
      this.stock -= amount;
    }
  }
}
