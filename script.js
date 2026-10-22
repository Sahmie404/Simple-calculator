const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".buttons button");
const clearButton = document.querySelector("#clear");

let firstNumber = "";
let secondNumber = "";
let operator = null;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if ("0123456789".includes(button.textContent)) {
      if (operator === null) {
        firstNumber = firstNumber + button.textContent;
        display.textContent = firstNumber;
      } else {
        secondNumber = secondNumber + button.textContent;
        display.textContent = secondNumber;
      }
    } else if (["+", "-", "*", "/"].includes(button.textContent)) {
      operator = button.textContent;
    } else if (button.textContent === "=") {
      if (firstNumber !== " " && secondNumber !== " " && operator !== " ") {
        const result = operate(
          operator,
          Number(firstNumber),
          Number(secondNumber),
        );

        display.textContent = result;
        firstNumber = String(result);
        secondNumber = " ";
      }
    }
  });
});

clearButton.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  operator = null;
  display.textContent = " ";
});
