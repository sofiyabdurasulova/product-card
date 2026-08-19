import { products } from "./products.js";
const getCardsCount = () => {
  const count = +prompt("Сколько карточек отобразить? От 1 до 5 ");
  return count >= 1 && count <= 5 ? count : getCardsCount();
};
const renderProducts = (products) => {
  const count = getCardsCount();
  products.forEach((product, index) => {
    if (index < count) {
      const productList = document.querySelector(".container__cards");
      const productTemplate = document.querySelector(".product-template");
      const productClone = productTemplate.content.cloneNode(true);
      productClone.querySelector(".card__img").src = product.img;
      productClone.querySelector(".card__skin-type").textContent =
        product.skinType;
      productClone.querySelector(".card__title").textContent = product.title;
      productClone.querySelector(".card__description").textContent =
        product.description;
      productClone.querySelector(".card__composition").textContent =
        product.composition;
      const items = productClone.querySelectorAll(".card__item");
      items[0].textContent = product.item1;
      items[1].textContent = product.item2;
      items[2].textContent = product.item3;
      productClone.querySelector(".card__price-text").textContent =
        product.priceText;
      productClone.querySelector(".card__price").textContent =
        `${product.price} ${product.currency}`;
      productList.appendChild(productClone);
    }
  });
};
renderProducts(products);
