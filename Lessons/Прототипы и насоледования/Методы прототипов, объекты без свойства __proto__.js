'use strict';

let animal = {
    eats: true,
};

let rabbit = Object.create(animal, {
    jumps: {
        value: true,
    }
});

let testObj = {
    animal: true,
    polution: {
        jump: true,
    },
};

let clone = Object.create(Object.getPrototypeOf(testObj), Object.getOwnPropertyDescriptor(testObj));

console.log(clone);

console.log(rabbit.jumps);
console.log(Object.getPrototypeOf(rabbit) === animal);
// Object.setPrototypeOf(rebbit, {});