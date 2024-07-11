let a=[]; // empty array
let b= new Array() // empty array.

fruits = ['apple', 'banana'];
fruits.push('orange', 'pineapple'); 
console.log(fruits); // ['apple', 'banana', 'orange', 'pineapple']


fruits = ['apple', 'banana'];
fruits.push('orange'); 
console.log(fruits); // ['apple', 'banana', 'orange']


fruits = ['apple', 'banana', 'orange'];
let lastFruit = fruits.pop(); 
console.log(lastFruit); // 'orange'
console.log(fruits); // ['apple', 'banana']

fruits = ['apple', 'banana', 'orange'];
let firstFruit = fruits.shift(); 
console.log(firstFruit); // 'apple'
console.log(fruits); // ['banana', 'orange']


fruits = ['banana', 'orange'];
fruits.unshift('apple'); 
console.log(fruits); // ['apple', 'banana', 'orange']

fruits = ['apple', 'banana', 'orange', 'pineapple'];
let citrus = fruits.slice(1, 3); 
console.log(citrus); // ['banana', 'orange']

fruits = ['apple', 'banana', 'orange', 'pineapple'];
fruits.splice(2, 1, 'kiwi'); 
console.log(fruits);// ['apple', 'banana', 'kiwi', 'pineapple']

fruits = ['apple', 'banana', 'orange'];
fruits.forEach(fruit => console.log(fruit));
// Output:
// 'apple'
// 'banana'
// 'orange'

numbers = [1, 2, 3, 4];
let squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]

numbers = [1, 2, 3, 4, 5];
let even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10

fruits = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'orange']

fruits = ['apple', 'banana', 'orange'];
let fruitString = fruits.join(', ');
console.log(fruitString); // 'apple, banana, orange'