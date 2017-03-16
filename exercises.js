//Do not change any of the function names

function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else if (x === y) {
    return x;
  }
  //if they are the same return either one
}

function greeting(language) {
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
  if (language === 'German') {
    return ('Guten Tag!');
  }
  else if ( language === 'Spanish') {
    return ('Hola!');
  }
  else
    return ('Hello!');
  }


function isTenOrFive(num) {
  //return true if num is 10 or 5
  //otherwise return false
  var result = (num === 10 || num === 5);
  return result;
}

function isInRange(num) {
  var result = (num < 50 && num > 20);
  return result;
  //return true if num is less than 50 and greater than 20
}

function isInteger(num) {
  var result = (num === Math.floor(num));
  return result;
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
  if ((num % 3 === 0) && (num % 5 === 0 )) {
     return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
  var i;
  var prime = true; // defaults to true
  if (num <= 1) {
    prime = false;
  } else {
    for (i = 2; i < num; i++) {
      if (num % i === 0)  {
        prime = false;
      }
    }
  } return prime;
}

function returnFirst(arr) {
  //return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  //return the last item of the array
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  //return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  //arr is an array of integers
  //increase each integer by one
  //return the array
  var newArr = arr.map(function(x) {
    return x + 1;
  });
  return newArr;
}

function addItemToArray(arr, item) {
  //add the item to the end of the array
  //return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
  var str = '';
  var i = 0;
  var len = words.length;
  for (i; i < len - 1; i++) {
    str = str.concat(words[i], ' ');
  } str = str.concat(words[i]);
  return str;
}

function contains(arr, item) {
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
  return arr.includes(item);
}

function addNumbers(numbers) {
  //numbers is an array of integers.
  //add all of the integers and return the value
  var sum = numbers.reduce(function(a, b) {
    return a + b;
  }, 0);
  return sum;
}

function averageTestScore(testScores) {
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
  return addNumbers(testScores)/testScores.length;
}

function largestNumber(numbers) {
  var i = 0;
  var len = numbers.length;
  var biggest = 0;
  for (i; i < len; i ++) {
    if (numbers[i] > biggest) {
      biggest = numbers[i];
    }
  }
  //numbers is an array of integers
  //return the largest integer
  return biggest;
}

// console.log(getBiggest(50, 60));
//
// console.log(greeting());
//
// console.log(isTenOrFive(10));
// console.log(isTenOrFive(11));
//
// console.log(isInRange(11));
// console.log(isInRange(50));
// console.log(isInRange(30));
//
// console.log(isInteger(30));
// console.log(isInteger(30.08));
//
// console.log(isPrime(7));
// console.log(isPrime(8));
// console.log(isPrime(23));
// console.log(isPrime(777));

// console.log(incrementByOne([4, 3, 6, 8, 10]));
//
// console.log(contains([4, 3, 6, 8, 10], 10)); // true
// console.log(contains([4, 3, 6, 8, 10], 56)); // false
//
// console.log(addNumbers([4, 3, 6, 8, 10])); // 31
// console.log(averageTestScore([90, 80, 70, 88, 100]));
//
// console.log(largestNumber([41, 3, 677, 81, 10])); // 677


// Do not modify code below this line.
//--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
