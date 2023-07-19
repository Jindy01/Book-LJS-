// let user = {};

// Object.defineProperties(user, {
//     name: {value: 'Kall', writable: false,},
//     surname: {value: 'Kettly', writable: false,}
// });

// console.log(user);

// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

// console.log(clone);



// let user = {
//     name: 'Artem',
//     toString() {
//         return this.name;
//     }
// };

// Object.defineProperty(user, 'toString', {
//     enumerable:false,
// });

// for(let key in user) console.log(key);



// let user = {};

// Object.defineProperty(user, 'name', {
//     value: 'Doll',
//     enumerable: true,
//     configurable: true,
// });

// console.log(user.name);



// let user = {
//     name: 'Kall'
// }

// Object.defineProperty(user, 'name', {
//     writable: false,
// });
// user.name = 'Pet';



// let user = {};

// Object.defineProperty(user, 'name', {
//     value: 'Koll',
// });

// let discriptor = Object.getOwnPropertyDescriptor(user, 'name')

// console.log(JSON.stringify(discriptor, null, 2));



// let user = {
//     name: 'Jonn',
// };

// let discriptor = Object.getOwnPropertyDescriptor(user, 'name');

// console.log((JSON.stringify(discriptor, null, 2) ) );

// {
//     "value": "Jonn",
//     "writable": true, – если true, свойство можно изменить, иначе оно только для чтения.
//     "enumerable": true, – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
//     "configurable": true - eсли true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
//   }