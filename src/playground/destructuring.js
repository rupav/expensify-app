// Object Deconstructuring

// const person = {
//     name: 'Rupav Jain',
//     age: '20',
//     location: {
//         city: 'new Delhi',
//         temp: 40
//     }
// };

// const { name = 'Anonymous', age } = person;

// // console.log('${person.name} is ${person.age}.');

// const { city, temp: temperature } = person.location;
// console.log(`${name} is ${age}.`);
// console.log(`It's ${temperature} in ${city}. `);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self Published' } = book.publisher;

// console.log(publisherName);

// Array Deconstructuring

const address = ['A', 'B', 'C', 'D', 'E'];
const [A, B = 'New York', ...C] = address;
console.log(C);
console.log(`You are in ${A} ${B}. `);
