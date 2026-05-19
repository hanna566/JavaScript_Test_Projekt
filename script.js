//let x; 
//let y;
// const input = document.getElementById("number1");
// const clickbtn = document.getElementById("btn");
// const output = document.getElementById("text")

const plus = '+';
const minus = '-';
const mal = '*';
const teil = '/';


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

// Rechenzeichen
const zplus = document.getElementById("plus");
const zminus = document.getElementById("minus");
const zmal = document.getElementById("mal");
const zteil = document.getElementById("teil");

const Input = document.getElementById("Input");
const Input1 = document.getElementById("Input1");




function ergebnis() {
    if (output.includes())
    {
        splitadd();
        add();
    }
    else if (output.includes(minus)) 
    {
        splitsubstracting();
        substracting();
    }
    else if (output.includes(mal)) 
    {
        splitmultiplying();
        multiplying();
    }
    else if (output.includes(teil)) 
    {
        splitdividing();
        dividing();
    }
}

function remove(){
    output = document.getElementById('output').value = "";
}

function split() {
    const gesplit = eingabe.split(/([+\-*/])/);
    const zahl1 = [0]
}

function splitadd() {
    const input = output.split('+');
    const input1 = output.split('=');
}

function splitsubstracting() {
    const input = output.split('-');
    const input1 = output.split('=');
}

function splitmultiplying() {
    const input = output.split('*');
    const input1 = output.split('=');
}

function splitdividing() {
    const input = output.split('/');
    const input1 = output.split('=');
}


// add functions for substracting multiplying and dividing
function add (input, input1){
    return input + input1 
}

function substracting (input, input1){
    return input - input1 
}

function multiplying (input, input1){
    return input * input1 
}

function dividing (input, input1){
    return input / input1 
}

function ClickButton(char) {
    output = document.getElementById('output');
    output.value += char; 
}