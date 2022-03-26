"use strict";

let name=prompt("Введите Имя");

let surname="";

if(name=="Slim"){
    surname=prompt("Введите фамилие");
    if(surname=="Shady"){
        console.log(`Hello ${name} ${surname}`);
    } else {
        console.log("Error surname");
    }
}else {
    console.log("Error name");
}
