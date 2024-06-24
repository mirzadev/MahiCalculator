const firstNum = document.getElementById("firstNumber") as HTMLInputElement;
const secondNum = document.getElementById("secondNumber") as HTMLInputElement;

const AddBtn = document.getElementById("Addition") as HTMLButtonElement;
const SubtBtn = document.getElementById("Subtraction") as HTMLButtonElement;
const MultBtn = document.getElementById("Multiplication") as HTMLButtonElement;
const DvnBtn = document.getElementById("Division") as HTMLButtonElement;

const calResult = document.getElementById("result") as HTMLOutputElement;

function AddNumbers() {
  let a = parseFloat(firstNum.value);
  let b = parseFloat(secondNum.value);
  let result = a + b;
  calResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNumbers);
