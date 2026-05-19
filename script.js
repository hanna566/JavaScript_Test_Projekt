//let x; 
//let y;
// const input = document.getElementById("number1");
// const clickbtn = document.getElementById("btn");
// const output = document.getElementById("text")


// Nummern
const btn1 = document.getElementById("Btn1");
const btn2 = document.getElementById("Btn2");
const btn3 = document.getElementById("Btn3");
const btn4 = document.getElementById("Btn4");
const btn5 = document.getElementById("Btn5");
const btn6 = document.getElementById("Btn6");
const btn7 = document.getElementById("Btn7");
const btn8 = document.getElementById("Btn8");
const btn9 = document.getElementById("Btn9");
const btn0 = document.getElementById("Btn0");

// Rechenzeichen
const zplus = document.getElementById("plus");
const zminus = document.getElementById("minus");
const zmal = document.getElementById("mal");
const zteil = document.getElementById("teil");
const zpoint = document.getElementById("point");
const zgleich = document.getElementById("gleich");

const Output = document.getElementById("output");

function remove(){
    Output = document.getElementById('output').value = "";
}

function split() {
    const gesplit = eingabe.split(/([+\-*/])/);
    return gesplit
}


    const zahl1 = [0];
    const ziff1 = [1];
    const zahl2 = [2];


// add functions for substracting multiplying and dividing
function add (zahl1, zahl2){
    Output = document.getElementById('output')(zahl1 +  zahl2)
}

function substracting (zahl1, zahl2){
    return zahl1 - zahl2 
}

function multiplying (zahl1, zahl2){
    return zahl1 * zahl2 
}

function dividing (zahl1, zahl2){
    return zahl1 / zahl2 
}

function ergebnis() {
    switch (ziff1) {
        case '+':
        add(zahl1, zahl2);
        break;
        case '-':
        substracting(zahl1, zahl2);
        break;
        case '*':
        multiplying(zahl1, zahl2);
        break;
        case '/':
        dividing(zahl1, zahl2);
        break;
        default:
         // Irgentwas
        }
}

function ClickButton(char) {
    Output = document.getElementById('output');
    Output.value += char; 
}