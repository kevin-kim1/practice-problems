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

// Bitwise Operator to Check Odd, Regular Expression to Check Even
// https://edabit.com/challenge/uroPr8CNouxobtShi

function isOdd(number) {
	return (number & 1) ? 'Yes' : 'No';
}


function isEven(number) {
	const numArr = number.split('');
	const regex = new RegExp("^\d*[02468]$");
	const regexTest = regex.test(numArr[numArr.length - 1]);
	return (regexTest) ? 'Yes' : 'No';
}


// Fibonacci Recursion
// https://edabit.com/challenge/Cfe88oSTXyxihiPhu

function fib(n) {
	if (n === 1) {
		return 1;
	} else if (n === 0) {
		return 0;
	}
  return fib(n - 1) + fib(n - 2);
}


// Distance Between Two Points
// https://edabit.com/challenge/caeSeQ3K53GMQKenX

function getDistance(a, b) {
	const distance = Math.sqrt(Math.pow(b.x - a.x, 2)  + Math.pow(b.y - a.y, 2));
	return parseFloat(distance.toFixed(3));
}


// Positive Dominant
// https://edabit.com/challenge/7pkKPYtTJzpxRMckZ

function isPositiveDominant(a) {
	let uniquePositives = 0;
	let uniqueNegatives = 0;
	let hold = 0
	for (let i = 0; i < a.length; i++) {
			if (a[i] > 0 && hold !== a[i]) {
				 uniquePositives++;
				 hold = a[i];
			} else if (a[i] < 0 && hold !== a[i]) {
				 uniqueNegatives++;
				 hold = a[i];
			}
	}
	if(uniquePositives > uniqueNegatives) {
		return true;
	} else {
		return false;
	}
}

// Iterated Square Root

  function iSqrt(n) {
    if (n < 0) return 'invalid';
    var count = 0;
    while (n >= 2) {
      n = Math.sqrt(n);
      count++;
    }
    return count;
  }


  // Finding Common Elements
  // https://edabit.com/challenge/jtAvQyyDpFA2EaCcj

  function commonElements(arr1, arr2) {
    let arr1Set = new Set();
    let resultArr = []
    for (let arr1Index = 0; arr1Index < arr1.length; arr1Index++) {
      arr1Set.add(arr1[arr1Index]);
    }
    for (let arr2Index = 0; arr2Index < arr2.length; arr2Index++) {
      if (arr1Set.has(arr2[arr2Index])) {
        resultArr.push(arr2[arr2Index]);
      }
    }
    return resultArr;

  // Length of a Nested Array
  // https://edabit.com/challenge/yXSTvCNen2DQHyrh6

  function getLength(arr) {
    const flattenArr = arr.flat(Infinity);
    return flattenArr.length;

  }

  // Safecracker
  // https://edabit.com/challenge/ggDcLksKsBd8xAiFd

  const safecracker = (start, increments) => {
	const comboArr = [];
	comboArr.push(start - increments[0]);
	comboArr.push(start - increments[0] + increments[1]);
	comboArr.push(start - increments[0] + increments[1] - increments[2]);
	for (let index = 0; index < comboArr.length; index++) {
		 if (comboArr[index] < 0) {
			  comboArr[index] += 100;
		 } else if (comboArr[index] >= 100) {
			 comboArr[index] -= 100;
		 }
	}
	return comboArr;
};


//Count Instances of a Character in a String
// https://edabit.com/challenge/kbFhwaDyrd79JrgeB

function charCount(myChar, str) {
	const strArr = str.split('');
	let count = 0;
	for (let i = 0; i < strArr.length; i++) {
		  if(myChar === strArr[i]) {
				count++;
			}
	}
	return count;
}

// https://edabit.com/challenge/WjXHgXLAvMxNvD6h2
// Numbers in Strings

function numInStr(arr) {
	const resultArr = [];
	const regex = /[0-9]/g;
	for (let i = 0; i < arr.length; i++) {
		  if (arr[i].match(regex)) {
				 resultArr.push(arr[i])
		  }
	}
  return resultArr;
}


// Calculated Bonus
// https://edabit.com/challenge/cYcKEFos6DjYQpGS7

function calculateBonus(days) {
	let bonus = 0;
	if (days <= 32) return bonus;
	if (days > 32) {
		 for (let i = 32; i <= days; i++) {
			   if (i >= 33 &&  i <= 40) {
					  bonus += 325;
				 } else if (i >= 41 &&  i <= 48) {
					  bonus += 550;
				 } else if (i > 48) {
					  bonus += 600;
				 }
		 }
	}
	return bonus;
}

// Temperature Converter
// https://edabit.com/challenge/QW5CApff3WAGszrWY

function tempConversion(celsius) {
	const resultArr = [];
	const f = celsius * (9/5) + 32;
	const k = celsius + 273.15;
	const numF = parseFloat(f.toFixed(2));
	const numK = parseFloat(k.toFixed(2));
	if (numF <= -459.69 && numK <= -0.01) {
		 return 'Invalid';
	}
	resultArr.push(numF);
	resultArr.push(numK);
	return resultArr;
}

// Sum of Slices of an Array (Part 1)
// https://edabit.com/challenge/iaySFYs3oTQDboeqd

const sumOfSlices = (arr) => {
	let resultArr = [];
	let sum = 0;
	for (let i = 0; i < arr.length; i++){
		if (sum + arr[i] < 100) {
			 sum += arr[i]
		} else {
				resultArr.push(sum);
			  sum = arr[i];
		}

		if(i + 1 === arr.length)
			resultArr.push(sum)
	}

	return resultArr;
}

// LCM of Two Numbers
// https://edabit.com/challenge/ERmrS3QrK7sEt4PAt

function lcm(n1, n2) {
	if (n1 % n2 === 0 && n1 === n2) {
		 return n1;
	}
	if (n2 % n1 === 0 && n2 > n1) {
		 return n2;
	}
	if (n2 % n1 !== 0) {
		 return n1 * n2;
	}
}

// Leader in an Array
// https://edabit.com/challenge/wYdQGudMRdzME5B7m

function leader(arr) {
	const maxNum = Math.max(...arr);
	const leaderArr = [];
	const arrLen = arr.length;
	for (let i = 0; i < arrLen; i++) {
		  if (arr[i] === maxNum) {
				 for (i; i < arrLen; i++) {
					   if (i === arrLen - 1) {
							 leaderArr.push(arr[i]);
						 }
					   if(arr[i] <= maxNum && arr[i] > arr[i + 1]) {
							 leaderArr.push(arr[i]);
						 }
				 }
			}
	}


// Pentagonal Number
// https://edabit.com/challenge/wmdanmJkaT9waTg3y

function pentagonal(num) {
	return ((5 * Math.pow(num, 2)) - (5 * num) + 2) / 2;
}


// Double Character Swap
// https://edabit.com/challenge/NfBqxaDu4KoxAysWF

function doubleSwap(str, c1, c2) {
	let strArr = str.split('');
	for (let i = 0; i < strArr.length; i++) {
			if (strArr[i] === c1) {
				 strArr[i] = c2;
			} else if (strArr[i] === c2) {
				 strArr[i] = c1;
			}
	}
	return strArr.join('');
}
