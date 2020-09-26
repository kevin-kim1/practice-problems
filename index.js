// https://edabit.com/challenge/pPNAs5PvB3WvnDwDM
// Coverting Object to Arrays

function toArray(obj) {
  const resultArr = [];
  for (let data in obj) {
    resultArr.push([data, obj[data]]);
  }
  return resultArr;
}

// https://edabit.com/challenge/erFxBbqzZPSegMwnc
// Change Enough
function changeEnough(change, amountDue) {
  let total = 0;
  let diffTotal = 0
  for (let i = 0; i < change.length; i++) {
    if (i === 0) {
      total += .25 * change[i]
    } else if (i === 1) {
      total += .10 * change[i]
    } else if (i === 2) {
      total += .5 * change[i]
    } else {
      total += .01 * change[i]
    }
  }
  diffTotal = total - amountDue;
  if (diffTotal > 0) {
    return true
  } else {
    return false;
  }
}
// https://edabit.com/challenge/xDNkweBBNXBMyQRdG
// Create a phone number

function createPhoneNumber(numbers) {
  let phoneNum = "";
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      phoneNum += "(" + numbers[i];
    } else if (i === 2) {
      phoneNum += numbers[i] + ")"
    } else if (i === 3) {
      phoneNum += " " + numbers[i];
    } else if (i === 6) {
      phoneNum += "-" + numbers[i];
    } else {
      phoneNum += numbers[i];
    }
  }
  return phoneNum;
}

// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
// Unique Order

var uniqueInOrder = function (iterable) {
  let prevChar = '';
  const resultArr = [];
  let i = 0;
  while (i < iterable.length) {
    if (prevChar === iterable[i]) {
      i++;
    } else {
      resultArr.push(iterable[i]);
      prevChar = iterable[i]
      i++;
    }
  }
  return resultArr;
}

// https://edabit.com/challenge/xuRjEej9F9ZG3vg7M
// Replace Vowel

function replaceVowel(word) {
  let wordArr = word.split("");
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === 'a') {
      wordArr[i] = '1';
    } else if (wordArr[i] === 'e') {
      wordArr[i] = '2';
    } else if (wordArr[i] === 'i') {
      wordArr[i] = '3';
    } else if (wordArr[i] === 'o') {
      wordArr[i] = '4';
    } else if (wordArr[i] === 'u') {
      wordArr[i] = '5';
    }
  }
  let result = wordArr.join('');
  return result;
}

// https://edabit.com/challenge/AtoWYYC9THAH5HbS2
// Basic Calculator

function calculator(num1, operator, num2) {
		let result = 0;
		if (operator === '+') {
			 result = num1 + num2;
		} else if (operator === '-') {
				result = num1 - num2;
		} else if (operator === '/' && num2 !== 0) {
				result = num1 / num2;
		} else if (operator === '*') {
				result = num1 * num2;
		} else {
			result = "Can't divide by 0!";
		}
		return result;
}

// https://edabit.com/challenge/AtoWYYC9THAH5HbS2
// ES6: Destructuring Objects I

let str = `( { one, two } = { one : 1, two : 2}).toString()`;

// https://edabit.com/challenge/27Toh4rACcmRvRLrb
// sumArray

function sumArray(arr) {
  let result = 0;
  result = arr.flat(Infinity).reduce((sum, num) => sum + num);
  return result;
}


function capToFront(s) {
  const upperArr = [];
  const lowerArr = [];
  let resultArr = [];
  s.split("");
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (currentChar === currentChar.toUpperCase()) {
      upperArr.push(currentChar);
    }
  }
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (currentChar === currentChar.toLowerCase()) {
      lowerArr.push(currentChar);
    }
  }
  resultArr = upperArr.concat(lowerArr);
  return resultArr.join("");
}

// https://edabit.com/challenge/8n9RyHThC3dNEPCng
// Move Capital Letters to the Front

function capToFront(s) {
  const upperArr = [];
  const lowerArr = [];
  let resultArr = [];
  s.split("");
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (currentChar === currentChar.toUpperCase()) {
      upperArr.push(currentChar);
    }
  }
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (currentChar === currentChar.toLowerCase()) {
      lowerArr.push(currentChar);
    }
  }
  resultArr = upperArr.concat(lowerArr);

// https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk
// Remainder operator

function remainder(x, y) {
  return x % y;
}

// https://edabit.com/challenge/NEPFa3NZSd8iiF3ps
// Date Formatter MMDDYYYY

function formatDate(date) {
  const resultArr = [];
  const dayHold = [];
  const monthHold = [];
  const dateArr = date.split("");
  for (let i = dateArr.length - 1; i >= 0; i--) {
    if (i < 2) {
      monthHold.unshift(dateArr[i]);
    }
    if (i > 2 && i < 5) {
      dayHold.unshift(dateArr[i]);
    }
    if (i > 5)
      resultArr.unshift(dateArr[i]);
  }
  resultArr.push(dayHold.join(""));
  resultArr.push(monthHold.join(""));

  return resultArr.join("");
}

// https://edabit.com/challenge/6R6gReGTGwzpwuffD
// Seven Boom

function sevenBoom(arr) {
  const str = arr.toString();
  const regex = /7/g;
  const found = str.match(regex);
  if (found === null) {
    return 'there is no 7 in the array';
  }
  if (found.toString() === '7') {
    return 'Boom!';
  }


// https://edabit.com/challenge/HZcpmfBg6NstB5soN
// Converting One Binary String to Another

function minSwaps(s1, s2) {
		const s1Arr = s1.split('');
		let s2Arr = s2.split('');
		let swapCount = 0;
		if (s1 === s2) {
			return swapCount;
		} else if (s1 !== s2) {
					for (let i = 0; i < s2Arr.length; i++) {
						if (s1Arr[i] !== s2Arr[i] && s1Arr[i] > s2Arr[i]) {
								s2Arr[i]++;
								swapCount++;
							} else if (s1Arr[i] !== s2Arr[i] && s1Arr[i] < s2Arr[i]) {
									s2Arr[i]--;
									swapCount++;
							}
				}
	 }
	 return swapCount / 2;
}


// https://edabit.com/challenge/HT2dHkbzmLDZgsS7G
// Promises IV: The Reject Callback

let promise = new Promise( (resolve, reject) => {
	let animal = "cat"
  setTimeout(() => {
		if(animal === "dog") {
			resolve("It's a dog!")
		}
	  if(animal !== "dog") {
			reject("It's not a dog!")
		}
  }, 1000)
})

// https://edabit.com/challenge/xsaGheX3yQ4g4Tb8b
// Promises V: Then

let result = "";

let promise = new Promise((resolve, reject) => {
	resolve(result);
})

promise.then((val) => {
	val = "success!";
	result = val;
});


// https://edabit.com/challenge/5puuiuvW48dEsjkzW
// Algorithms: Binary Search

function isPrime(primes, num) {
    const min = 0;
    const max = primes.length - 1;
    const midPoint = Math.trunc(max / 2);
    let result = "no";
    if (max < min) return -1;
    if (num < primes[midPoint]) {
       for (let i = min; i < midPoint; i++) {
        if(primes[i] === num) {
            result = "yes";
        }
      }
    }
    if (num > primes[midPoint]) {
        for (let i = midPoint; i < max; i++) {
            if(primes[i] === num) {
                result = "yes";
            }
        }
    }
    return result;
}

// https://edabit.com/challenge/3ZtykTsx3GSoPHyBb
// Tower of Hanoi

function towerHanoi(discs) {
    return Math.pow(2, discs) - 1;
}

// https://edabit.com/challenge/rLybgi7vcxL2ykt8F
// Promises I: What Is a Closure?

function greetingMaker() {
    function closure(name) {
    return salutation + ", " + name
    }
}

const greeting = greetingMaker;
return greeting;


// https://edabit.com/challenge/W6RRCaj8mZJgiRAgy
// Promises II: What Is a Callback?

function anotherFunc(cb) {
    let str = "bye"
    setTimeout(() => {
        cb(str);
    }, 100)
}

var doc = "hello"

function callback(str) {
    doc = str
}



// https://edabit.com/challenge/8kTQqoWYQXRsKuYEf
// Promises III: Native Promise, Introducing the Executor

let promise = new Promise(() => {
    setTimeout(() => {
        resolve('edabit');
    }, 100);
})

// https://edabit.com/challenge/3hdXjfJozQySRC3gE
// How Many Days Between Two Dates


function getDays(date1, date2) {
		const oneDay = 24 * 60 * 60 * 1000;
		const msDiff = Math.abs(date1 - date2);
		return Math.round(msDiff / oneDay);
}

// https://edabit.com/challenge/ccZBsRp6pX869gyqx
// The Karaca's Encryption Algorithm

function encrypt(word) {
	const wordArr = word.split("");
	let reverseWordArr = [];
	const endingStr = 'aca';
	let resultArr = [];
	for (let i = wordArr.length - 1; i >= 0; i--) {
			reverseWordArr.push(wordArr[i]);
	}
	for (let j = 0; j < reverseWordArr.length; j++) {
		if (reverseWordArr[j] === 'a') {
			resultArr.push('0');
		} else if (reverseWordArr[j] === 'e') {
			resultArr.push('1');
		} else if (reverseWordArr[j] === 'i') {
			resultArr.push('1');
		} else if (reverseWordArr[j] === 'o') {
			resultArr.push('2');
		} else if (reverseWordArr[j] === 'u') {
			resultArr.push('3');
		} else {
			resultArr.push(reverseWordArr[j]);
		}
	}
	resultArr.push(endingStr);
	return resultArr.join("");
}


// https://edabit.com/challenge/b7iHQDw72zzkmgCun
// Number of Boomerangs

function countBoomerangs(arr) {
    let boomerangCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+2] && arr[i] !== arr[i+1]) {
        boomerangCount++;
        }
    }
    return boomerangCount;
}

// https://edabit.com/challenge/5puuiuvW48dEsjkzW

// Algorithms: Binary Search

function isPrime(primes, num) {
  const min = 0;
  const max = primes.length - 1;
  const midPoint = Math.trunc(max / 2);
  let result = "no";
  if (max < min) return -1;
  if (num < primes[midPoint]) {
    for (let i = min; i < midPoint; i++) {
      if(primes[i] === num) {
      result = "yes";
      }
    }
  }
  if (num > primes[midPoint]) {
    for (let i = midPoint; i < max; i++) {
      if(primes[i] === num) {
      result = "yes";
      }
    }
  }
  return result;
}

// Title Case

function titleCase(title, minorWords) {
  let titleArr = title.toLowerCase().split(' ');
  let minorWordsArr = minorWords ? minorWords.toLowerCase().split(' ') : [];
  const capitalization = (str) => str === '' ? '' : str[0].toUpperCase() + str.slice(1);
  return titleArr.map((item, index) => index !== 0 && minorWordsArr && minorWordsArr.includes(item) ? item : capitalization(item)).join(' ');
}

// Oddish or Evenish
// https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH

function oddishOrEvenish(num) {
	const numStr = num.toString().split('');
	let sum = 0;
	for (let i = 0; i < numStr.length; i++) {
		sum += parseInt(numStr[i]);
	}
	if (sum % 2 === 0) {
		return 'Evenish';
	} else if (sum % 2 !==0){
		return 'Oddish';
	}
}


  // Design Patterns I: JavaScript Classes?!?
  // https://edabit.com/challenge/B48vyMsHdRtu39rfh

  function Book(author, published) {
    this.author = 'author';
    this.published = 'published';
  }

  var Author = {
    name: 'name',
    books: 'books'
  }

  var Publisher = new function () {
    this.authors = 'authors';
    this.books = 'books';
  }

  class Review {
    constructor() {
      this.rating = 'rating';
      this.user = 'user';
    }
  }

// Simple OOP Calculator
// https://edabit.com/challenge/yxKoCKemzacK6PECM

class Calculator {
	add(num1, num2) {
		return num1 + num2;
	}
	subtract(num1, num2) {
		return num1 - num2;
	}
	multiply(num1, num2) {
		return num1 * num2;
	}
	divide(num1, num2) {
		return num1 / num2;
	}
}


// Reversing a Binary String
// https://edabit.com/challenge/4s93F8ZiEdHjmMnMv

  function reversedBinaryInteger(num) {
    const reversedBinary = (num >>> 0).toString(2).split('').reverse().join('');
    const result = parseInt(reversedBinary, 2)
    return result;
  }

  // Converting Objects to Arrays
  // https://edabit.com/challenge/pPNAs5PvB3WvnDwDM

  function toArray(obj) {
    const resultArr = [];
    for (const [key, value] of Object.entries(obj)) {
      resultArr.push([key, value]);
    }
    return resultArr;
  }


// Fix the Error: Value vs. Reference Types
// https://edabit.com/challenge/3jZyJTfsXTXXwAQkA

  function checkEquals(arr1, arr2) {
    return arr1.join() === arr2.join();
  }
