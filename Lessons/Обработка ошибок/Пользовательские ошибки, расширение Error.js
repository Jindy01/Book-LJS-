// class Error {
//     constructor(massege) {
//         this.massege = massege;
//         this.name = `Error`;
//     }
// }

// class MyError extends Error {
//     constructor(massege) {
//         super(massege);
//         this.name = this.constructor.name;
//     }
// }

// class ValidationError extends Error { }

// class PropertyRequiredError extends ValidationError {
//     constructor(property) {
//         super(`Нет свойства:` + property);
//         this.property = property;
//     }
// }

// class ReadError extends Error {
//     constructor(massege, cause) {
//         super(massege);
//         this.cause = cause;
//         this.name = 'ReadError';
//     }
// }

// function validateUser(user) {
//     if (!user.age) {
//         throw new PropertyRequiredError('age');
//     }

//     if(!user.name) {
//         throw new PropertyRequiredError('name');
//     }
// }
// // console.log(new PropertyRequiredError('field').name);

// validateUser({name: 'Jony', age: 14,});

// function readUser(json) {
//     let user;

// try {
//     user = JSON.parse(json);
// } catch(err) {
//     if (err instanceof SyntaxError) {
//         throw new ReadError('Синктаксическая ошибка', err);
//     } else {
//         throw err;
//     }
// }

// try {
//     validateUser(user)
// } catch(err) {
//     if (err instanceof ValidationError) {
//         throw new ReadError('Ошибка валидации', err); 
//     } else {
//         throw err;
//     }
// }

// try {
//     readUser(`{bad json}`);
// } catch(e) {
//     if (e instanceof ReadError) {
//         console.log(e);
//         console.log(`Исходная ошибка ` + e.cause);
//     } else {
//         throw e;
//     }
// }


// if(!user.age) {
//     throw new PropertyRequiredError(`Нет поля: age`);
// }
// if(!user.name) {
//     throw new PropertyRequiredError(`Нет поля: name`);
// }
//     return user;
// }

// class FormatError extends SyntaxError {
//     constructor(message, stack) {
//         super(stack);
//         this.message = message;
//         this.name = 'FormatError';
//     }
// }

// let err = new FormatError('Ошибка форматирования'); 

// console.log(err.message);
// console.log(err.name);
// console.log(err.stack);

// console.log(err instanceof SyntaxError);
// console.log(err instanceof FormatError);


// let json = {
//     name: 'Koll',
//     age: 15,
// }
// let userS = JSON.stringify(json);
// readUser(userS)



// try {
//     let user = readUser(`{"age": 25}`);
// } catch(err) {
//     if (err instanceof ValidationError) {
//         console.log(`Некоректные данные: ` + err.message);
//         console.log(err.name);
//         console.log(err.property);
//     } else if (err instanceof SyntaxError) {
//         console.log(`JSON Ошибка синтаксиса: `+ err.massege );
//     } else {
//         throw err;
//     }
// }
        


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