"use strict"

let number1 = prompt(`Число 1 >`);
let number2 = prompt(`Число 2 >`);
let operation = prompt(`Выберите операцию
1.Сумма
2.Разность
3.Произведение
4.Частное
5.Остаток`)
if (operation == 1) {
    console.log(+number1 + +number2);
} else {
    if (operation == 2) {
        console.log(number1-number2);
    } else {
if (operation == 3) {
    console.log(number1*number2);
    } else {
    if (operation == 4){
        console.log(number1/number2);
        } else {
            if (operation ==5) {
                console.log(number1%number2);
            } else {
                console.log("Такого варианта нет, ваша операция не может быть выполнена!")
            }
         }
       } 
    }
}