// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. 
//Програма виводить скільки шоколадок може купити користувач і 
//скільки здачі у нього залишиться.

let moneyInWallet = prompt("Сколько денег у вас в кошельке?", '' );
let chocolatePrice = prompt("Сколько стоит одна шоколадка?", '' );

let amountOfChocolate = Math.floor(moneyInWallet / chocolatePrice);
let moneyIsLeft = moneyInWallet - (chocolatePrice * amountOfChocolate);

alert(`Вы можете купить ${amountOfChocolate} шоколадки`);
alert(`Денег у вас останется ${moneyIsLeft}`);


// 2. Запитай у користувача тризначне число і виведи його задом наперед.

let number = prompt ("Введите трехзначное число, ответом будет его реверс", '');
alert(number.split("").reverse().join(""));
