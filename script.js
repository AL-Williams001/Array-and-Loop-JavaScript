// to creat an a array we need toe array_name = [Item1, itme2, ....]; check example below
const cars = ["Saab", "Volvo", "Honda", "BMW", "Toyota"];

// index => position of items insied an array
console.log(cars[4]);

const fruits = ["Banana", "Ornge", "Apple", "Mango"];

//join method => combines all fruits in an array
console.log(fruits.join(" - "));

// pop method => removes the last item/element in an array
fruits.pop();
console.log(fruits);

//Push method => adds a new item/element  at the end of an array
fruits.push("Cantaloupe");
console.log(fruits);

// shift method => removes the first item/element in an array
fruits.shift();
console.log(fruits);

// unshift => adds a new item/element at the start of an array
fruits.unshift("Watermelon");
console.log(fruits);

// fixing a wrong spelling in a array
fruits[1] = "Orange";
console.log(fruits);

// lenght method => returns the lenght of an array
fruits.length;
console.log(fruits.length - 1);

// how to delete an item/element in the middle of an array
fruits.splice(1, 1);
console.log(fruits);

// slice method => cuts all items/elements until the end except for the values provided
const favoriteFruit = fruits.slice(1, 4);
console.log(fruits);

//How to combine array using the "concat" method
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobia", "Linus"];
const arr3 = ["Robin", "Morgan"];

const myChildren = arr2.concat(arr3);
console.log(myChildren);

//How to flatten an array
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(myArr.flat());

// How to loop an array
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for (let i = 0; i <= cats.length - 1; i++) {
//   console.log(cats[i]);
// }

// for (const cat of cats) {
//   console.log(cat);
// }

// cats.forEach((cat) => {
//   console.log(cat);
//  });

// Map method and making them uppercase
// const catsToUpperCase = cats.map((cat) => cat.toUpperCase());
// console.log(catsToUpperCase);

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
