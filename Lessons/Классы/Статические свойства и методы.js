// class Rabbit {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Animal extends Object {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }

// let rabbit = new Animal("Кроль");
// let twoRabbit = new Rabbit();
// console.log(twoRabbit);

// console.log( rabbit.hasOwnProperty('name') ); // Ошибка



// class Animal {
//     constructor(name, speed) {
//         this.name = name;
//         this.speed = speed;
//     }
    
//     run(speed = 0) {
//         this.speed += speed;
//         console.log(`${this.name} бежит со скростью ${this.speed}`);
//     }

//     static compare(animalA, animalB) {
//         return animalA.speed - animalB.speed;
//     }
// }

// class Rabbit extends Animal {
//     hide() {
//         console.log('');
//     }
// }

// let rabbits = [
//     new Rabbit('Белый кролик', 8),
//     new Rabbit('Серый кролик', 5),
// ]

// rabbits.sort(Animal.compare);
// rabbits[0].run();



// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }

//     static compare(articleA, articleB) {
//         return articleA.date - articleB.date;
//     }

//     static createTodays() {
//         return new this('Сегодняшний дайджест', new Date());
//     }
// }

// let article = Article.createTodays();
// console.log(article.title);

// let articles = [
//     new Article("HTML", new Date(2019, 1, 1)),
//     new Article("CSS", new Date(2019, 0, 1)),
//     new Article("JavaScript", new Date(2019, 11, 1)),
// ];

// class App extends Article {
//     constructor() {
//         super(this.title);
//     }
// }

// console.log(Article);
// console.log(App);

// articles.sort(Article.compare);

// console.log(articles[0].title);
// console.log(articles[1].title);
// console.log(articles[2].title);



// class User {
//     static staticMetod() {
//         console.log(User === this);
//     }
// }

// User.staticMetod();

