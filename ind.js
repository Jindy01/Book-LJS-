'use strict';

let gits = prompt('Диапазон 1');

for(let i = 0; i <= gits; ++i) {
    if (gits > 1000) {
       return alert('Это много');   //  Исправить  // 
    } else {
        console.log(i);
    }
}



// let arg = (qw,yes,no) => {
//     if (confirm(qw)) {
//         yes();
//     } else {
//         no();
//     }
// }

// arg('Вы согласны?', 
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