class Calculator {
  constructor() {
    this.currentNumber = "";
    this.previousNumber = "";
    this.operation = undefined;
  }
  updateDisplay() {
    currentOperand.innerText = this.currentNumber;
    if (this.operation === undefined)
      previousOperand.innerText = this.previousNumber;
    else previousOperand.innerText = this.previousNumber + " " + this.operation;
  }
  clearAll() {
    this.currentNumber = "";
    this.previousNumber = "";
    this.operation = undefined;
  }
  display(num) {
    if (num == ".") {
      if (this.currentNumber.includes(num)) return;
    }

    this.currentNumber = this.currentNumber.toString() + num.toString();
  }

  deleteLastElement() {
    this.currentNumber = this.currentNumber.slice(0, -1);
  }

  getEquals() {
    this.compute();
    this.previousNumber = this.currentNumber;
    this.currentNumber = "";
    this.operation = undefined;
  }

  operationSelected(str) {
    console.log("dhukei", str);

    if (this.currentNumber.length == 0) {
      console.log("ekta vitor", str);
      if (this.previousNumber.length > 0) {
        this.operation = str;

        console.log("duto vitor", str);
      } else {
        this.operation = str;
        return;
      }
    } else if (this.previousNumber.length == 0) {
      this.previousNumber = this.currentNumber;
      this.currentNumber = "";
      this.operation = str;
    } else {
      console.log("else");
      this.getEquals();
      this.operation = str;
    }
  }
  compute() {
    if (this.currentNumber.length == 0 || this.previousNumber.length == 0)
      return;
    let curr = parseFloat(this.currentNumber);
    let prev = parseFloat(this.previousNumber);

    switch (this.operation) {
      case "+":
        this.currentNumber = curr + prev;
        break;
      case "-":
        this.currentNumber = prev - curr;

        break;
      case "*":
        this.currentNumber = curr * prev;
        break;
      case "÷":
        this.currentNumber = prev / curr;
        break;
      default:
        return;
    }
  }
}

let calcul = new Calculator();

let deleteButton = document.querySelector("[data-delete]");
let clearAllButton = document.querySelector("[data-all-clear]");
let allNumberButton = document.querySelectorAll("[data-number]");
let allOperandButton = document.querySelectorAll("[data-operation]");
let eqaulsButton = document.querySelector("[data-equals]");
let currentOperand = document.querySelector("[data-current-operand]");
let previousOperand = document.querySelector("[data-previous-operand]");

deleteButton.addEventListener("click", () => {
  calcul.deleteLastElement();
  calcul.updateDisplay();
});

eqaulsButton.addEventListener("click", () => {
  calcul.getEquals();
  calcul.updateDisplay();
});

clearAllButton.addEventListener("click", () => {
  calcul.clearAll();
  calcul.updateDisplay();
});

allNumberButton.forEach((button) => {
  button.addEventListener("click", () => {
    calcul.display(button.innerText);
    calcul.updateDisplay();
  });
});

allOperandButton.forEach((button) => {
  button.addEventListener("click", () => {
    calcul.operationSelected(button.innerText);
    calcul.updateDisplay();
  });
});
