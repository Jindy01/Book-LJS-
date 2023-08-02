// Return in the next day


'use strict';
let userNoAsk = {
    name: 'Вася',
    _pass: '****',
};

userNoAsk = new Proxy(userNoAsk, {

    get(target, prop) {
        if(prop.startsWith('_')) {
            throw new Error('Error validation');
        } else {
            let value = target[prop];
            return (typeof value === 'function') ? value.bind(target) : value;
        }
    },

    set(target, prop, value) {
        if(prop.startsWith('_')) {
            throw new Error('Error validation');
        } else {
            target[prop] = value;
            return true;
        }
    },

    defineProperty(target, prop) {
        if(prop.startsWith('_')) {
            throw new Error('Error validation');
        } else {
            delete target[prop];
            return true;
        }
    },

    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
});

try {
  alert(userNoAsk._password); // Error: Отказано в доступе
} catch(e) { alert(e.message); }

// "set" не позволяет записать _password
try {
    userNoAsk._password = "test"; // Error: Отказано в доступе
} catch(e) { alert(e.message); }

// "deleteProperty" не позволяет удалить _password
try {
  delete userNoAsk._password; // Error: Отказано в доступе
} catch(e) { alert(e.message); }

// "ownKeys" исключает _password из списка видимых для итерации свойств
for(let key in userNoAsk) alert(key); // name




let userTest = {};

userTest = new Proxy(userTest, {
    ownKeys(target) {
        return ['a', 'b', 'c'];
    },

    getOwnPropertyDescriptor(target, prop) {
        return {
            enumerable: true,
            configurable: true,
        };
    }
});

console.log(Object.keys(userTest));


let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
    
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return 0;
        }
    }
});
console.log(numbers[1]);


let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adios',
}

dictionary = new Proxy(dictionary, {
    get(target, phrase) {
        if (phrase in target) {
            return target[phrase];
        } else {
            return phrase;
        }
    }
});


let numbersArr = [];

numbersArr = new Proxy(numbersArr, {
    set(target, prop, val) {
        if (typeof val == 'number') {
            target[prop] = val;
            return true;
        } else {
            return false;
        }
    }
});

numbersArr.push(1);
numbersArr.push(2);
console.log(numbersArr);


let user = {
    name: 'ART',
    age: '19',
    _password: '****'
};

user = new Proxy(user, {
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'))
    }
});

for(let key in user) console.log(key);


let target = {};
let proxy = new Proxy(target, {});

proxy.test = 5;

console.log(target.test);
console.log(proxy.test);

for(let key in proxy) {
    console.log(key);
}


