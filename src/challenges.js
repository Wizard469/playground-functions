// Desafio 1
function compareTrue(parameter1, parameter2) {
    if (parameter1 === true && parameter2 === true) {
      return true;
    } else {
      return false;
    }
}

// Desafio 2
function calcArea(base, height) {
    let result = (base * height) / 2;
    return result;
}

// Desafio 3
function splitSentence(string) {
    let array = string.split(" ")
    return array;
}

// Desafio 4
function concatName(array) {
    let firstItem = array[0];
    let lastItem = array[array.length - 1];
    let newString = lastItem + ", " + firstItem;
    return newString
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
