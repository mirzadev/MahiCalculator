"use strict";
const firstNum = document.getElementById("firstNumber");
const secondNum = document.getElementById("secondNumber");
const AddBtn = document.getElementById("Addition");
const SubtBtn = document.getElementById("Subtraction");
const MultBtn = document.getElementById("Multiplication");
const DvnBtn = document.getElementById("Division");
const ClrBtn = document.getElementById("Clear");
const calResult = document.getElementById("result");
const messageElm = document.getElementById("divResults");
function checkNumberInRange(number) {

    const pattern = new RegExp("^[-+]?[0-9]{1,4}(.?[0-9]{1,2})?$");
return pattern.test(number);
}
//To fadeout the error message after 10 second
let message = " ";
const messageFadeout = () => {
    setTimeout(() => {
        messageElm.innerHTML = "";
    }, 10000);
};
// Addition function
function AddNumbers() {
    if (!checkNumberInRange(firstNum.value) ||
        !checkNumberInRange(secondNum.value)) {
        //Error Message
        messageElm.innerHTML = "Number is not in range!";
        console.log("Number is not in range!");
        messageFadeout();
    }
    else {
        console.log(message);
    }
    let a = parseFloat(firstNum.value);
    let b = parseFloat(secondNum.value);
    let result = a + b;
    calResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNumbers);
//Subtract function
function SubtractNumbers() {
    if (!checkNumberInRange(firstNum.value) ||
        !checkNumberInRange(secondNum.value)) {
        messageElm.innerHTML = "Number is not in range!";
        console.log("Number is not in range!");
        messageFadeout();
    }
    else {
        console.log(message);
    }
    let a = parseFloat(firstNum.value);
    let b = parseFloat(secondNum.value);
    let result = a - b;
    calResult.textContent = result.toString();
}
SubtBtn.addEventListener("click", SubtractNumbers);
// Multiply function
function MultiplyNumbers() {
    if (!checkNumberInRange(firstNum.value) ||
        !checkNumberInRange(secondNum.value)) {
        messageElm.innerHTML = "Number is not in range!";
        console.log("Number is not in range!");
        messageFadeout();
    }
    else {
        console.log(message);
    }
    let a = parseFloat(firstNum.value);
    let b = parseFloat(secondNum.value);
    let result = a * b;
    calResult.textContent = result.toString();
}
MultBtn.addEventListener("click", MultiplyNumbers);
//Division function
function DivideNumbers() {
    if (!checkNumberInRange(firstNum.value) ||
        !checkNumberInRange(secondNum.value)) {
        messageElm.innerHTML = "Number is not in range!";
        console.log("Number is not in range!");
        messageFadeout();
    }
    else {
        console.log(message);
    }
    let a = parseFloat(firstNum.value);
    let b = parseFloat(secondNum.value);
    let result = a / b;
    calResult.textContent = result.toString();
}
DvnBtn.addEventListener("click", DivideNumbers);
//Clear all entry
function clear() {
    firstNum.value = "";
    secondNum.value = "";
    calResult.value = "";
}
ClrBtn.addEventListener("click", clear);
