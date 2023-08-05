//          ProxyTasks          //

// let handlers = Symbol('handlers');

// function makeObservable(target) {
//     target[handlers] = [];

//     target.observe = function(handler) {
//         this[handlers].push(handler);
//     }

//     return new Proxy(target, {

//         set(target, property, value, receiver) {
//             let succes = Reflect.set(...arguments);
//             if (succes) {
//                 target[handlers].forEach(handler => handler(property, value));
//             }
//             return succes;
//         }
//     })
// }

// let user = {};
// user = makeObservable(user);

// user.observe((key, value) => {
//     console.log(`set ${key}: ${value}`);
// });

// user.name = 'Koll'
// console.log(user);


// let arr = [1, 2, 3];

// arr = new Proxy(arr, {

//     get(arr, prop, receiver) {
//         if (prop < 0) 
//             return arr[arr.length + +prop];
//         return Reflect.get(arr, prop, receiver);
//     }
// });

// console.log(arr[-1])
// console.log(arr[-2])


// let user = {
//     name: 'Jon',
// };

// function wrap(target) {
//     return new Proxy(target, {
        
//         get(target, prop, receiver) {
//             if (prop in target) {
//                 return Reflect.get(target, prop, receiver);
//             } else {
//                 throw new ReferenceError(`Нет свойства ${prop}`);
//             } 
//             // console.log(target);
//             // console.log(prop);
//         }
//     });
// }

// user = wrap(user);

// console.log(user.name);
// console.log(user.age);



// let userNoAsk = {
//     name: 'Вася',
//     _pass: '****',
// };

// userNoAsk = new Proxy(userNoAsk, {

//     get(target, prop) {
//         if(prop.startsWith('_')) {
//             throw new Error('Error validation');
//         } else {
//             let value = target[prop];
//             return (typeof value === 'function') ? value.bind(target) : value;
//         }
//     },

//     set(target, prop, value) {
//         if(prop.startsWith('_')) {
//             throw new Error('Error validation');
//         } else {
//             target[prop] = value;
//             return true;
//         }
//     },

//     defineProperty(target, prop) {
//         if(prop.startsWith('_')) {
//             throw new Error('Error validation');
//         } else {
//             delete target[prop];
//             return true;
//         }
//     },

//     ownKeys(target) {
//         return Object.keys(target).filter(key => !key.startsWith('_'));
//     }
// });

// try {
//   alert(userNoAsk._password); // Error: Отказано в доступе
// } catch(e) { alert(e.message); }

// // "set" не позволяет записать _password
// try {
//     userNoAsk._password = "test"; // Error: Отказано в доступе
// } catch(e) { alert(e.message); }

// // "deleteProperty" не позволяет удалить _password
// try {
//   delete userNoAsk._password; // Error: Отказано в доступе
// } catch(e) { alert(e.message); }

// // "ownKeys" исключает _password из списка видимых для итерации свойств
// for(let key in userNoAsk) alert(key); // name


// let range = {
//     start: 1,
//     end: 10,
// };

// range = new Proxy(range, {
//     has(target, prop) {
//         return prop => target.start && prop <= target.end;
//     }
// });

// console.log(5 in range);


// // function delay(f, ms) {
// //     return new Proxy(f, {
// //         apply(target, thisArg, args) {
// //             setTimeout(() => target.apply(thisArg, args), ms);
// //         }
// //     });
// // }

// // function say(us) {
// //     console.log(`hi, ${us}`);
// // }

// // say = delay(say, 1000);

// // console.log(say.length);
// // say('dIma')

// let userReflect = {};

// Reflect.set(userReflect, 'name', 'Вася');
// console.log(userReflect);


// let userTest = {};

// userTest = new Proxy(userTest, {
//     ownKeys(target) {
//         return ['a', 'b', 'c'];
//     },

//     getOwnPropertyDescriptor(target, prop) {
//         return {
//             enumerable: true,
//             configurable: true,
//         };
//     }
// });

// console.log(Object.keys(userTest));


// let numbers = [0, 1, 2];

// numbers = new Proxy(numbers, {
    
//     get(target, prop) {
//         if (prop in target) {
//             return target[prop];
//         } else {
//             return 0;
//         }
//     }
// });
// console.log(numbers[1]);


// let dictionary = {
//     'Hello': 'Hola',
//     'Bye': 'Adios',
// }

// dictionary = new Proxy(dictionary, {
//     get(target, phrase) {
//         if (phrase in target) {
//             return target[phrase];
//         } else {
//             return phrase;
//         }
//     }
// });


// let numbersArr = [];

// numbersArr = new Proxy(numbersArr, {
//     set(target, prop, val) {
//         if (typeof val == 'number') {
//             target[prop] = val;
//             return true;
//         } else {
//             return false;
//         }
//     }
// });

// numbersArr.push(1);
// numbersArr.push(2);
// console.log(numbersArr);


// let user = {
//     name: 'ART',
//     age: '19',
//     _password: '****'
// };

// user = new Proxy(user, {
//     ownKeys(target) {
//         return Object.keys(target).filter(key => !key.startsWith('_'))
//     }
// });

// for(let key in user) console.log(key);


// let target = {};
// let proxy = new Proxy(target, {});

// proxy.test = 5;

// console.log(target.test);
// console.log(proxy.test);

// for(let key in proxy) {
//     console.log(key);
// }



// let userVasa = {
//     name: 'Вася',

// };

// userVasa = new Proxy(userVasa, {

//     get(target, prop, receiver) {
//         console.log(`GeT ${prop}`);
//         return Reflect.get(target, prop, receiver);
//     },

//     set(target, prop, val, receiver) {
//         console.log(`SeT ${prop}: ${val}`);
//         return Reflect.set(target, prop, val, receiver);
//     },
// });

// let name = userVasa.name;
// userVasa.name = 'Peta';

// console.log(userVasa);


// let testName = {
//     _name: 'User',
//     get name() {
//         return this._name;
//     },
// };

// let userProxy = new Proxy(testName, {

//     get(target, prop, receiver) {
//         console.log(target[prop]);
//         return Reflect.get(target, prop, receiver);
//     },
// });

// let admin = {
//     __proto__: userProxy,
//     _name: 'Admin',
// };

// console.log(admin.name);


// let map = new Map();

// let proxyMap = new Proxy(map, {

//     get(target, prop, receiver) {
//         let value = Reflect.get(target, prop, receiver);
//         return typeof value == 'function' ? value.bind(target) : value;
//     }
// });

// proxyMap.set('test', 1);
// console.log(proxyMap.get('test'));



// class User {
//     #name = 'User';

//     getName() {
//         return this.#name;
//     }
// }

// let user = new User();
// console.log(user);

// user = new Proxy(user, {

//     get(target, prop, receiver) {
//         let value = Reflect.get(...arguments);
//         return typeof value == 'function' ? value.bind(target) : value;
//     }
// });

// console.log(user.getName);


// let allUsers = new Set();

// class User {
//     constructor(name) {
//         this.name = name;
//         allUsers.add(this);
//     }
// }

// let user = new User('Dim');
// console.log(allUsers.has(user));

// user = new Proxy(user, {});

// console.log(allUsers.has(user));



// let revokes = new WeakMap();

// let obj = {
//     data: 'BigData',
// };

// let { proxy, revoke } = Proxy.revocable(obj, {});

// revokes.set(proxy, revoke);

// revoke = revokes.get(proxy);
// revoke();

// console.log(proxy.data);