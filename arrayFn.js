//Array and Callback check
function arrayAndCallbackCheck(array, callback) {
    if (!Array.isArray(array) || typeof callback !== "function") {
        if (typeof callback !== "function" && !Array.isArray(array)) {
            throw new Error("The first argument should be an array and the second argument should be a function")
        } else if (typeof callback !== "function") {
            throw new Error("The second argument should be a function")
        } else {
            throw new Error("The first argument should be an array")
        }
    }
}
// ARRAY UTILITY FUNCTION

//Works like the forEach method in the Array prototype

export function forEach(array, callback) {
    //Check the that the first argument is an array and the second argument is a callback function.
    arrayAndCallbackCheck(array, callback);
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

//Works like the every method in the Array prototype
export function every(array, callback) {
    //Check the that the first argument is an array and the second argument is a callback function.
    arrayAndCallbackCheck(array, callback);
    let done = true;
    for (let i = 0; i < array.length; i++) {
        done = done && callback(array[i], i, array);
    }
    return done;
}

//Works like the some method in the Array prototype
export function some(array, callback) {
    //Check the that the first argument is an array and the second argument is a callback function.
    arrayAndCallbackCheck(array, callback);
    let done = false;
    for (let i = 0; i < array.length; i++) {
        done = callback(array[i], i, array) || done;
    }
    return done;
}

//Works like the map method in the Array prototype
export function map(array, callback) {
    //Check the that the first argument is an array and the second argument is a callback function.
    arrayAndCallbackCheck(array, callback);
    let mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        mappedArray.push(callback(array[i], i, array));
    }
    return mappedArray;
}

//Works like the filter method in the Array prototype
export function filter(array, callback) {
    //Check the that the first argument is an array and the second argument is a callback function.
    arrayAndCallbackCheck(array, callback);
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array) ? filteredArray.push(array[i]) : undefined;
    }
    return filteredArray;
}

//Works like the reduce method in the Array prototype
export function reduce(array, callback, initialValue) {
    //Check the that the first argument is an array and the second argument is a callback function.
    arrayAndCallbackCheck(array, callback);

    let accumulator;

    if (initialValue !== undefined) {
        accumulator = initialValue
    } else {
        accumulator = array[0];
    }
    if (initialValue !== undefined) {
        for (let i = 0; i < array.length; i++) {
            accumulator = callback(accumulator, array[i], i, array);
        }
    } else {
        for (let i = 1; i < array.length; i++) {
            accumulator = callback(accumulator, array[i], i, array);
        }
    }

    return accumulator;
}

//Works like the find method in the Array prototype
export function find(array, callback) {
    //Check the that the first argument is an array and the second argument is a callback function.
    arrayAndCallbackCheck(array, callback);
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
}