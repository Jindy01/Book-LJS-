'use strict';

class Archer {} 

let arch = new Archer();
console.log(arch instanceof Archer);

function Rabbit() {}
console.log(new Rabbit() instanceof Rabbit);


class Animal {
    static [Symbol.hasInstance] (obj) {
        if (obj.canEat) return true;
    }
}

let obj = { canEat: false, };
console.log(obj instanceof Animal);