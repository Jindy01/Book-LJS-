//      Правильный вариант задачи       //
// let dictionary = Object.create(null , {
//     toString: {
//         value() {
//             return Object.keys(this).join();
//         },
//         enumerable: true,
//     },
//     toName: {
//         value: {
//             value:'Lolla'
//         },
//         enumerable: true,
//     }
    
// });

//      Неправильный вариант (Мой)
// dictionary.toString(Object.keys().join(', ')) = 
// Object.defineProperty(
//     dictionary, 'toString', {
//     enumerable: false,
// });
//      //      //      //      //      //      //  

// dictionary.apple = 'Apple';
// dictionary.__proto__ = 'test';

// for(let key in dictionary) {
//     console.log(`Цикл: ${key}`);
// };

// alert(dictionary);



// let testUser = Object.create(null);

// let testUser = {
//     name: "jONN",
//     age: 18,
// };

// testUser.hello = 'Привет';

// console.log(Object.keys(testUser));



// let animal = {
//     eats: true,
// };

// let rabbit = Object.create(animal, {
//     jumps: {
//         value: true,
//     }
// });

// let testObj = {
//     animal: true,
//     polution: {
//         jump: true,
//     },
// };

// let clone = Object.create(Object.getPrototypeOf(testObj), Object.getOwnPropertyDescriptor(testObj));

// console.log(clone);

// console.log(rabbit.jumps);
// console.log(Object.getPrototypeOf(rabbit) === animal);
// Object.setPrototypeOf(rebbit, {});