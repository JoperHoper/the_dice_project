import { generateRandom } from "./diceroll.js";

console.log(generateRandom('testcase1'));
console.log(generateRandom(10));
console.log(generateRandom(true));
console.log(generateRandom(3.45));
console.log(generateRandom(-5));
console.log(generateRandom('$^&*('));