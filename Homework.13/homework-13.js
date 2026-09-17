class Dark {
  #temperature;
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }
  getInfo() {
    return `Название: ${this.name}, Размер: ${this.size}, Цена: ${this.price}, Температура: ${this.#temperature}`;
  }
  getTemperature() {
    return this.#temperature;
  }
  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }
  prepare() {
    console.log(
      `Подготовка к использованию ${this.name} при температуре ${this.#temperature}`,
    );
  }
}
class Coffee extends Dark {
  constructor(name, size, price, temperature, coffeeType) {
    super(name, size, price, temperature);
    this.coffeeType = coffeeType;
  }
  prepare() {
    console.log(
      `Подготовка к использованию ${this.name} типа ${this.coffeeType} при температуре ${this.getTemperature()}`,
    );
  }
}
class Tea extends Dark {
  constructor(name, size, price, temperature, teaType) {
    super(name, size, price, temperature);
    this.teaType = teaType;
  }
  prepare() {
    console.log(
      `Подготовка к использованию ${this.name} типа ${this.teaType} при температуре ${this.getTemperature()}`,
    );
  }
}
class Lemonade extends Dark {
  constructor(name, size, price, temperature, lemonadeType) {
    super(name, size, price, temperature);
    this.lemonadeType = lemonadeType;
  }
  prepare() {
    console.log(
      `Подготовка к использованию ${this.name} типа ${this.lemonadeType} при температуре ${this.getTemperature()}`,
    );
  }
}
class Kafe {
  constructor(nameKafe, location) {
    this.nameKafe = nameKafe;
    this.location = location;
  }
  getInfoKafe() {
    return `Название кафе: ${this.nameKafe}, Местоположение: ${this.location}`;
  }
  orderDrink(drink) {
    console.log(`Заказан напиток: ${drink.getInfo()}`);
    drink.prepare();
  }
}
const iceAmericano = new Coffee(
  "Ледяной Американо",
  "Средний",
  "250 ₽",
  "-5°C",
  "Американо",
);
const greenTea = new Tea("Зеленый чай", "Большой", "150 ₽", "80°C", "Зеленый");
const lemonLemonade = new Lemonade(
  "Лимонад с лимоном",
  "Маленький",
  "200 ₽",
  "5°C",
  "Лимонный",
);
const myKafe = new Kafe("Кофейня на углу", "ул. Пушкина, д. 10");
console.log(myKafe.getInfoKafe());
myKafe.orderDrink(iceAmericano);
myKafe.orderDrink(greenTea);
myKafe.orderDrink(lemonLemonade);
