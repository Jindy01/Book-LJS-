'use strict';

class Error {
    constructor(massege) {
        this.massege = massege;
        this.name = `Error`;
    }
}

class MyError extends Error {
    constructor(massege) {
        super(massege);
        this.name = this.constructor.name;
    }
}

class ValidationError extends MyError { }

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super(`Нет свойства:` + property);
        this.property = property;
    }
}

console.log(new PropertyRequiredError('field').name);

function readUser(json) {
    let user = JSON.parse(json);

    if(!user.age) {
        throw new PropertyRequiredError(`Нет поля: age`);
    }
    if(!user.name) {
        throw new PropertyRequiredError(`Нет поля: name`);
    }
    return user;
}

try {
    let user = readUser(`{"age": 25}`);
} catch(err) {
    if (err instanceof ValidationError) {
        console.log(`Некоректные данные: ` + err.message);
        console.log(err.name);
        console.log(err.property);
    } else if (err instanceof SyntaxError) {
        console.log(`JSON Ошибка синтаксиса: `+ err.massege );
    } else {
        throw err;
    }
}
        










// function test() {
//     throw new ValidationError('Ops!');
// }

// try {
//     test();
// } catch(err) {
//     console.log(err.massege);
//     console.log(err.name);
//     console.log(err.stack);
// }