let userName = prompt("Как тебя зовут?", '');
console.log(`Привет ${userName}!`);
alert(`Привет ${userName}!`);

const thisYear = 2022;
let youBorn = prompt("Какой твой год рождения?", '');
let youAge = thisYear - youBorn;
console.log(`Сейчас тебе ${youAge}!`);
alert(`Сейчас тебе ${youAge}!`);

let sideSquare = prompt("Введите длину одной стороны квадрата", '');
let perimeter = 4 * sideSquare
console.log(`Периметр квадрата будет ${perimeter}!`);


const Pi = 3.14;
let radius = prompt("укажите радиус круга", '');
let areaCircle = Pi * (radius ** 2);
console.log(`площадь окружности будет ${areaCircle}!`);


let whatDistance = prompt("Какое расстояние между городами в километрах?", '');
let whatTime = prompt("За сколько часов вы хотите добраться?", '');
let whatSpeed = whatDistance/whatTime;
console.log(`скорость, с которой необходимо двигаться, чтобы успеть вовремя ${whatSpeed} км/ч!`);


