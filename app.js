const keys = document.querySelectorAll(".key");
const display = document.querySelector(".display");
// recorrer todos las teclas para agregar a cada una
// el handler al evento click

let keyPressed = "";
let displayValue = "";
let value = 0;
let operator = "";
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

// yo se que textContent es un string
// '3' + '3' + '9' --> 339

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", (e) => {
    keys[i].classList.add("pressed");
    // primero detecto la tecla presionada
    keyPressed = e.target.textContent;

    if (numbers.includes(keyPressed)) {
      // solo muestro el valor si es un numero
      displayValue += keyPressed;
      display.innerHTML = displayValue;
    } else {
      switch (keyPressed) {
        case "AC":
          clear();
          break;
        case "+":
          value = Number(displayValue);
          operator = "+";
          clear();
          break;
        case "=":
          const result = calculate(operator, value, Number(displayValue));
          clear();
          display.innerHTML = result;
      }
    }
  });

  keys[i].addEventListener("transitionend", () => {
    if (keys[i].classList.contains("pressed")) {
      keys[i].classList.remove("pressed");
    }
  });
}

function clear() {
  displayValue = "";
  display.innerHTML = "0";
}

function calculate(op, num1, num2) {
  let result = 0;
  switch (op) {
    case "+":
      result = num1 + num2;
      break;
  }
  return result;
}
// primero detectar la tecla que se presiono
// guardar el numero u operacion
// mostrar ese valor en display
