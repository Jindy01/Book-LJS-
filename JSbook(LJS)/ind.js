"use strict";

// SQL //
let p;
let l;
let pass;
let login;
login = prompt('login');
pass = prompt('Pass');
l = 'A';
p = 1;


if (login === l && pass >= p && pass <= p) {
    alert('Здраствуйте!')
} else if (pass != p && pass != '' pass != null) {
    alert('Неверный пароль!');
} else if (login != l && login != '' && login != null) {
    alert('Неверный логин!');
} else if (pass === '' || pass == null); {
    alert('Нет данных');
}

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