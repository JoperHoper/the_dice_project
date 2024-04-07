export function generateRandom(maxLimit) {
  if (isNumber(maxLimit)) {
    if (!isInt(maxLimit)){
        console.log('This is not an integer');
        return -1;
    }
    if (maxLimit < 0){
        console.log('This is a negative number');
        return -1;
    }
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    return rand;
  }
  else {
    console.log('This is not a number');
    return -1;
  }
}

function isNumber(value) {
  return typeof value === "number";
}

function isInt(n) { 
    return parseInt(n) === n;
};