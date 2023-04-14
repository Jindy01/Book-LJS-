'use strict';

// alert (1.35.toFixed(1));
alert(Math.ceil(6.35));



// let x = +prompt('', 0);
// let z = +prompt('', 0);

// alert(x + z);



// let x = 0;

// for (;x == Number(x);) {
//     x += +prompt('Число');
//     if (!isFinite(x)) {
//         break;
//     } 

//     console.log(x);
// }



// let x = 2.331;

// console.log(typeof (x.toFixed(2)));

// console.log(9999999999999999);



// let num = 2.5;

// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.trunc(num));
// console.log(Math.floor(num));



// let num = 2.2312421234;

// console.log(num.toFixed(1));



// let x = {
//     name: 'Foya',
//     say: function () {
//         alert(`Привет ${x.name}`);
//     },
// };

// x.say();



// let sum = 0;

// while(true) {
//     let a = 0;

//     a = +prompt('Число');

//     if (!a)  break;
//     sum += a;
// }

// console.log(sum);



// let x = 0;

// for (;x == Number(x);) {
//     x += +prompt('Ещё');
//     if (x == NaN) {
//         break;
//     }

//     console.log(x);
// }



// let test = {
//     name: 'Hoo',
//     number: 421,

//     toString () {
//         return this.name;
//     },

//     valueOf () {
//         return this.number;
//     }
    
// };

// console.log(test);
// console.log(test + 500);
// console.log(+test);



// let user = {
//     name: 'Jony',
//     money: 700,

// toString() {
//     return `{name: "${this.name}"}`;
// },

//     valueOf() {
//         return this.money;
//     }
// };  

// alert(user);
// alert(+user);
// alert(user + 500);



// let id = Symbol('id')

// let user = {
//     name: 'Joy',
//     [id]: 25
// }

// alert(user);
// alert(id.valueOf() === id );



// let user = {
//     name: 'Jove',
//     money: 800 ,

//     [Symbol.toPrimitive](hint) {
//         alert(`hint: ${hint}`);
//         return (hint == 'string') ? `{name: "${this.name}" }` : this.money;
//     }
// };

// alert(user);
// alert(+user);
// alert(user + 500);
 


// let ids = Symbol('ids');

// let user = {
//     name: 'Foo',
//     country: 'Gomel',
//     [ids]: 8241952,
// };

// function niceChek(value) {
//     for (let key in value) {
//         console.log(value[key]);
//     }
// }

// niceChek(user);



// let sum = Symbol.for('id');
// let sim = Symbol('id')

// function chekSymbol (value) {
//     let check =  (Symbol.keyFor(value));

//     {
//         if (check == undefined) {
//             alert(`Symbol не глобальный`);
//         } else {
//             alert(`Symbol глобальный`);
//         }
//     }
// }

// chekSymbol(sim);
// console.log(sim);



// let sumb = Symbol.for('id');
// let sum = Symbol.for('ip');
// let mus = Symbol.for('ip');
// alert(sum == mus);



// let user = {
//     name: 'Foba',
// };

// let id = Symbol.for('id');
// user[id] = 1;

// let ids = Symbol.for('id');

// console.log(id);
// console.log(ids);
// console.log(id === ids);



//.?        ОПЦИОНАЛЬНАЯ ЦЕПОЧКА        //

// let key = 'name';

// let user = {
//     name: 'Nony',
//     data: {
//         contry: 'Gomel',
//         state: 'Belarus',
//     }
// };

// console.log(user);

// let clone = Object.assign({}, user);
// console.log(clone);



// function Accumulator(startingValue) {

//     this.value = startingValue;

//     this.read = function() {
//         this.value += +prompt('Number?', 0);
//     }
// }

// let accumulator = new Accumulator(4);

// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);



//----------------------------------------------------------------------------------------------------------------------------------------------------------//
// function Calculator() {

//     this.read = function() {

//         let numOne = prompt('FirstNumber?', 0);
//         this.numOne = numOne;
        
//         let numTwo = prompt('SecondNumber?', 0);
//         this.numTwo = numTwo;
//     };

//     this.sum = function() {
//         return this.sum = +this.numOne + +this.numTwo;
//     };

//     this.mul = function() {
//         return this.mul = this.numOne * this.numTwo;
//     };
// }


// let calculator = new Calculator();
// calculator.read();

// alert( "Sum = " + calculator.sum() );
// alert( "Mul = " + calculator.mul() );
//----------------------------------------------------------------------------------------------------------------------------------------------------------//



// function User(name) {
//   this.name = name;
  
//     this.sayHi = function() {
//       alert( "Меня зовут: " + name );
//     };
//   }
  
//   let john = new User("John");
  
// john.sayHi();
// console.log(john);



// let newObj = {};

// function Box(name, age) {
//     this.name = name;
//     this.age = age;
//     return newObj;
// }

// function Alert(names, ages) {
//     this.names = names;
//     this.ages = ages;
//     return newObj;
// }

// newObj = new Alert('joo', 43);
// newObj = new Box('Mio', 28);

// console.log(newObj);
// console.log(new Box() == new Alert());



// function User (name) {
//     if (!new.target) {
//         return  new User(name);
//     }
//     this.name = name;
// }

// let jo_jo = User('Jo Jo');

// console.log(jo_jo);



// let user = new function() {
//     this.name = 'Keti';
//     this.adm = false;
// };

// console.log(user);



// function Box (name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new Box('Jack');
// let newUser = new Box('Jona');

// console.log(user, newUser);



// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//     return this;
//   }
// };

// ladder.up().up().up().up().up().up().up().down().showStep().down().showStep();



//----------------------------------------------------------------------------------------------------------------------------------------------------------//
// let numberOne = prompt('Первое число');
// let numberTwo = prompt('Второе число');
// let sum = 0;
// let mul = 0;

// let calculator = {

//   read() {  
//     if (numberOne == Number(numberOne)) {
//       this.numberOne = numberOne;
//     } else {
//         return alert('Неверный тип данных #1');
//     }

//     if (numberTwo == Number(numberTwo)) {
//       this.numberTwo = numberTwo;
//     } else {
//         alert('Неверный тип данных #2');
//     }
//   },

//   sum() {
//     sum = +numberOne + +numberTwo;    
//     console.log(`${sum} сумма`);
//     return sum;
//   },

//   mul() {
//     mul = numberOne * numberTwo;    
//     console.log(`${mul} перемноженное`);
//     return mul;
//   },
// };

// calculator.read();
// alert( calculator.sum() + ' сумма' );
// alert( calculator.mul() + ' перемноженное');
//----------------------------------------------------------------------------------------------------------------------------------------------------------//



// let numberOne = prompt('Первое число');
// let numberTwo = prompt('Второе число');
// let sum = 0;
// let mul = 0;
// let storage = {};

// let calculator = {

//   read() {  
//     if (numberOne == Number(numberOne)) {
//       storage.numberOne = numberOne;
//     } else {
//         return alert('Неверный тип данных #1');
//     }

//     if (numberTwo == Number(numberTwo)) {
//       storage.numberTwo = numberTwo;
//     } else {
//         alert('Неверный тип данных #2');
//     }
//   },

//   sum() {
//     sum = +numberOne + +numberTwo;    
//     console.log(`${sum} сумма`);
//   },

//   mul() {
//     mul = +numberOne * +numberTwo;    
//     console.log(`${mul} перемноженное`);
//   }
// };

// calculator.read();
// alert( storage.sum() );
// alert( storage.mul() );




// if (numberOne != Number(numberOne)) {
//   alert('123');
// }



// let user = {
//   name: 'Kofe',
//   say () { return this }
// };

// alert(user.say().name);



// function makeUser() {
//   return {
//     name: "John",
//     ref () { return this } 
//   }; 
// }

// let user = makeUser();

// alert( user.ref().name );
// console.log(user);



//----------------------------------------------------------------------------------------------------------------------------------------------------------//
// let user = {};

// function getInformation() {

//     let name = prompt('Имя?'); 
//     if (name == null) {
//         user.name = 'Не введено';
//     } else {
//         user.name = name;
//     }

//     let surname = prompt('Фамилия?');
//     if (surname == null) {
//         user.surname = 'Не введено';
//     } else {
//         user.surname = surname;
//     }         

//     let age = prompt('Возраст?');
//     if (age == null) {
//         user.age = 'Не введено';
//     } else {
//         user.age = age;
//     }  

//     let work = prompt('Работа?');
//     if (work == null) {
//         user.work = 'Не введено';
//     } else {
//         user.work = work;
//     }  
// }

// getInformation();
// console.log(user);
//----------------------------------------------------------------------------------------------------------------------------------------------------------//



// name = prompt('Как вас зовут ?')
// let x = (name) => {
//     if (name == null) {
//         alert('А имя?');
//     } else {
//         alert(`${name} привет!`);
//     }
// };

// x(name);



// let arry = { user: 'Homa', getArry:

//     function() {
//         alert(`${this.user} Привет!`);
//     } 
// }

// arry.getArry();



// let user = { name: 'Jo' };
// let adm  = { name: 'ADM'};

// function sayHi() {
//     alert( this.name );
// }

// user.f = sayHi;
// adm.f = sayHi;

// user.f();
// adm.f();
// adm['f']();



// let user = {
//     name: 'Jony',
//     age: 20,
//     seyHi() {
//         alert(this.name);
//     }

// };  

// user.seyHi();
// console.log(user);



//      ДОИЗУЧАТЬ И ПОНЯТЬ АЛГОРИТМ     //
// function marry(man, woman) {
//     woman.husbend = man;
//     man.wife = woman;

//     return {
//         father: man,
//         mother: woman,
//     }
// }

// let family = marry({
//     name: 'Jon' 
// }, {
//     name: 'Joya' 
// });

// console.log(family);
//      ДОИЗУЧАТЬ И ПОНЯТЬ АЛГОРИТМ     //



// let arry = [
//     2,3,4,5,1,2,7,5,4,3,8,13,21,34,21,16,10
// ];

// let box = 0;

// for (let key in arry) {
//     box = arry[key];
//     if (box % 2 == 0) {
//         alert(`${box} чётное`);
//     } else if (box % 2 == 1) {
//         alert(`${box} нечётное`);
//     }



// let user = {
//     name: 'Artem',
//     data: {
//         height: 178,
//         mass: 67,
//     }
// };

// let clone = Object.assign({}, user);

// console.log(clone);
// user.name = 'Pate';
// console.log(user);



// let newUser = { name: 'Poo', age: 18, };
// let clone = Object.assign({}, newUser);

// console.log(clone);



// let user = {
//     name: 'Jony',
// };

// let copy  = { canViev: true , canClone: false };
// let clone = { canEgit: true };

// Object.assign(user, copy, clone);
// console.log(user);



// let obj = {
//     z: 45,
//     x: 35,
//     c: 85,
// };
// let clone = {};

// for(let key in obj) {
//     clone[key] = obj[key];
// }

// console.log(clone);
// console.log(obj);



//----------------------------------------------------------------------------------------------------------------------------------------------------------//
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
//     kross: 700,
//     forts: 250,
// };

// console.log(menu);

// let number = 0;

// function multiplyNumeric(obj) {
//             //      Пусть не пугает непонятное количесво "number"       //
//     for (let key in menu) {
//         number = menu[key];
            
//         if (number === Number(number)) {
//             number = number * 2;
//             menu[key] = number;
//                  // alert('Число');
//         } else {
//             continue;
//                   // alert('Строка');
//         }
//     }

// }

// multiplyNumeric(menu);

// console.log(menu);
//----------------------------------------------------------------------------------------------------------------------------------------------------------//



// let obj = {
//     num1: 10,
//     num2: 20,
//     num3: 30,
//     num4: 40
//   };

//   // Заполним массив числами из объекта
// for (let key in obj) {
//     numArr.push(obj[key]);
// }

// for (let i = 0; i < numArr.length; i++) {
//    sum += numArr[i];
//   console.log(sum + ' Сумма');
// }



//----------------------------------------------------------------------------------------------------------------------------------------------------------//
// let sumMoney = {
//     Joon: 100,
//     Himo: 160,
//     Tomi: 90,
//     Tiur: 300,
//     Toss: 110,
// }
// let sum = 0;

// for (let cont in sumMoney) {
//     sum += sumMoney[cont];
// }

// alert(sum);
//----------------------------------------------------------------------------------------------------------------------------------------------------------//



// let obj = {
//     num1: 40 ,
//     num2: 70 ,
//     num3: 20 ,
//     num4: 30 ,
//     num5: 90 ,
// };

// let sum = 0;

// for (let key in obj) {
//     sum += (obj[key]);
// }

// alert(sum);



// let schebule = {};

// function isEmpty(obj) {
//     for (let key in obj) {
//         // если тело цикла начнет выполняться - значит в объекте есть свойства
//         return false;
//       }
//       return true;

//     // console.log(`${'age' in obj} + '1-я'`);
//     // console.log(`${obj.age === undefined} + '2-я консоль' `);
    
// //     if (obj > 0) return true;
// // } else if (obj < 0) {
// //     return false;
// }

// isEmpty(schebule);

// schebule.age = 30;

// isEmpty(schebule);



// let txt = {
//     names: 'fog',
//     age: 213,
// }

// for (let key in txt) {
//     alert(txt[key]);
// }

// let box = {};
// box.name = 'John';
// box.surname = 'Smith';
// box.name = 'Pete';
// delete box.name;

// console.log(box);



// let user = {
//     name: 'artem',
//     age: 19,
//     likeTea: true,
// };

// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// function user (name, age) {
//     return {
//         name,
//         age,
//     };
// }

// user('Moea', 30);



// let user = prompt('Ваше имя?');
// let pass;
// let bag = {};

// if (user == 'артём') {
//     pass = prompt('Пароль?');  
// } else if (user != 'артём') {
//     alert('Вы не сотрудник!');
// };

// if (user == 'артём') {
//     bag.user = 'артём';
// };

// if (pass == 5682) {
//     bag.pass = true;
// } else if (pass != 5682) {
//     bag.pass = false;
// };

// console.log(bag);



// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }

// let user = makeUser('Artem', 19);

// console.log(user);
// console.log(user.name + ' это база');



// let fruit = 'aplle';
// let bag = {
//     [fruit + 'Comp']: 5 ,
// };

// console.log(bag);

// let fruits = prompt('Любимый фрукт?');

// let box = {
//     [fruits]: true,
// }

// console.log(box);


//      Объекты     //
// let names = prompt('Имя?','Name');
// let key = 'https';
// let user = {
//     name:'Тёма',
//     age:18 ,
//     'likes Birds': true,
// };


// user.isADM = true;
// delete user.age;

// user['Likes Boom!'] = true;
// user['meth'] = 24;
// user[key] = 18;
// user[names] = true;

// console.log(user);



// function searchMinNumber (x) {
//     new arguments = c;
//     x = Number();
//     console.log(Number(arguments.array));
// }
  
// searchMinNumber(9,2,3,7);



// function getMinNumber(number) {
//     for (let i = 0; i < arguments.length; i++) {
//         let  x = arguments.length;
//         console.log([x]);
//     }
//     console.log(number);
// }

// getMinNumber(1,2,3,4,5,6,7,8,9,0);



// function nn () {
//     let x = prompt('Числа!');
//     let z = prompt('Числа!');

//     if (x < z) {
//         alert(`${z} самое большое`);
//     } else if (x > z) {
//         alert(`${x} самое большое`);
//     }
// }

// nn();



// let x = getNum(); ---- Разработка !

// function getNum() {
//     let minNumber = prompt('Введите числа');
//     for (let i = 5; i > arguments.length; ++i) {
        
//     }
//     return minNumber;
// }

// if ()

// console.log(x);




// for(; length.x < 5; ++x) {
//     alert('Ещё')
// }
    



//      Доделать концепцию      //

// function getMinNumber(number) {
//     for (let i = 0; i < arguments.length; i++) {
//         let  x = arguments.length;
//         console.log(x);
//     }
//     console.log(number);
// }

// getMinNumber(1,2,3,4,5,6,7,8,9,0);


// function checkNum() {
//     let x = minNum();
//     x = Math.min(x);
//     console.log(x);
// }

// checkNum(1,2,3,4,5,6);

//!



// function showPrimes(n) {
//     for (let i = 2; i < n; ++i) {
//         if (isPrime(i)) continue;
//         alert(i);
//     }
// }

// function isPrime(n) {
//     for (let i = 2; i < n; ++i) {
//         if (n % i == 0) return true;
//     }
//     return false;
// }

// showPrimes(19);





// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//     }
//   return result;
// }

// let x = prompt("x?", ''),
//     n = prompt("n?", '');
 
//     if (n <= 0) {
//   alert (`Степень ${n} не поддерживается,
//    введите целую степень, большую 0`);
//     } else {
//   alert (pow (x, n) );
// }

// ////////////////////////////


// function pow(x, n) {
//     let result = 1;
  
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", "");
//   let n = prompt("n?", "");
  
//   if (n <= 0) {
//     alert(`Степень ${n} не поддерживается,
//       введите целую степень, большую 0`);
//   } else {
//     alert( pow(x, n) );
//   }



// let gits = prompt('Диапазон 1');

// if (gits > 1000) {
//     alert('Это много!')
// } else {
//     (gits < 1000) ; {
//         for (let i = 0; i <= gits; ++i) {
//             console.log(i);
//         }
//     }
// }




// for (let i = 0; i <= gits; ++i) {
//     if (gits > 1000) { return ;   //  Исправить  // 
//     } else {
//         console.log(i);
//     }
// }




// let arg = (qw,yes,no) => {
//     if (confirm(qw)) {
//         yes();
//     } else {
//         no();
//     }
// }

// arg ('Вы согласны?', 
// function() {alert('Вы согласились')} ,
// function() {alert('Вы отказались')} );




// let x = (a, b) => (a + b);

// console.log(x(2, 6));



//   Срелочные функции доизучать и понять основное устройство , и их работу  //



// let git = (a, b) => a + b;

// git(7,2);

// console.log(git);



// givQw();

// function givQw() {
//     let x = prompt('Возраст ?');
//     if (x >= 18) {
//         alert('Добро пожаловать!');
//     } else if (x < 18) {
//         alert('Вам ещё нельзя сюда!');
//     }
// }

// function getLvl();



// function minNum(nunu) {
//     for (let i = 0; i < arguments; i++) {
//         i = arguments;
//         console.log(i);
//         console.log(Math.min(i));
//     }
// }


// minNum(1,2,3,4,5,6,7,8,9);

// function checkNum() {
//     let x = minNum();
//     x = Math.min(x);
//     console.log(x);
// }

// checkNum(1,2,3,4,5,6);




    //  Function 'CallBack'     //
// function ask (qw, yes, no) {
//     if (confirm(qw)) {
//         yes();
//     } else {
//         no();
//     }
// }

// ask('Согласны?',
//     function() {alert('Вы согласились'); },
//     function() {alert('Вы отказались'); }
// )



// function coppy() {
//     alert('Привет!');
// }

// let geting = coppy;
// geting();


// let getNum = prompt('Введите число');
// let getNumTwo = prompt('Введите степень');

// function getDegree() {
//     let degree = getNum ** getNumTwo; 
//     if (degree > 0) {
//         return degree;
//     }
// }



// alert(getDegree());

// function min(a,b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// alert(min(5, 8));


// function minX(q, w, e, r, t, y, u, i) {
//     let x = Math.min(q, w, e, r, t, y, u, i );
//     console.log(x);
// }

// minX(1,2,0,4,5,6,7,8,0);

// function minNum(z) {
//     let x = Object.values(z);
//     return Math.min.apply(null, x);
// }

// let nin = (1,2,0,4,5,6,7,8,0);
// let nfn = minNum(nin);
// console.log(nfn);


//Изучить и доделать Фун. шёл 5 день ...


// function getMin() {
//     let x = Math.min(minX());
//     console.log(x);
// }

// getMin();



// Псевдо массив //
// function nin (x) {
//     let z = Math.min(arguments[x]);
//     console.log(z);
// }

// nin(1,2,3,4,5,6,7,8,0);

// function minx() {
//     let minValue = Math.min(arguments);
//     console.log(minValue);
// }

// minx(1,2,3,4,5,6,7,8,0);




//----------------------------------------------------------------------------------------------------------------------------------------------------------//
// function getMk (age) {
//     age = prompt('Данные?');
//     let check = (age >= 18) || confirm('Родители разрешили?') || alert('Нет доступа!');
//     alert(check);

// }

// getMk();




// function getCheck(age) {
//     age = prompt('Возраст?')
//     return (18 >= age) ? true : confirm('Родители разрешили?');
// }

// function getCheckMk(age) {
//     age = prompt('Возраст?')
//     return (age > 18) || confirm('Родители разрешили?');
// }

// getCheckMk();


// function getAge (age) {
//     age = prompt('Введите возраст');
//     // let check = (age >= 18) ? alert('Пользуйтесь') : confirm('Родители разрешили?');
//     let check = (age >= 18) ? alert('Пользуйтесь') : (age <= 18) ? confirm('Родители разрешили ?') :
//     alert(check);
// } 
// getAge();

//     let check = (age >= 18) ? alert('Пользуйтесь') ? (age <= 18) ? confirm('Родители разрешили ?') : (true)

//ПРОДОЛЖЕНИЕ РАБОТ С ФУНКЦИЯМИ И ПАРАМЕТРАМИ ТАК ЖЕ БОЛЕЕ ПОДРОБНЕЕ РАЗОБРАТЬ ВОЗВРАТ ЗНАЧЕНИЙ !!!
// Доделать и понять 'значение параметров' , 'возврат значений' ,!!!
//----------------------------------------------------------------------------------------------------------------------------------------------------------//




// function retur () {
//    return;
// }


// let age = prompt('Возраст');

// function checkAge(value) {
//     check = (age >= 18) ? true : (age < 18) ? retur() : retur();
// }


// function getAge(age) {
//     let check = (age >= 18) ? 'Взрослый' : retur() ;
//     alert(check);
// }   

// getAge();




// function voiid () {
    
// }

// let alerts = 'Ян'

// function mess (from, text = ' Нет значений') {
//     alert(from + text );
// }

// mess('Аня',' привет!');




// function z (age) {
//     if (age >= 18) {
//         return true;
//     } 
//         return confirm('Разрешение');
// }


// let age = prompt('Какой у вас возраст?');


// if (age == null || age == '') {
//         alert('Отказано!')
//     } else if (z (age)) {
//         alert('Проходите');
//     } else {
//         alert('Недоступно');
// }

// Доделать и понять 'значение параметров' , 'возврат значений' , 



// function num(n1, n2) {
//     return (n1 ** n2);
// }

// let res = num(2, 3);
// console.log(res);




// let y = 10;

// // function pushTo() {

// // let x = prompt('Значение больше 10');
// //     if (x > y) {
// //         alert('Функция сработала!')
// //     } else if (x == null || x == '') {
// //             alert('Нет значений!')
// //         } else {
// //             (x < y); {
// //                 alert('Попробуй значение больше 10')
// //             }                   
// //     }
// // }

// // let c = prompt('Значение от 0 до ...')

// // if (c < 10) {
// //     pushTo();
// // }




// function name (n, t) {
//     n = '*' + n + '*';
//     alert(n + ': ' + t);
// }

// let n = 'Аня';

// name (n, 'Првиет!');
// alert(n);




// function mesage (name, text) {
//     name = '*' + name + '*';
//     alert(name + ':' + text);
// }

// let name = 'Аня';

// mesage(name + 'Привет!');

// alert(name);




// let x = 1;

// function con () {
//     x = 2;
//     alert(x + ' Переменная в функции!');
// }

// alert(x + ' До обьявления!');

// con();

// alert(x + ' После обьявления!');




// let name = prompt('Ваше имя ?')

// function user () {
//     alert(name + ' Привет!');
// }

// if (name == null || name == '') {
//     alert('Нет имени!');
// } else {
//     (name == name); {
//         user();
//     }
// }



//----------------------------------------------------------------------------------------------------------------------------------------------------------//
// const n = +prompt('Введите число от 0 до 3', '');
// switch (n) {
//     case (0):
//         alert('Это 0');
//         break;
//     case (1):
//         alert('Это 1');
//         break;
//     case (2):
//     case (3):
//         alert('Это 2 или 3 ');
//         break;
//     default:
//         alert('Неверное число!')
// }
//----------------------------------------------------------------------------------------------------------------------------------------------------------//





//----------------------------------------------------------------------------------------------------------------------------------------------------------//
// let v = prompt('What browser are you using');

// if (v == 'enge') {
//     alert("You've got the enge!");
// } else if (v == 'opera' 
//     || v == 'firefox' 
//     || v == 'safari' 
//     || v == 'chrome') {
//     alert('Okay we support these browsers too'); 
// } else {
//     (v == null || ''); {
//         alert('Close!')
//     }
// }
//----------------------------------------------------------------------------------------------------------------------------------------------------------//




// let x = Math.random();
// let z = Math.random();
// z = Math.round() * (1 - 10);
// x = Math.round() * (1 - 10);
// console.log(z );


// switch (x < z) { 
//     case true:
//         alert('Правда!');
//         break;
//     case false:
//         alert('Лож!')
// }




//----------------------------------------------------------------------------------------------------------------------------------------------------------//
// let n = 100000;

// nextNumb:
// for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++)  { 
//     if (i % j == 0 ) continue nextNumb; 
//   }  
//   console.log( i );
// } 

// ----------------------------------------------------------------------------------------------------------------------------------------------------------//




// ----------------------------------------------------------------------------------------------------------------------------------------------------------//
// let x = 10000;

// for (let n = 11; n <= x; n++) {
//   if ( n % 2 == 0 ||  n % 3 == 0 ||  n % 5 == 0 ||  n % 7 == 0 ) continue;
//   console.log(n)
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------//




//----------------------------------------------------------------------------------------------------------------------------------------------------------//
// let x = prompt('Введите число больше 100');

// outer:
//  for (; x >= 0 && x <= 100 && x !== null && x !== '';) {
//         x = prompt('Введите верное значение'); {
//             for (; x >= 0 && x > 100;) break outer;
//     }
// }
// //----------------------------------------------------------------------------------------------------------------------------------------------------------//




// let x = 0;

// while(x <= 3) {
//     alert(`number ${x}`)
//     ++x;
// }




// let x = 2;

// for (x; x <= 10; x++) {
//     if (x % 2 == 1 ) continue;

//     alert(x);
// }





// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) continue;
//     alert(i);
// }



// let p = 4312;
// let i = prompt('Pass')

// for (; i != p ;) {
//     prompt('Pass')
// }




// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );

// }




// let z = 1;
// let x = null;
// let c = undefined;

// alert(c ?? x);




//----------------------------------------------------------------------------------------------------------------------------------------------------------//
// // SQL //
// let p;
// let l;
// let pass;
// let login;
// login = prompt('login');
// pass = prompt('Pass');
// l = 'A';
// p = 1;
// // SQL // 

// if (login === l && pass >= p && pass <= p) {
//     alert('Здраствуйте!');
// } else if (pass != p && pass != '' && pass != null) {        
//     alert('Неверный пароль!');
// } else if (login != l && login != '' && login != null) {
//     alert('Такого логина нету!');
// } else if (login == '' || login == null ) {   
//     alert('Не введён логин');
// } else if (pass == '' || pass == null) {     
//     alert('Не введён пароль');
// }
//----------------------------------------------------------------------------------------------------------------------------------------------------------//





// Не дописана структура проверки на нулевой логин и пароль // ('::')


// let x = -1 ;

// alert(Boolean(x));




// let age;
// age = prompt('Возраст?');

// if (age >= 14 && age <= 90) {
//     alert('Нужный возраст');
// } else {
//     (!(age >= 14 && age <= 90)) 
//     alert('Ненужный возраст');
// }




// alert( 1 && null && 2 );



// let x = 0;
// let z = 1;
// let c = 1;

// if (c >= z && z == c && c > 0) {
//     alert('Read!')
// }




// let currentUser = null;
// let defaultUser = "John";

// let name = "unnamed" || defaultUser || currentUser;

// alert(name);





// let login;
// login = prompt('Логин ?');  

// let =    result  =   (login == 'Сотрудник') ? 'Hello!':  
//         (login == 'Директор')  ? 'Hellos!':
//         (login == 'Начальник') ? 'Helloss!':
//         (login == 'Служащий')  ? 'Hellosss!':'Неверный логин!';
// alert(result);



// let result;

// let a = 2;
// let b = 1;

// let retro = (a + b < 4 ) ? 'Много' : 'Мало';
// console.log(retro)


//----------------------------------------------------------------------------------------------------------------------------------------------------------//
// let numb = prompt('Введите число');

// if (numb > 0 || numb <= 0) {
//     alert('Это число');     
// } else {
//         (numb == String()); {
//             alert('Это не число');
//         }
// }

// if (numb > 0 ) {
//     alert('Это значение больше нуля')
// }  else if (numb < 0 ) {
//         alert('Это значение меньше нуля')   
//     } else if (numb == 0) {
//             alert('Это нулевое значение ')
//         } else {
//                 (numb == String()); 
//                     alert('Введите число!');
// }
//----------------------------------------------------------------------------------------------------------------------------------------------------------//


// let text = prompt('Официальное название JS?');

// if (text == 'ECMAScript') {
//     alert('Да! Всё верно !')
//     } else { 
//     alert('Вы уверенны?')
// }



// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year < 2015) {
//   alert( 'Это слишком рано...' );
//     } else if (year > 2015) {
//   alert( 'Это поздновато' );
//     } else {
//   alert( 'Верно!' );
// }


// let x = null;
// let z = 0;

// alert(x === z);


// 5 > 4 //t
// "ананас" > "яблоко" // f
// "2" > "12" // t 
// undefined == null // t
// undefined === null // f 
// null == "\n0\n"  // f 
// null === +"\n0\n" // f 

// 5 > 4 → true
// "ананас" > "яблоко" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false


// console.log(0.1 + 0.2);
// let x = null;
// let z = undefined;

// alert(z === x);
// // why Folse ?



// let a = 0;
// alert( Boolean(a) ); // false

// let b = "0";
// alert( Boolean(b) ); // true

// alert(a == b); // true!

// let x = 0 ;
// let z = '0';

// console.log(Boolean(x));
// console.log(Boolean(z));
// console.log(x == z);


// "" + 1 + 0 //10 -
// "" - 1 + 0 //-1 +
// true + false //1 +
// 6 / "3" //2 +
// "2" * "3" //6 +
// 4 + 5 + "px"// 9px +
// "$" + 4 + 5 //$45 +
// "4" - 2 //2 +
// "4px" - 2 //NaN -
// "  -9  " + 5 //-9 5 -
// "  -9  " - 5 // -14 +
// null + 1 // 1 +
// undefined + 1 //   NaN -
// " \t \n" - 2 // -2 +


// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(Number(a) + Number(b)); // 12

// // const a = 1;
// let b = 2;
// let z = 3;

// let f = 3 - (b = a + 2);
// console.log(b)
// console.log(f)
// let z = 5;
// console.log(z)
// let z = (+'dfd');
// console.log(typeof z)


// let z = 2;

// z = String();
// console.log(typeof z);


// // alert('2'%'2');


// let x = NaN;
// console.log(Number(x));

// alert(Boolean(x));


// let non = NaN
// console.log(typeof non);
// alert( String('gg') );

// let njs = NaN;
// alert(typeof(njs));

// console.log('Conected!');

// let text = prompt('Напишите инициалы');

// alert (`${text} добро пожаловать !`)