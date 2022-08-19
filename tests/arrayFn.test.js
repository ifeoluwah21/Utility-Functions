
import exp from "constants";
import { describe, it, expect, vi } from "vitest";

import * as fn from "../arrayFn.js";

export { expect }

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
    it("should be able to modified the provided array with the callback", () => {
        const value1 = [1, 2];
        const callback1 = (x) => x + x;
        const value2 = ["Ifeoluwa", "Doyin"];
        const callback2 = (x) => `Mr ${x}`;

        const result1 = fn.map(value1, callback1);
        const result2 = fn.map(value2, callback2);

        expect(result1).toEqual(value1.map(callback1))
        expect(result2).toEqual(value2.map(callback2))
    })
})

describe("filter function", () => {
    it("should throw error if the first argument provided is not an array and second argument is not a function", () => {
        const firstArg = {};
        const secondArg = ``;

        const result = () => {
            fn.filter(firstArg, secondArg);
        }

        expect(result).toThrow("The first argument should be an array and the second argument should be a function")
    })
    it("should throw error if the first argument is not an array", () => {
        const value1 = 1;
        const value2 = {};
        const value3 = "";

        const result1 = () => {
            fn.filter(value1, () => { })
        }
        const result2 = () => {
            fn.filter(value2, () => { })
        }
        const result3 = () => {
            fn.filter(value3, () => { })
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
            fn.filter([], value1)
        }
        const result2 = () => {
            fn.filter([], value2)
        }
        const result3 = () => {
            fn.filter([], value3)
        }

        expect(result1).toThrow('The second argument should be a function')
        expect(result2).toThrow('The second argument should be a function')
        expect(result3).toThrow('The second argument should be a function')
    })

    it("should loop through each item in the array", () => {
        const value = [1, 2];
        let item1, item2;

        fn.filter(value, (item, index) => {
            index === 0 ? item1 = item : index === 1 ? item2 = item : undefined;
        })

        expect(item1).toBe(value[0])
        expect(item2).toBe(value[1])
    })

    it("should invoked callback the array length number of times", () => {
        const value = [1, 2];
        const callback = vi.fn();

        fn.filter(value, callback);

        expect(callback).toBeCalledTimes(value.length)
    })

    it("should always return an array", () => {
        const value = [1, 2];
        const callback = () => { }

        const result = Array.isArray(fn.filter(value, callback));

        expect(result).toBe(true);
    })

    it("should return an array of the element that passes the provided condition in the callback", () => {
        const value1 = [`Motunrayo`, `Ifeoluwa`, `Doyin`, `Favour`];
        const value2 = [23, 100, 12, 7];
        const callback1 = x => x.length > 6;
        const callback2 = x => x % 2 === 0;

        const result1 = fn.filter(value1, callback1)
        const result2 = fn.filter(value2, callback2)

        expect(result1).toEqual(value1.filter(callback1))
        expect(result2).toEqual(value2.filter(callback2))

    })
})

describe("reduce function", () => {
    it("should throw error if the first argument provided is not an array and second argument is not a function", () => {
        const firstArg = {};
        const secondArg = ``;

        const result = () => {
            fn.reduce(firstArg, secondArg);
        }

        expect(result).toThrow("The first argument should be an array and the second argument should be a function")
    })
    it("should throw error if the first argument is not an array", () => {
        const value1 = 1;
        const value2 = {};
        const value3 = "";

        const result1 = () => {
            fn.reduce(value1, () => { })
        }
        const result2 = () => {
            fn.reduce(value2, () => { })
        }
        const result3 = () => {
            fn.reduce(value3, () => { })
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
            fn.reduce([], value1)
        }
        const result2 = () => {
            fn.reduce([], value2)
        }
        const result3 = () => {
            fn.reduce([], value3)
        }

        expect(result1).toThrow('The second argument should be a function')
        expect(result2).toThrow('The second argument should be a function')
        expect(result3).toThrow('The second argument should be a function')
    })

    it("should invoked the callback the length of the array times if the initialValue is provided", () => {
        const value = [1, 2, 3];
        const callback = vi.fn((a, cur, curIndex, array) => {
            return a + cur;
        })

        fn.reduce(value, callback, 0);

        expect(callback).toBeCalledTimes(value.length);
    })

    it("should invoked the callback n-1 times if the initialValue is undefined, where n is the array length", () => {
        const value = [1, 2, 3];
        const callback = vi.fn((a, cur, curIndex, array) => {
            return a + cur;
        })

        fn.reduce(value, callback);

        expect(callback).toBeCalled(value.length - 1);
    })

    it("should invoked the callback with return value of previous call and the initial value if provided", () => {
        const value = [1, 2, 3];
        const callback1 = vi.fn((a, cur, curIndex, array) => {
            return a + cur;
        })

        const callback2 = vi.fn((a, cur, curIndex, array) => {
            return a + cur;
        })

        fn.reduce(value, callback1, 0);
        fn.reduce(value, callback2);

        expect(callback1).toHaveBeenCalledWith(0, 1, 0, value);
        expect(callback1).toHaveBeenCalledWith(1, 2, 1, value);
        expect(callback1).toHaveBeenCalledWith(3, 3, 2, value);

        expect(callback2).toHaveBeenCalledWith(1, 2, 1, value);
        expect(callback2).toHaveBeenCalledWith(3, 3, 2, value);
    })

    it("should perform the same action as Array.reduce() method", () => {
        const value = [1, 2, 3];
        const callback = vi.fn((a, cur, curIndex, array) => {
            return a + cur;
        })

        const result1 = fn.reduce(value, callback, 0)
        const result2 = fn.reduce(value, callback)

        expect(result1).toBe(value.reduce(callback, 0))
        expect(result2).toBe(value.reduce(callback))
    })


})

describe("find function", () => {
    it("should throw error if the first argument provided is not an array and second argument is not a function", () => {
        const firstArg = {};
        const secondArg = ``;

        const result = () => {
            fn.find(firstArg, secondArg);
        }

        expect(result).toThrow("The first argument should be an array and the second argument should be a function")
    })
    it("should throw error if the first argument is not an array", () => {
        const value1 = 1;
        const value2 = {};
        const value3 = "";

        const result1 = () => {
            fn.find(value1, () => { })
        }
        const result2 = () => {
            fn.find(value2, () => { })
        }
        const result3 = () => {
            fn.find(value3, () => { })
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
            fn.find([], value1)
        }
        const result2 = () => {
            fn.find([], value2)
        }
        const result3 = () => {
            fn.find([], value3)
        }

        expect(result1).toThrow('The second argument should be a function')
        expect(result2).toThrow('The second argument should be a function')
        expect(result3).toThrow('The second argument should be a function')
    })

    it("should perform the same same action as Array.find()", () => {
        const value = [`Ifeoluwa`, `Doyin`, `Motunrayo`, `Favour`];
        const callback = x => x.length > 7

        const result = fn.find(value, callback);

        expect(result).toBe(value.find(callback));
    })
})