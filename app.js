import { find } from "./arrayFn.js";
import { oddNumberChecker, evenNumberCheck } from "./utilsFn.js"
import { objectKeys, objectValues, objectEntries } from "./objectFn.js"

console.log(evenNumberCheck(19))

const obj1 = {
    name: "ifeoluwah"
}

const obj2 = {
    name: "Motunrayo",
    dept: "AGE",
    age: 20
}

const obj3 = {
    age: 18
}

console.log(objectKeys(obj2))
console.log(objectValues(obj2))
console.log(objectEntries(obj2))
