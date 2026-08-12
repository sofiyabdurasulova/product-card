import { comments } from "./comments.js";
//02. Отфильтровать массив
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.filter((number) => number >= 5);
console.log(result);
//03. создать массив строк и проверить есть ли в массиве определенная строка
const animals = ["кот", "собака", "птица", "рыба", "хомяк", "черепаха"];
const hasCat = animals.includes("кот");
console.log(hasCat);
//04.написать функцию с метедом reverse для двух вышеуказанных массивов
const reverseArray = (array) => {
  array.reverse();
};
reverseArray(numbers);
reverseArray(animals);
console.log(numbers);
console.log(animals);
//07. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const filteredComments = comments.filter((comment) =>
  comment.email.includes(".com"),
);
console.log(filteredComments);
//08 перебирать массив и изменить postId в зависимости от id
comments.forEach((comment) => {
  comment.postId = comment.id <= 5 ? 2 : 1;
});
console.log(comments);
//09. перебрать массив, чтобы объекты состояли только из айди и имени
const getIdAndName = comments.map((comment) => ({
  id: comment.id,
  name: comment.name,
}));
console.log(getIdAndName);
//10.Перебираем массив, добавляем объектам свойство isInvalid
const addIsInvalid = comments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180,
}));
console.log(addIsInvalid);
//11. метод reduce, используя его вывести массив почт, потом тоже самое с помощью метода map
const getEmailsReduce = comments.reduce(
  (result, comment) => [...result, comment.email],
  [],
);
const getEmailsMap = comments.map((comment) => comment.email);
console.log(getEmailsReduce);
console.log(getEmailsMap);

//12. использовать методы join() и toString()
console.log(getEmailsReduce.join(", "));
console.log(getEmailsMap.toString());
