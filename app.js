import { reduce } from "./arrayFn.js";
import { partial } from "./utilsFn.js"


function multiple(x, y, z) {
    return x * y * z
}

let result = partial(multiple)(1, undefined, 3)(4)
console.log(result)