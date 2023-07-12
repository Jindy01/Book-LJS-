'use strict';

// function Clock({ template }) {
  
//     let timer;
  
//     function render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };
  
//   }
  
// let clock = new Clock({template: 'h:m:s'});
// console.log(clock.start());


class MyTimer {
  
  
  constructor( { template } ) {
    this.template = template;
  }
    
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  };

  start(){
    this.render();
      this.timer = setInterval(() => this.render(), 1000); //   Тут была ошибка ! Не возвращал значение через стрелочнуб Функцию
  };

  stop() {
    clearInterval(this.timer);
  };

}

let NewTimer = new MyTimer( {template: 'h:m:s'} );

NewTimer.start();
// NewTimer.stop();



// class User {

//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         if (value.length < 4) {
//             console.log('Short Name');
//             return;
//         }
//         this._name = value;
//     }

//     sayHi() {
//         console.log(this.name);
//     }

// }

// let user = new User('Koll');
// user.sayHi()
// console.log(user);