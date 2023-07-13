'use strict';

class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} бежит / скорость ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} стоит`);
    }
}

class Rabbit extends Animal {

    constructor(name, earLenght) {
        super(name);
        this.earLenght = earLenght;
    }

    hide() {
        console.log(`${this.name} прячется`);
    }

    stop() {
        this.hide();
        super.stop();
    }
}

let rabbit = new Rabbit('Кролик');
let wolf = new Animal('Белый Волк')
console.log(rabbit.name);

console.log(rabbit.run(5));
console.log(rabbit.stop());


// function newClass(phrase) {
//     return class {
//         sayHi() {
//             console.log(phrase);
//         };
//     }
// }

// class User extends newClass('Hello!') {}

// new User().sayHi();