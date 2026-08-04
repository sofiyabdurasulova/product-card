//03. Создать объект на основе моих данных
const user = {
  firstName: "Sofiya",
  lastName: "Abdurasulova",
  age: 27,
  city: "Istanbul",
  country: "Turkey",
  email: "f1kaaa.2ooo@gmail.com",
  job: "Frontend Developer",
};
//04. Создать объект, который будет хранить данные об автомобиле
const car = {
  carBrand: "BMW",
  carModel: "X5",
  carYear: 2020,
  carColor: "Черный",
  carTransmission: "Automatic",
};
car.owner = user.firstName;
console.log(car.owner);
//05. Написать функцию, которая аргументом принимает объект.
function addSpeed(car, carSpeed) {
  if (!car.carSpeed) {
    car.carSpeed = carSpeed;
  }
}
addSpeed(car, 250);
console.log(car.carSpeed);
//06. Написать функцию, которая первым аргументом принимает объект, а вторым аргументом свойство объекта
function printCarColor(car, carColor) {
  console.log(`У автомобиля ${car.carBrand} ${car.carModel} цвет ${carColor}`);
}
printCarColor(car, car.carColor);
//07. Создать массив
const products = ["яблоко", "банан", "апельсин", "виноград", "клубника"];
//08. Создать массив объектов, которые будут хранить данные о книге (название, автор, год издания, жанр)
const books = [
  {
    title: "Чистый код",
    author: "Роберт Мартин",
    year: 2008,
    genre: "Программирование",
  },
  {
    title: "Преступление и наказание",
    author: "Федор Достоевский",
    year: 1866,
    genre: "Роман",
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    genre: "Роман",
  },
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1948,
    genre: "Альтернативная история",
  },
];
books.push({
  title: "Война и мир",
  author: "Лев Толстой",
  year: 1869,
  genre: "Роман",
});
//09. Создать еще один массив объектов, которые будут хранить данные о фильме (название, режиссер, год выпуска, жанр) и объединить два массива в один
const movies = [
  {
    title: "Форрест Гамп",
    director: "Роберт Земекис",
    year: 1994,
    genre: "Драма",
  },
  {
    title: "Титаник",
    director: "Джеймс Кэмерон",
    year: 1997,
    genre: "Роман",
  },
];
const allMedia = [...books, ...movies];
console.log(allMedia);
//10. Написать функцию с методом мап
function addIsRare(allMedia) {
  return allMedia.map((item) => {
    return {
      ...item,
      isRare: item.year < 2000,
    };
  });
}
const updatedMedia = addIsRare(allMedia);
console.log(updatedMedia);
