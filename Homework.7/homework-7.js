const weather = (city, temperature) => {
  console.log(`Сейчас в городе ${city} температура ${temperature} градусов по Цельсию.`)
};
weather('Istambul', '25°C');

const SPEED_OF_LIGHT = 299792458;
const chekSpeed = (speed) => {
  if (speed > SPEED_OF_LIGHT) {
    console.log('сверхсветовая скорость')
  } if (speed < SPEED_OF_LIGHT) {
    console.log('субсветовая скорость')
  } else {
    console.log('скорость света')
  };
};
chekSpeed(299792458);

const car = 'bmw'
const carPrise = 40000
const myBudget = (budget) => {
  if (budget > car) {
    console.log('${car} приобретен. Спасибо за покупку!')
  } else {
    console.log(' Вам не хватает 1$, пополните баланс.')
  };
};
myBudget(39999);

const myCity = (cityName) => {
  console.log(cityName)
};
myCity('Makkah');
const carBrand = 'Toyota';
const carModel = 'RAV4';
const carSpeed = 190
console.log(
  carBrand,
  carModel,
  carSpeed)