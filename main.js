// let juftToq = +prompt("Iltimos biror son kiriting")

// let domga = document.createElement("h1")

// if(isNaN(juftToq) || juftToq == 0){
//     domga.textContent = "Iltimos 0 dan katta biror son kiriting";
// }
// else if(juftToq % 2 == 0){
//     domga.textContent = "Juft son";
// }
// else{
//     domga.textContent = "Toq son";
// }

// document.body.appendChild(domga)
// console.log(juftToq);


let ism = prompt("Ismingizni kiriting");
let fontSize = +prompt("Shrift o'lchamini kiriting");

if(isNaN(fontSize) || fontSize <= 0){
    alert("Iltimos Font size da 0 dan katta biror son kiriting");
    fontSize = +prompt("Shrift o'lchamini kiriting");
}

let rang = prompt("Rangni kiriting");

if(rang!= "red" && rang!= "green" && rang!= "blue"){
    alert("Iltimos rangni red, green, blue ranglaridan birini kiriting");
    rang = prompt("Rangni kiriting");
}
let backgroundColor = prompt("Orqa rangni kiriting");

if(backgroundColor === null || backgroundColor.trim() === ""){
    alert("Iltimos rangni to'g'ri kiriting");
    backgroundColor = prompt("Orqa rangni kiriting");
}
let boyi = prompt("Boyini kiriting");
let eni = prompt("Enini kiriting");
let padding = prompt("Paddingni kiriting");
let margin = prompt("Marginni kiriting");




let domga2 = document.createElement("h1");

domga2.textContent = `Salom ${ism}`;

domga2.style.fontSize = `${fontSize}px`;
domga2.style.color = rang;
domga2.style.backgroundColor = backgroundColor;
domga2.style.width = `${eni}px`;
domga2.style.height = `${boyi}px`;
domga2.style.padding = `${padding}px`;
domga2.style.margin = `${margin}px`;
domga2.style.textAlign = "center";
domga2.style.display = "flex";
domga2.style.justifyContent = "center";
domga2.style.alignItems = "center";
domga2.style.borderRadius = "10px";

document.body.appendChild(domga2)