const cart = [];
const cartButtons = document.querySelectorAll('.card__add-to-cart');

cartButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const productName = button.closest('.card').querySelector('.card__title').textContent.trim();
    cart.push(productName);
    console.log("Товар добавлен в корзину:", cart);
  });
});
const mainTitle = document.querySelector('.container__main-title');
mainTitle.addEventListener('mouseenter', () => {
  console.log(mainTitle.textContent.trim());
});
const card = document.querySelector('.card');
const cardBuyButton = document.querySelector('.card__buy-button');
cardBuyButton.addEventListener('click', () => {
  card.classList.toggle('toggle-card-active');
});
const cards = document.querySelectorAll('.card');
const cardsButton = document.querySelector('.cards-button');
cardsButton.addEventListener('click', () => {
  cards.forEach((card) => card.classList.toggle('toggle-cards-active'));
});
const openDokaButton = document.querySelector('.open-doka');
openDokaButton.addEventListener('click', openDoka);
function openDoka() {
  const answer = confirm('Вы действительно хотите открыть Дока?');
  if (answer) {
    window.open('https://doka.guide');
  }
};
const outputConsoleButton = document.querySelector('.output-console-log');
outputConsoleButton.addEventListener('click', () => outputConsoleLog('дз №6'));
function outputConsoleLog(message) {
  alert(message);
  console.log(message);
};