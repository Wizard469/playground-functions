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
function footballPoints(wins, ties) {
    let result = 0;
    if (wins > 0 && ties > 0) {
      result = (wins * 3) + ties;
    } else {
      result = 0;
    }
    return result;
}

// Desafio 6
function highestCount(numbers) {
    let largestNumber = numbers[0];
    let sum = 0;
    for (let index = 0; index < numbers.length; index += 1) {
      if (numbers[index] > largestNumber) {
        largestNumber = numbers[index];
      }      
    }

    for (let index = 0; index < numbers.length; index += 1) {
      if (largestNumber === numbers[index]) {
        sum += 1;
      }
    }
    return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catsSum = cat1 + cat2;
  if (catsSum / 2 === mouse) {
    return "os gatos trombam e o rato foge";
  } else if (cat1 < cat2) {
      return "cat1";
    } else if (cat2 < cat1) {
      return "cat2";
    }
}
   

// Desafio 8
function fizzBuzz() {
  // seu código aqui

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
