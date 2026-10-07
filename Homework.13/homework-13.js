class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error("Невозможно создать экземпляр абстрактного класса Drink");
    }
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

  #prepare() {
    this.setTemperature(this.#temperature);
    console.log(
      `Подготовка к использованию ${this.name} при температуре ${this.#temperature}`,
    );
  }
  serveDrink() {
    this.#prepare();
    console.log(
      `Подача напитка ${this.name} при температуре ${this.#temperature}`,
    );
  }
}
class Coffee extends Drink {
  constructor(name, size, price, temperature, coffeeType) {
    super(name, size, price, temperature);
    this.coffeeType = coffeeType;
  }
  serveDrink() {
    super.serveDrink();
  }
}
class Tea extends Drink {
  constructor(name, size, price, temperature, teaType) {
    super(name, size, price, temperature);
    this.teaType = teaType;
  }
  serveDrink() {
    super.serveDrink();
  }
}
class Lemonade extends Drink {
  constructor(name, size, price, temperature, lemonadeType) {
    super(name, size, price, temperature);
    this.lemonadeType = lemonadeType;
  }
  serveDrink() {
    super.serveDrink();
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
    drink.serveDrink();
  }
}
const iceAmericano = new Coffee(
  "Ледяной Американо",
  "Средний",
  250,
  -5,
  "Американо",
);
const greenTea = new Tea("Зеленый чай", "Большой", 150, 80, "Зеленый");
const lemonLemonade = new Lemonade(
  "Лимонад с лимоном",
  "Маленький",
  200,
  5,
  "Лимонный",
);
const myKafe = new Kafe("Кофейня на углу", "ул. Пушкина, д. 10");
console.log(myKafe.getInfoKafe());
myKafe.orderDrink(iceAmericano);
myKafe.orderDrink(greenTea);
myKafe.orderDrink(lemonLemonade);
