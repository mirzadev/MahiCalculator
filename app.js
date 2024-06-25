"use strict";
const firstNum = document.getElementById("firstNumber");
const secondNum = document.getElementById("secondNumber");
const AddBtn = document.getElementById("Addition");
const SubtBtn = document.getElementById("Subtraction");
const MultBtn = document.getElementById("Multiplication");
const DvnBtn = document.getElementById("Division");
const calResult = document.getElementById("result");
function checkNumberInRange(number) {
    const pattern = new RegExp("^[-+]?[0-9]{1,4}.[0-9]{0,2}$");
    return pattern.test(number);
}
function AddNumbers() {
    if (!checkNumberInRange(firstNum.value) ||
        !checkNumberInRange(secondNum.value)) {
        console.log("Number is not in range");
        return;
    }
    else {
        console.log("Number is in range");
    }
    let a = parseFloat(firstNum.value);
    let b = parseFloat(secondNum.value);
    let result = a + b;
    calResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNumbers);
function SubtractNumbers() {
    if (!checkNumberInRange(firstNum.value) ||
        !checkNumberInRange(secondNum.value)) {
        console.log("Number is not in range");
        return;
    }
    else {
        console.log("Number is in range");
    }
    let a = parseFloat(firstNum.value);
    let b = parseFloat(secondNum.value);
    let result = a - b;
    calResult.textContent = result.toString();
}
SubtBtn.addEventListener("click", SubtractNumbers);
function MultiplyNumbers() {
    if (!checkNumberInRange(firstNum.value) ||
        !checkNumberInRange(secondNum.value)) {
        console.log("Number is not in range");
        return;
    }
    else {
        console.log("Number is in range");
    }
    let a = parseFloat(firstNum.value);
    let b = parseFloat(secondNum.value);
    let result = a * b;
    calResult.textContent = result.toString();
}
MultBtn.addEventListener("click", MultiplyNumbers);
function DivideNumbers() {
    if (!checkNumberInRange(firstNum.value) ||
        !checkNumberInRange(secondNum.value)) {
        console.log("Number is not in range");
        return;
    }
    else {
        console.log("Number is in range");
    }
    let a = parseFloat(firstNum.value);
    let b = parseFloat(secondNum.value);
    let result = a / b;
    calResult.textContent = result.toString();
}
DvnBtn.addEventListener("click", DivideNumbers);
