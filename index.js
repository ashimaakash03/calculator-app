const display = document.getElementsByClassName("display")[0];
console.log(display);

const appendToDisplay = (input) => {
  display.value += input;
};

const clearScreen = () => {
  display.value = "";
};

const calculate = () => {
  display.value = eval(display.value);
};
