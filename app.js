
import { oddNumberChecker, evenNumberCheck, compose, curry, partial } from "./utilsFn.js"


const testValue1 = x => {
    return x + x
};
const testValue2 = x => {
    return x + 2;
}
const testValue3 = x => {
    return x + 3;
}
const identity = x => {
    return x;
};
let values = [testValue1, testValue2, identity, testValue3].reverse()
console.log(compose(...values)(2))