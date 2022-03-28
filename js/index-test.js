// for (let i = 0; i < 5; i++) alert( i );

// 0 1 2 3 4 5

// for (let i = 0; i < 5; ++i) alert( i );

// 1 2 3 4 5

// for (let i = 2; i <= 10; i++)
// if (i % 2 === 0) {
// console.log(i)}

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0;
// while (i < 3) {
//     alert (`number ${i}!`)
//     i++
// }

// let num = userNumber;

// for (i = 0 ;i > 100;){
// prompt (`число ${i}`)
// }

// let str = +prompt ("Введите число больше 100");

// if (str < 100) {
//     alert (`число ${str}, неверное значение. Введите число больше 100`);
//     prompt ("Введите число больше 100");

// }
// else if (str === 100) {
//     alert (`число ${str}, неверное значение. Введите число больше 100`);
//     prompt ("Введите число больше 100");
// }
// else {
//     alert (`Вы ввели число ${str}`)
// }

//  Task 7
// Есть input i-7 и i-7-1 куда пользователь может ввести числа больше нуля.
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки btn-7  должна запускаться функция foo7, которая выводит в out-7 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 12  и нажал кнопку, мы получим:
//     4 5 6 7 8 9 10 11 12


const $BTN_7 = document.querySelector(".btn-7");
const $OUT_7 = document.querySelector(".out-7");

function foo7 () {
    let temp = " ";
    let i7 = +document.querySelector(".i-7").value
    let i7i = +document.querySelector(".i-7i").value

    for (i = i7; i <= i7i; i++){
    temp += (`${i}-b`);
    }
    $OUT_7.textContent = temp;
}
$BTN_7.onclick = foo7;


