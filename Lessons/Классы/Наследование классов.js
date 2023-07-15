'use strict';

function Reform() {

}


let animal = {
    name: 'Животное',
        eat() {
            console.log(`${this.name} кушает`);
        }
};

let rabbitObj = {
    __proto__: animal,
    name: 'Кролик',
    eat() {
        super.eat()
    }
};

let longEar = {
    __proto__: rabbitObj,
    name: 'Ушастик',
    eat() {
        super.eat();
    }
};

longEar.eat();



class Animal {
    showName() {
        // console.log('animal'); !!
    }

    constructor(name) {
        this.showName();
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

    showName() {
        // console.log('rabbit');
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

new Animal();
new Rabbit();



// function newClass(phrase) {
//     return class {
//         sayHi() {
//             console.log(phrase);
//         };
//     }
// }

// class User extends newClass('Hello!') {}

// new User().sayHi();