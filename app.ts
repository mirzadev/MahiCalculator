const firstNum = document.getElementById("firstNumber") as HTMLInputElement;
const secondNum = document.getElementById("secondNumber") as HTMLInputElement;

const AddBtn = document.getElementById("Addition") as HTMLButtonElement;
const SubtBtn = document.getElementById("Subtraction") as HTMLButtonElement;
const MultBtn = document.getElementById("Multiplication") as HTMLButtonElement;
const DvnBtn = document.getElementById("Division") as HTMLButtonElement;
const ClearBtn = document.getElementById("Clear") as HTMLButtonElement;
const calResult = document.getElementById("result") as HTMLOutputElement;

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

// function ClearEntry() {git add
//   let a = parseFloat(firstNum.value);
//   let b = parseFloat(secondNum.value);
//   let result = a - a;
//   let result1 = b - b;
//   ClearBtn.textContent = result.toString();
//   ClearBtn.textContent = result1.toString();
// }
// ClearBtn.addEventListener("Click", ClearEntry);
