const getTemperature = (city, temperature) => {
  console.log(
    `Сейчас в городе ${city} температура ${temperature} градусов по Цельсию.`,
  );
};
getTemperature("Istambul", "25°C");

const SPEED_OF_LIGHT = 299792458;
const chekSpeed = (speed) => {
  if (speed > SPEED_OF_LIGHT) {
    console.log("сверхсветовая скорость");
  }
  if (speed < SPEED_OF_LIGHT) {
    console.log("субсветовая скорость");
  } else {
    console.log("скорость света");
  }
};
chekSpeed(299792458);

const car = "bmw";
const carPrise = 40000;
const buyCar = (budget) => {
  if (budget >= carPrise) {
    console.log(`${car} приобретен. Спасибо за покупку!`);
  } else {
    const difference = carPrise - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс.`);
  }
};
buyCar(35000);

const showCity = (cityName) => {
  console.log(cityName);
};
showCity("Makkah");
const carBrand = "Toyota";
const carModel = "RAV4";
const carSpeed = 190;
console.log(carBrand, carModel, carSpeed);
