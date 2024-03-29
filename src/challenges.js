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
function fizzBuzz(arrayN) {
  let newArray = [];

    for (let i = 0; i < arrayN.length; i+=1) {
      if (arrayN[i] % 3 === 0 && arrayN[i] % 5 === 0) {
        newArray.push('fizzBuzz');
      } else if (arrayN[i] % 3 === 0) {
        newArray.push('fizz');
      } else if (arrayN[i] % 5 === 0) {
        newArray.push('buzz');
      } else {
        newArray.push('bug!');
      }
    }
    return newArray;
}

// Desafio 9
function encode(string) {
  let newString = "";

  for (let index in string) {
    if (string[index] === "a") {
      newString += 1;
    } else if (string[index] === "e") {
      newString += 2;
    } else if (string[index] === "i") {
      newString += 3;
    } else if (string[index] === "o") {
      newString += 4;
    } else if (string[index] === "u") {
      newString += 5;
    } else {
      newString += string[index];
    }
  }
  return newString;
}

function decode(string) {
  let newString = "";

  for (let index in string) {
    if (string[index] === "1") {
      newString += "a";
    } else if (string[index] === "2") {
      newString += "e";
    } else if (string[index] === "3") {
      newString += "i";
    } else if (string[index] === "4") {
      newString += "o";
    } else if (string[index] === "5") {
      newString += "u";
    } else {
      newString += string[index];
    }
  }
  return newString;
}

// Desafio 10
function techList(array, name) {
  let newList = [];

  if (array[0] === undefined) {
    return "Vazio!";
  }

  let sorted = array.sort();
  
  for (let item of sorted) {
    newList.push({tech: item, name: name})
  }
  return newList;
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
