let currentValue = 0;
let bufferValue = "";
let currentOperation = "";

function init() {
  const calculatorButtons =  document.querySelectorAll(".calc-button");
  calculatorButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      handleButtonClick(event.target.textContent);
    });
  });
}

function handleButtonClick(value) {
  if(isNaN(value)) {
    handleCharacterClick(value);
  } else {
    handleNumberClick(value);
  }
}

function handleCharacterClick(value) {
  switch(value) {
    case "C":
      clearBuffer();
      break;
    case "←":
      deleteFromBuffer();
      break;
    case "=":
      handleMath();
      break;
    default:
      handleMath(value);
  }
}

function clearBuffer() {
  currentValue = 0;
  bufferValue = "";
  currentOperation = "";
  document.querySelector(".answer").innerText = "0";
}

function deleteFromBuffer() {
  if(bufferValue !== "") {
    bufferValue = bufferValue.substr(0, bufferValue.length - 1);
    const innerText = bufferValue === "" ? "0" : bufferValue;
    document.querySelector(".answer").innerText = innerText;
  }
}

function handleMath(value = "") {
  handleCurrentOperation();
  bufferValue = "";
  currentOperation = value;
}

function handleCurrentOperation() {
  if(currentOperation === "" && currentValue === 0) {
    currentValue = parseInt(bufferValue);
    document.querySelector(".answer").innerText = "0";
    return;
  } else if(currentOperation === "÷") {
    currentValue /= parseInt(bufferValue);
  } else if(currentOperation === "×") {
    currentValue *= parseInt(bufferValue);
  } else if(currentOperation === "-") {
    currentValue -= parseInt(bufferValue);  
  } else if(currentOperation === "+") {
    currentValue += parseInt(bufferValue);
  }
  document.querySelector(".answer").innerText = currentValue;
}

function handleNumberClick(value) {
  bufferValue += value;
  document.querySelector(".answer").innerText = bufferValue;
}

init();
