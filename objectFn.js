// OBJECT UTILITY FUNCTION
function objectAndCallbackCheck(object, callback) {
    if ((object.__proto === Array.prototype || object.__proto === Function.prototype) || typeof callback !== "function") {
        if (typeof callback !== "function" && (object.__proto === Array.prototype || object.__proto === Function.prototype)) {
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
    for (let key in object) {
        callback(object[key], key, object);
    }
}

//Creates a new object from the objects
export function objectAssign(target, ...source) {
    if ((target.__proto === Array.prototype || target.__proto === Function.prototype)) {
        throw new Error("first argument should be an object");
    }
    for (let i = 0; i < source.length; i++) {
        if (source[i].__proto__ !== Object.prototype) {
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
    if ((object.__proto === Array.prototype || object.__proto === Function.prototype)) {
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
    if ((object.__proto === Array.prototype || object.__proto === Function.prototype)) {
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
    if ((object.__proto === Array.prototype || object.__proto === Function.prototype)) {
        throw new Error("Argument should be an object");
    }
    const entries = [];

    for (let key in object) {
        const entry = [key, object[key]]
        entries.push(entry);
    }
    return entries;
}

