import { forEach } from "./arrayFn.js";

//Convert a function that can be invoked with multiple argument to a function that can be invoked with one argument
export function unary(callback) {
    if (typeof callback !== "function") {
        throw new Error("Callback should be a function")
    }
    return callback.length === 1 ? callback : (arg) => callback(arg);
}

//The function passed as callback will only be called once after which it return undefined
export function once(callback) {
    if (typeof callback !== "function") {
        throw new Error("Callback should be a function")
    }
    let done = false;
    return (...args) => {
        return done ? undefined : (done = true, callback(...args))
    }
}

// Memoization
export function memoized(callback) {
    if (typeof callback !== "function") {
        throw new Error("Callback should be a function")
    }
    let cache = {};
    return (...args) => {
        return cache[args] || (cache[args] = callback(...args))
    }
}

//This function calculates the nth factorial
export function factorial(n) {
    if (Array.isArray(n) || n === "" || typeof +n !== "number" || isNaN(+n)) {
        throw new Error("n should be a number")
    }
    if (+n < 2) {
        return 1;
    }
    return +n * factorial(+n - 1);
}

export function curry(fn) {
    if (typeof fn !== "function") {
        throw new Error("Callback should be a function")
    }
    return function curriedFn(...args) {
        if (fn.length > args.length) {
            return function () {
                return curriedFn.apply(null, args.concat([].slice.call(arguments)))
            }
        }
        return fn.apply(null, args)
    }

}


export function partial(fn) {
    if (typeof fn !== "function") {
        throw new Error("Callback should be a function")
    }
    return function partialFn(...partialArgs) {
        return function (...remainingArgs) {
            let clonePartialArgs = [...partialArgs]
            let j = 0;
            for (let i = 0; i < fn.length && j < remainingArgs.length; i++) {
                if (clonePartialArgs[i] === undefined) {
                    clonePartialArgs[i] = remainingArgs[j++];
                }
            }
            return fn.apply(fn, clonePartialArgs);
        }
    }
}

export function compose(...fns) {
    forEach(fns, (fn) => {
        if (typeof fn !== "function") {
            throw new Error("Callback should be a function")
        }
    })
    return function (data) {
        return fns.reverse().reduce((acc, current) => {
            return current(acc);
        }, data)
    }
}
export function pipe(...fns) {
    forEach(fns, (fn) => {
        if (typeof fn !== "function") {
            throw new Error("Callback should be a function")
        }
    })
    return function (data) {
        return fns.reduce((acc, current) => {
            return current(acc)
        }, data)
    }
}

export function primeNumberCheck(num) {
    if (Array.isArray(num) || num === "" || typeof +num !== "number" || isNaN(+num)) {
        throw new Error("num should be a number")
    }
    let checker = true;
    if (num === 0 || num === 1) {
        return (checker = false, checker);
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return (checker = false, checker)
        }
    }
    return checker
}

export function evenNumberCheck(num) {
    if (Array.isArray(num) || num === "" || typeof +num !== "number" || isNaN(+num)) {
        throw new Error("num should be a number")
    }
    return num % 2 === 0 ? true : false;
}
export function oddNumberChecker(num) {
    if (Array.isArray(num) || num === "" || typeof +num !== "number" || isNaN(+num)) {
        throw new Error("num should be a number")
    }
    return num % 2 === 0 ? false : true;
}