// OBJECT UTILITY FUNCTION
function objectAndCallbackCheck(object, callback) {
    if ((!object?.__proto__ || object?.__proto__ === Array.prototype || object?.__proto__ === Function.prototype || object?.__proto__ === String.prototype || object?.__proto__ === Number.prototype) || typeof callback !== "function") {
        if (typeof callback !== "function" && (!object?.__proto__ || object?.__proto__ === Array.prototype || object?.__proto__ === Function.prototype || object?.__proto__ === String.prototype || object?.__proto__ === Number.prototype)) {
            throw new Error("The first argument should be an object and the second argument should be a function")
        } else if (typeof callback !== "function") {
            throw new Error("The second argument should be a function")
        } else {
            throw new Error("The first argument should be an object")
        }
    }
}

//Looping through an object, similar to forEach method on the Array.prototype
export function forEachObject(object, callback) {
    //Check the that the first argument is an array and the second argument is a callback function.
    objectAndCallbackCheck(object, callback)
    for (let key in object) {
        callback(object[key], key, object);
    }
}

//Creates a new object from the objects
export function objectAssign(target, ...source) {
    if ((!target?.__proto__ || target?.__proto__ === Array.prototype || target?.__proto__ === Function.prototype || target?.__proto__ === String.prototype || target?.__proto__ === Number.prototype)) {
        throw new Error("first argument should be an object");
    }
    for (let i = 0; i < source.length; i++) {
        if (!source[i]?.__proto__ || source[i]?.__proto__ === Array.prototype || source[i]?.__proto === Function.prototype || source[i]?.__proto === String.prototype || source[i]?.__proto__ === Number.prototype) {
            throw new Error("argument should be an object")
        }
    }
    const clone = { ...target };
    for (let i = 0; i < source.length; i++) {
        for (let key in source[i]) {
            clone[key] = source[i][key]
        }
    }

    return clone;
}

//Extracts the property names in an object
export function objectKeys(object) {
    if ((!object?.__proto__ || object?.__proto__ === Array.prototype || object?.__proto__ === Function.prototype || object?.__proto__ === String.prototype || object?.__proto__ === Number.prototype)) {
        throw new Error("Argument should be an object");
    }
    const keys = [];

    for (let key in object) {
        keys.push(key);
    }
    return keys;
}

//Extracts the property values of an object
export function objectValues(object) {
    if ((!object?.__proto__ || object?.__proto__ === Array.prototype || object?.__proto__ === Function.prototype || object?.__proto__ === String.prototype || object?.__proto__ === Number.prototype)) {
        throw new Error("Argument should be an object");
    }
    const values = [];

    for (let key in object) {
        values.push(object[key]);
    }
    return values;
}

//Extracts each entry of an object
export function objectEntries(object) {
    if ((!object?.__proto__ || object?.__proto__ === Array.prototype || object?.__proto__ === Function.prototype || object?.__proto__ === String.prototype || object?.__proto__ === Number.prototype)) {
        throw new Error("Argument should be an object");
    }
    const entries = [];

    for (let key in object) {
        const entry = [key, object[key]]
        entries.push(entry);
    }
    return entries;
}

