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
