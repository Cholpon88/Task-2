// Описание задания №2
//     1. Дана строка **'ddd@bbb@ccc'**. Замените все **@** на **'!'**
//     2. Дана строка **'js'**. Сделайте из нее строку **'JS'**.
//     3. Дана строка **'JS'**. Сделайте из нее строку **'js'**.
//     4. Дана строка**'I am a hero!'**. Выведите в консоль **количество символов** в этой строке.
//     5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
//   
//   **Пример: "Номер вашей карты: **********1245"**

//№1.
document.write("<strong>Задача №2/1 </strong><br>");
let text = "ddd@bbb@ccc";
let newText = text.replaceAll('@', '!');
console.log(newText);


//№2.
// document.write("<strong>Задача №2/2 </strong><br>");
// const upperCaseText = 'js';
// console.log(upperCaseText.toUpperCase());

//№3.
// document.write("<strong>Задача №2/3 </strong><br>");
// console.log('JS'.toLowerCase());
// 
// 
// №4.
// document.write("<strong>Задача №2/4 </strong><br>");
// const numberSymbol = 'I am a hero!';
// console.log(numberSymbol.length);
// 
// №5.
// document.write("<strong>Задача №2/5 </strong><br>");
// let numCard = prompt("Номер вашей карты: (16)");
// let myCard = ("************+numCard.slice(12)");
// document.write('"Номер вашей карты: **********1245"');
