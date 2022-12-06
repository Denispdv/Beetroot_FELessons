/* // 1. Запитай у користувача його вік і визначи, ким він є: 
//дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), 
//передбач можливість введення невірних даних.

let userAge = Number(prompt('Сколько вам лет?', ''));
if (userAge >= 1 && userAge <= 11) {
  alert('вы еще ребенок');
} else if (userAge >= 12 && userAge <= 17) {
  alert('вы подросток');
} else if (userAge >=  18 && userAge <= 59) {
  alert('вы уже взрослый');
} else if (userAge >= 60) {
  alert('Вы пенсионер');
} else {
  alert ('Попробуйте еще раз');
}

// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let inputNumber = Number(prompt('Введи любое число от 0 до 9', ''));
switch (inputNumber) {
  case 1:
    alert ('!');
  break;
  case 2:
    alert ('@');
  break;
  case 3:
    alert ('#');
  break;
  case 4:
    alert ('$');
  break;
  case 5:
    alert ('%');
  break;
  case 6:
    alert ('^');
  break;
  case 7:
    alert ('&');
  break;
  case 8:
    alert ('*');
  break;
  case 9:
    alert ('(');
  break;
default:
  alert('нет таких значений');
} 


// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let a = Number(prompt('Введите первый диапазон',''));
let n = Number(prompt('Введите второй диапазон',''));
let sum = 0;
for (let i = a; i <= n; i++) {
  sum = sum + i;
}
alert(`Сумма чисел в диапазоне от ${a} до ${n} = ${sum}`);


// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.


let num1 = Number(prompt('Введите первое число',''));
let num2 = Number(prompt('Введите второе число','')); 
while(num1 !== 0 && num2 !== 0){
  if(num1 > num2){
    num1 = num1 % num2;
  }else{
    num2 = num2 % num1;
  }
}
let num3 = num1 + num2;
alert(`результат ${num3}`);


// 5. Запитай у користувача число і виведи всі дільники цього числа.

let number = Number(prompt('Введите число для поиска его делителей', ''));
for (let i = 1; i <= number; i++) {
  if (number % i == 0)
  console.log(`делители ${i}`);
}

 */