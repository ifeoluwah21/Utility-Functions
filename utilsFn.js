//Convert a function that can be invoked with multiple argument to a function that can be invoked with one argument
export function unary(callback) {
    return callback.length === 1 ? callback : (arg) => callback(arg);
}

//The function passed as callback will only be called once after which it return undefined
export function once(callback) {
    let done = false;
    return (...args) => {
        return done ? undefined : (done = true, callback(...args))
    }
}

// Memoization
export function memoized(callback) {
    let cache = {};
    return (...args) => {
        return cache[args] || (cache[args] = callback(...args))
    }
}

//This function calculates the nth factorial
export function factorial(n) {
    if (n < 2) {
        return 1;
    }
    return n * factorial(n - 1);
}

export function curry(fn) {
    let args = []
    return function curriedFn(b) {
        args.push(b)

        if (args.length < fn.length) {
            return function (c) {
                return curriedFn(c)
            }
        }

        return fn.apply(null, args)
    }
}


export function partial(fn) {

    return function partialFn(...partialArgs) {
        let clonePartialArgs = [...partialArgs]
        return function (...remainingArgs) {
            let j = 0;
            for (let i = 0; i < clonePartialArgs.length && j < remainingArgs.length; i++) {
                if (clonePartialArgs[i] === undefined) {
                    clonePartialArgs[i] = remainingArgs[j++];
                }
            }
            return fn.apply(fn, clonePartialArgs);
        }
    }
}

export function compose(...fns) {
    return function (data) {
        fns.reverse().reduce((acc, current) => {
            return current(acc)
        }, data)
    }
}
export function pipe(...fns) {
    return function (data) {
        fns.reduce((acc, current) => {
            return current(acc)
        }, data)
    }
}