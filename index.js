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


// https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk
// Remainder operator

function remainder(x, y) {
  return x % y;
}
