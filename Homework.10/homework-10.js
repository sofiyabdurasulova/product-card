import { products } from "./products.js";
const getCardsCount = () => {
  let count = +prompt("Сколько карточек отобразить? От 1 до 5 ");
  while (count < 1 || count > 5 || isNaN(count)) {
    count = +prompt("Некорректный ввод. Введите число от 1 до 5");
  }
  return count;
};
const renderProducts = (products) => {
  const count = getCardsCount();
  const productList = document.querySelector(".container__cards");
  const productTemplate = document.querySelector(".product-template");
  products.forEach((product, index) => {
    if (index < count) {
      const productClone = productTemplate.content.cloneNode(true);
      const image = productClone.querySelector(".card__img");
      image.src = product.img;
      image.alt = product.title;
      productClone.querySelector(".card__skin-type").textContent =
        product.skinType;
      productClone.querySelector(".card__title").textContent = product.title;
      productClone.querySelector(".card__description").textContent =
        product.description;
      const items = productClone.querySelectorAll(".card__item");
      const productItems = [product.item1, product.item2, product.item3];
      items.forEach((item, index) => {
        item.textContent = productItems[index];
      });
      productClone.querySelector(".card__price-text").textContent =
        product.priceText;
      productClone.querySelector(".card__price").textContent =
        `${product.price} ${product.currency}`;
      productList.appendChild(productClone);
    }
  });
};
renderProducts(products);
const productsInfo = products.reduce(
  (acc, product) => [...acc, product.title, product.description],
  [],
);
console.log(productsInfo);
