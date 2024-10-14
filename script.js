/*--1--
1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
бал і кількість пропущених занять
2) написати метод який буде виводити цю інформацію
3) написати три варіанти студентів
4) прикріпити знначення за допомогою call apply bind*/

/*const studentInfo = {
    name: 'name',
    userloginfo: function (majority,mediumMark,numberOfMisedLections) {
       console.group("info");
       console.log(`Name is: ${this.name}`);
       console.log(`Majority is: ${majority}`);
       console.log(`Medium Mark is: ${mediumMark} `);
       console.log(`Number of Missed Lections: ${numberOfMisedLections}`);
       console.groupEnd(); 
    },
};
const Roman = {
    name: "Roman",
};
studentInfo.userloginfo.call(Roman, "history", 3.8, 25);
const Olga = {
    name: "Olga",
};
studentInfo.userloginfo.apply(Olga, ['geography', 5, 2]);

const Vadym = {
    name: "Vadym",
};
studentInfo.userloginfo.bind(Vadym, "physics", 5, 0)();*/

/*Написати дві кнопки і закріпити на них функції
при натисканні на кнопку html - має видати коротке визначення що це таке
при натисканні на кнопку css - має видати коротке визначення що це таке*/


/*document.getElementById('htmlbtn').addEventListener('click', function() {
    document.getElementById('h').innerText = "HTML (HyperText Markup Language) - це мова розмітки для створення веб-сторінок.";
});

document.getElementById('cssbtn').addEventListener('click', function() {
    document.getElementById('c').innerText = "CSS (Cascading Style Sheets) - це мова стилів, яка використовується для оформлення зовнішнього вигляду веб-сторінок.";
});*/
//Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару функція має повертати назву товару і вартість
//перевірити на варіантах:
//1) banana 30, 4,5
//2) cherry 58, 1,3
//3) orange 89. 3,4


/*const fruitShop = {
    fruit: 'fruit',
    valuecard: function (price, quantity) {
        console.group();
        console.log(`${this.fruit}`);
        console.log(price * quantity);
        console.groupEnd();
    },
};
const firstGood = {
    fruit: 'Banana',
};
fruitShop.valuecard.call(firstGood, 30, 4.5);

const secondGood = {
    fruit: 'Cherry',
};
fruitShop.valuecard.call(secondGood, 58, 1.3);

const thirdGood = {
    fruit: 'Orange',
};
fruitShop.valuecard.call(thirdGood, 89, 3.4);*/