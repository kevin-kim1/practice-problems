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
