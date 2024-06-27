const firstNum = document.getElementById("firstNumber") as HTMLInputElement;
const secondNum = document.getElementById("secondNumber") as HTMLInputElement;

const AddBtn = document.getElementById("Addition") as HTMLButtonElement;
const SubtBtn = document.getElementById("Subtraction") as HTMLButtonElement;
const MultBtn = document.getElementById("Multiplication") as HTMLButtonElement;
const DvnBtn = document.getElementById("Division") as HTMLButtonElement;
const ClrBtn = document.getElementById("Clear") as HTMLButtonElement;
const calResult = document.getElementById("result") as HTMLOutputElement;

function checkNumberInRange(number: string): boolean {
  const pattern = new RegExp("^[-+]?[0-9]{1,4}(.?[0-9]{1,2})?$");
  return pattern.test(number);
}
function AddNumbers() {
  if (
    !checkNumberInRange(firstNum.value) ||
    !checkNumberInRange(secondNum.value)
  ) {
    console.log("Number is not in range");
    return;
  } else {
    console.log("Number is in range");
  }

  let a = parseFloat(firstNum.value);
  let b = parseFloat(secondNum.value);
  let result = a + b;
  calResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNumbers);

function SubtractNumbers() {
  if (
    !checkNumberInRange(firstNum.value) ||
    !checkNumberInRange(secondNum.value)
  ) {
    console.log("Number is not in range");
    return;
  } else {
    console.log("Number is in range");
  }

  let a = parseFloat(firstNum.value);
  let b = parseFloat(secondNum.value);
  let result = a - b;
  calResult.textContent = result.toString();
}
SubtBtn.addEventListener("click", SubtractNumbers);

function MultiplyNumbers() {
  if (
    !checkNumberInRange(firstNum.value) ||
    !checkNumberInRange(secondNum.value)
  ) {
    console.log("Number is not in range");
    return;
  } else {
    console.log("Number is in range");
  }

  let a = parseFloat(firstNum.value);
  let b = parseFloat(secondNum.value);
  let result = a * b;
  calResult.textContent = result.toString();
}
MultBtn.addEventListener("click", MultiplyNumbers);

function DivideNumbers() {
  if (
    !checkNumberInRange(firstNum.value) ||
    !checkNumberInRange(secondNum.value)
  ) {
    console.log("Number is not in range");
    return;
  } else {
    console.log("Number is in range");
  }

  let a = parseFloat(firstNum.value);
  let b = parseFloat(secondNum.value);
  let result = a / b;
  calResult.textContent = result.toString();
}
DvnBtn.addEventListener("click", DivideNumbers);

function clear() {
  firstNum.value = "";
  secondNum.value = "";
  calResult.value = "";
}
ClrBtn.addEventListener("click", clear);
