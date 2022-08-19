import exp from "constants";
import { describe, it, expect, vi } from "vitest";

import * as fn from "../arrayFn.js";

describe("forEach function", () => {
    it("should throw error if the first argument provided is not an array and second argument is not a function", () => {
        const firstArg = {};
        const secondArg = ``;

        const result = () => {
            fn.forEach(firstArg, secondArg);
        }

        expect(result).toThrow("The first argument should be an array and the second argument should be a function")
    })
    it("should throw error if the first argument is not an array", () => {
        const value1 = 1;
        const value2 = {};
        const value3 = "";

        const result1 = () => {
            fn.forEach(value1, () => { })
        }
        const result2 = () => {
            fn.forEach(value2, () => { })
        }
        const result3 = () => {
            fn.forEach(value3, () => { })
        }

        expect(result1).toThrow('The first argument should be an array')
        expect(result2).toThrow('The first argument should be an array')
        expect(result3).toThrow('The first argument should be an array')
    })

    it("should throw error if the second argument is not a function", () => {
        const value1 = 1;
        const value2 = {};
        const value3 = "";

        const result1 = () => {
            fn.forEach([], value1)
        }
        const result2 = () => {
            fn.forEach([], value2)
        }
        const result3 = () => {
            fn.forEach([], value3)
        }

        expect(result1).toThrow('The second argument should be a function')
        expect(result2).toThrow('The second argument should be a function')
        expect(result3).toThrow('The second argument should be a function')
    })

    it("should loop through each item in the array", () => {
        const value = [1, 2];
        let item1, item2;

        fn.forEach(value, (item, index) => {
            index === 0 ? item1 = item : index === 1 ? item2 = item : undefined;
        })

        expect(item1).toBe(value[0])
        expect(item2).toBe(value[1])
    })
    it("should invoked callback the array length number of times", () => {
        const value = [1, 2];
        const callback = vi.fn();

        fn.forEach(value, callback);

        expect(callback).toBeCalledTimes(value.length)
    })
    it("should not return any value", () => {
        const value = [1, 2];
        const callback = () => { }

        const result = fn.forEach(value, callback);

        expect(result).toBeUndefined();
    })
})



describe("every function", () => {
    it("should throw error if the first argument provided is not an array and second argument is not a function", () => {
        const firstArg = {};
        const secondArg = ``;

        const result = () => {
            fn.every(firstArg, secondArg);
        }

        expect(result).toThrow("The first argument should be an array and the second argument should be a function")
    })
    it("should throw error if the first argument is not an array", () => {
        const value1 = 1;
        const value2 = {};
        const value3 = "";

        const result1 = () => {
            fn.every(value1, () => { })
        }
        const result2 = () => {
            fn.every(value2, () => { })
        }
        const result3 = () => {
            fn.every(value3, () => { })
        }

        expect(result1).toThrow('The first argument should be an array')
        expect(result2).toThrow('The first argument should be an array')
        expect(result3).toThrow('The first argument should be an array')
    })

    it("should throw error if the second argument is not a function", () => {
        const value1 = 1;
        const value2 = {};
        const value3 = "";

        const result1 = () => {
            fn.every([], value1)
        }
        const result2 = () => {
            fn.every([], value2)
        }
        const result3 = () => {
            fn.every([], value3)
        }

        expect(result1).toThrow('The second argument should be a function')
        expect(result2).toThrow('The second argument should be a function')
        expect(result3).toThrow('The second argument should be a function')
    })

    it("should invoke callback", () => {
        const value = [1, 2, 3, 4];
        const callback = vi.fn();

        fn.every(value, callback);

        expect(callback).toBeCalled()
    })

    it("should return value of type boolean", () => {
        const value = [1, 2, 3, 4];
        const callback = (item) => {
            return item > 3
        }

        const result = fn.every(value, callback);

        expect(result).toBeTypeOf("boolean");
    })

    it("should return true if every element in the array passes the condition", () => {
        const value = [1, 2, 3, 4];
        const callback = (item) => {
            return typeof item === "number"
        }

        const result = fn.every(value, callback);

        expect(result).toBe(true);
    })

    it("should return false if any element in the array fails the condition", () => {
        const value = [1, 2, 3, 4];
        const callback = (item) => {
            return item > 3;
        }

        const result = fn.every(value, callback);

        expect(result).toBe(false);
    })
})



describe("some function", () => {
    it("should throw error if the first argument provided is not an array and second argument is not a function", () => {
        const firstArg = {};
        const secondArg = ``;

        const result = () => {
            fn.some(firstArg, secondArg);
        }

        expect(result).toThrow("The first argument should be an array and the second argument should be a function")
    })
    it("should throw error if the first argument is not an array", () => {
        const value1 = 1;
        const value2 = {};
        const value3 = "";

        const result1 = () => {
            fn.some(value1, () => { })
        }
        const result2 = () => {
            fn.some(value2, () => { })
        }
        const result3 = () => {
            fn.some(value3, () => { })
        }

        expect(result1).toThrow('The first argument should be an array')
        expect(result2).toThrow('The first argument should be an array')
        expect(result3).toThrow('The first argument should be an array')
    })

    it("should throw error if the second argument is not a function", () => {
        const value1 = 1;
        const value2 = {};
        const value3 = "";

        const result1 = () => {
            fn.some([], value1)
        }
        const result2 = () => {
            fn.some([], value2)
        }
        const result3 = () => {
            fn.some([], value3)
        }

        expect(result1).toThrow('The second argument should be a function')
        expect(result2).toThrow('The second argument should be a function')
        expect(result3).toThrow('The second argument should be a function')
    })

    it("should return value of type boolean", () => {
        const value = [1, 2, 3, 4];
        const callback = (item) => {
            return item > 3
        }

        const result = fn.some(value, callback);

        expect(result).toBeTypeOf("boolean");
    })

    it("should return true if any element in the array passes the condition", () => {
        const value = [1, 2, 3, 4];
        const callback = (item) => {
            return item < 2;
        }

        const result = fn.some(value, callback);

        expect(result).toBe(true);
    })

    it("should return false if all element in the array fails the condition", () => {
        const value = [1, 2, 3, 4];
        const callback = (item) => {
            return typeof item === "string";
        }

        const result = fn.some(value, callback);

        expect(result).toBe(false);
    })
    it("should invoke callback", () => {
        const value = [1, 2, 3, 4];
        const callback = vi.fn();

        fn.some(value, callback);

        expect(callback).toBeCalled()
    })
})


describe("map function", () => {
    it("should throw error if the first argument provided is not an array and second argument is not a function", () => {
        const firstArg = {};
        const secondArg = ``;

        const result = () => {
            fn.map(firstArg, secondArg);
        }

        expect(result).toThrow("The first argument should be an array and the second argument should be a function")
    })
    it("should throw error if the first argument is not an array", () => {
        const value1 = 1;
        const value2 = {};
        const value3 = "";

        const result1 = () => {
            fn.map(value1, () => { })
        }
        const result2 = () => {
            fn.map(value2, () => { })
        }
        const result3 = () => {
            fn.map(value3, () => { })
        }

        expect(result1).toThrow('The first argument should be an array')
        expect(result2).toThrow('The first argument should be an array')
        expect(result3).toThrow('The first argument should be an array')
    })

    it("should throw error if the second argument is not a function", () => {
        const value1 = 1;
        const value2 = {};
        const value3 = "";

        const result1 = () => {
            fn.map([], value1)
        }
        const result2 = () => {
            fn.map([], value2)
        }
        const result3 = () => {
            fn.map([], value3)
        }

        expect(result1).toThrow('The second argument should be a function')
        expect(result2).toThrow('The second argument should be a function')
        expect(result3).toThrow('The second argument should be a function')
    })

    it("should loop through each item in the array", () => {
        const value = [1, 2];
        let item1, item2;

        fn.map(value, (item, index) => {
            index === 0 ? item1 = item : index === 1 ? item2 = item : undefined;
        })

        expect(item1).toBe(value[0])
        expect(item2).toBe(value[1])
    })
    it("should invoked callback the array length number of times", () => {
        const value = [1, 2];
        const callback = vi.fn();

        fn.map(value, callback);

        expect(callback).toBeCalledTimes(value.length)
    })
    it("should always return an array", () => {
        const value = [1, 2];
        const callback = () => { }

        const result = Array.isArray(fn.map(value, callback));

        expect(result).toBe(true);
    })
    it("should modified the provided array with the callback", () => {
        const value1 = [1, 2];
        const callback1 = (x) => x + x;
        const value2 = ["Ifeoluwa", "Doyin"];
        const callback2 = (x) => `Mr ${x}`;

        const result1 = fn.map(value1, callback1);
        const result2 = fn.map(value2, callback2);

        expect(result1).toEqual([value1[0] + value1[0], value1[1] + value1[1]])
        expect(result2).toEqual([`Mr ${value2[0]}`, `Mr ${value2[1]}`])
    })
})

describe("filter function", () => { })