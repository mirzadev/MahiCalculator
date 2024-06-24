"use strict";
const firstNum = document.getElementById("firstNumber");
const secondNum = document.getElementById("secondNumber");
const AddBtn = document.getElementById("Addition");
const SubtBtn = document.getElementById("Subtraction");
const MultBtn = document.getElementById("Multiplication");
const DvnBtn = document.getElementById("Division");
const calResult = document.getElementById("result");
function AddNumbers() {
    let a = parseFloat(firstNum.value);
    let b = parseFloat(secondNum.value);
    let result = a + b;
    calResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNumbers);
function SubtractNumbers() {
    let a = parseFloat(firstNum.value);
    let b = parseFloat(secondNum.value);
    let result = a - b;
    calResult.textContent = result.toString();
}
SubtBtn.addEventListener("click", SubtractNumbers);
function MultiplyNumbers() {
    let a = parseFloat(firstNum.value);
    let b = parseFloat(secondNum.value);
    let result = a * b;
    calResult.textContent = result.toString();
}
MultBtn.addEventListener("click", MultiplyNumbers);
function DivideNumbers() {
    let a = parseFloat(firstNum.value);
    let b = parseFloat(secondNum.value);
    let result = a / b;
    calResult.textContent = result.toString();
}
DvnBtn.addEventListener("click", DivideNumbers);
