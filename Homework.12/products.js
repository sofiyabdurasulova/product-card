class Product {
  constructor(price, name) {
    this.price = price;
    this.name = name;
  }
  checkSold() {
    console.log(`Товар ${this.name} продан по цене ${this.price}`);
  }
}
class ProductExpiration extends Product {
  constructor(price, name, expirationDate) {
    super(price, name);
    this.expirationDate = expirationDate;
  }
  checkExpiration() {
    console.log(
      `Товар ${this.name} истекает срок годности ${this.expirationDate} продан по цене ${this.price}`,
    );
  }
}
const muss = new Product(1375, "Увляняющий мусс");
muss.checkSold();
const mask = new Product(1975, "Увляняющая маска");
mask.checkSold();
const cream = new ProductExpiration(375, "Увляняющий крем", "12.12.2026");
cream.checkExpiration();
const serum = new ProductExpiration(975, "Увляняющая сыворотка", "12.12.2026");
serum.checkExpiration();
