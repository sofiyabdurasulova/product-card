const cart = [];
const buttons = document.querySelectorAll('.card__add-to-cart');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    let productName = button.closest('.card').querySelector('.card__title').textContent.trim();
    cart.push(productName);
    console.log("Товар добавлен в корзину:", cart);
  });
});
const mainTitle = document.querySelector('.container__main-title');
mainTitle.addEventListener('mouseenter', () => {
  console.log(mainTitle.textContent);
})
const card = document.querySelector('.card');
const toggleCardColor = document.querySelector('.card__buy-button');
toggleCardColor.addEventListener('click', () => {
  card.classList.toggle('toggle-card-active');
})
const cards = document.querySelectorAll('.card');
const toggleCardsColor = document.querySelector('.cards-button');
console.log(toggleCardsColor);
toggleCardsColor.addEventListener('click', () => {
  console.log('click!');
  cards.forEach((card) => card.classList.toggle('toggle-cards-active'));
})
const openDokaButton = document.querySelector('.open-doka');
openDokaButton.addEventListener('click', openDoka)
function openDoka() {
  const answer = confirm('Вы действительно хотите открыть Дока?');
  if (answer === true) {
    window.open('https://doka.guide');
  } else {
    return
  }
}
const outputConsoleButton = document.querySelector('.output-console-log');
outputConsoleButton.addEventListener('click', () => outputConsoleLOg('дз №6'));
function outputConsoleLOg(message) {
  alert(message);
  console.log(message);
}