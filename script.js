"use strict";
console.log("working");
let display = document.querySelector(".display").textContent;
let firstValue;
let operatorChosen;
let currentValue;
const clearBtn = document.querySelector(".clr_btn");

// clearBtn.addEventListener("click", () => {
//   display = "";
// });

//Add function
function add(a, b) {
  const sum = a + b;
  return sum;
}

//difference funtion
function difference(a, b) {
  const diff = a - b;
  return diff;
}
//multiply function
function multiply(a, b) {
  const product = a * b;
  return product;
}
//divide function
function divide(a, b) {
  const divider = a / b;
  return divider;
}
// console.log(divide(2, 3));
function operate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return difference(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else operator === "*";
  return multiply(a, b);
}
// console.log(operate(2, 3, "-"));

function pickValue() {
  let keys = document.querySelectorAll(".btn");

  keys.forEach((key) => {
    key.addEventListener("click", () => {
      display = document.querySelector(".display").textContent;
      // console.log(display);
      const clickedKey = key.value;
      display += clickedKey;
      const trial = display.replace(/[\W]/g, " ");
      const displayValue = (document.querySelector(".display").textContent =
        trial);
      firstValue = displayValue;

      const fesValue = firstValue;
      console.log(`fesValue = ${fesValue}`);
      currentValue = displayValue;

      console.log(`currentValue = ${currentValue}`);
    });
  });

  const operators = document.querySelectorAll(".signs");
  operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      let display = document.querySelector(".display");
      const operatorClicked = operator.value;
      operatorChosen = operatorClicked;
      console.log(`operatorChosen = ${operatorChosen}`);
      display.textContent = operatorClicked;
    });
  });
}

pickValue();
