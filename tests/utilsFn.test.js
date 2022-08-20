import { describe, it, expect, vi } from "vitest";
import * as fn from "../utilsFn.js"

describe("Unary Function", () => {
    it("should throw error if the value passed is not a function", () => {
        const testValue1 = {};
        const testValue2 = [];
        const testValue3 = "";

        const result1 = () => {
            fn.unary(testValue1)
        }
        const result2 = () => {
            fn.unary(testValue2)
        }
        const result3 = () => {
            fn.unary(testValue3)
        }

        expect(result1).toThrow("Callback should be a function")
        expect(result2).toThrow("Callback should be a function")
        expect(result3).toThrow("Callback should be a function")
    })

    it("should make the passed function take only one argument on invoking", () => {
        const testCallBack = vi.fn().mockImplementation((x, y, z) => {
            return x, y, z;
        })

        const result = fn.unary(testCallBack);
        result(2, 1, 3);

        expect(testCallBack).toHaveBeenCalledWith(2);
    })
    it("should return the function passed if it is a unary function", () => {
        const testCallBack = x => { };

        const result = fn.unary(testCallBack);

        expect(result).toBe(testCallBack);
    })
    it("should always return a function provided that a function is passed as value", () => {
        const testCallBack = (x, y, z) => { };

        const result = fn.unary(testCallBack);

        expect(result).toBeTypeOf("function");
    })
})

describe("once function", () => {
    it("should throw error if the value passed is not a function", () => {
        const testValue1 = {};
        const testValue2 = [];
        const testValue3 = "";

        const result1 = () => {
            fn.once(testValue1)
        }
        const result2 = () => {
            fn.once(testValue2)
        }
        const result3 = () => {
            fn.once(testValue3)
        }

        expect(result1).toThrow("Callback should be a function")
        expect(result2).toThrow("Callback should be a function")
        expect(result3).toThrow("Callback should be a function")
    })

    it("should always return a function provided that a function is passed as value", () => {
        const testCallBack = (x, y, z) => { };

        const result = fn.once(testCallBack);

        expect(result).toBeTypeOf("function");
    })

    it("the passed function should only be called once", () => {
        const testCallBack = vi.fn();

        const result = fn.once(testCallBack);
        result();
        result();
        result();
        result();

        expect(testCallBack).toHaveBeenCalledOnce();
    })
})

describe("memoized function", () => {
    it("should throw error if the value passed is not a function", () => {
        const testValue1 = {};
        const testValue2 = [];
        const testValue3 = "";

        const result1 = () => {
            fn.memoized(testValue1)
        }
        const result2 = () => {
            fn.memoized(testValue2)
        }
        const result3 = () => {
            fn.memoized(testValue3)
        }

        expect(result1).toThrow("Callback should be a function")
        expect(result2).toThrow("Callback should be a function")
        expect(result3).toThrow("Callback should be a function")
    })

    it("should always return a function provided that a function is passed as value", () => {
        const testCallBack = (x, y, z) => { };

        const result = fn.memoized(testCallBack);

        expect(result).toBeTypeOf("function");
    })

    it("should return the same value as the passed function", () => {
        const testAdd = (x, y) => x + y;

        const testMemoized = fn.memoized(testAdd);
        const result = testMemoized(1, 2);

        expect(result).toBe(testAdd(1, 2))
    })

    it("the passed function should be invoked once the similar argument", () => {
        const testAdd = vi.fn((x, y) => x + y);

        const testMemoized = fn.memoized(testAdd);
        testMemoized(1, 2);
        testMemoized(1, 2);
        testMemoized(1, 2);
        testMemoized(1, 2);

        expect(testAdd).toBeCalledTimes(1);
    })
})

describe("factorial function", () => {
    it("should throw error if the provided value can not be transformed to a number type", () => {
        const testValue1 = [];
        const testValue2 = "";
        const testValue3 = "invalid";
        const testValue4 = {};

        const result1 = () => {
            fn.factorial(testValue1)
        }
        const result2 = () => {
            fn.factorial(testValue2)
        }
        const result3 = () => {
            fn.factorial(testValue3)
        }
        const result4 = () => {
            fn.factorial(testValue4)
        }

        expect(result1).toThrow("n should be a number");
        expect(result2).toThrow("n should be a number");
        expect(result3).toThrow("n should be a number");
        expect(result4).toThrow("n should be a number");
    })

    it("should calculate the factorial of a natural number", () => {
        const testValue = 3;

        const result = fn.factorial(testValue);

        expect(result).toBe(3 * 2 * 1)
    })
})

describe("curry function", () => {
    it("should throw error if the value passed is not a function", () => {
        const testValue1 = {};
        const testValue2 = [];
        const testValue3 = "";

        const result1 = () => {
            fn.curry(testValue1)
        }
        const result2 = () => {
            fn.curry(testValue2)
        }
        const result3 = () => {
            fn.curry(testValue3)
        }

        expect(result1).toThrow("Callback should be a function")
        expect(result2).toThrow("Callback should be a function")
        expect(result3).toThrow("Callback should be a function")
    })
    it("should return a function is invoked once", () => {
        const testFn = (x, y, z) => x + z + y;

        const testCurriedFn = fn.curry(testFn);

        expect(testCurriedFn).toBeTypeOf("function");
    })

    it("should return the same value as the pass fn when invoked n times, where is the number of argument", () => {
        const testFn = (x, y, z) => x + z + y;

        const testCurriedFn = fn.curry(testFn);
        const result = testCurriedFn(1)(2)(3);

        expect(result).toBe(testFn(1, 2, 3));
    })

    it("should be reuseable at some point", () => {
        const testFn = (x, y, z) => x * z * y;

        const curryMultiplyBy2And3 = fn.curry(testFn)(2)(3);
        const result1 = curryMultiplyBy2And3(4)
        const result2 = curryMultiplyBy2And3(6)
        const result3 = curryMultiplyBy2And3(10)

        expect(result1).toBe(testFn(2, 3, 4));
        expect(result2).toBe(testFn(2, 3, 6));
        expect(result3).toBe(testFn(2, 3, 10));
    })
})

describe("partial function", () => {
    it("should throw error if the value passed is not a function", () => {
        const testValue1 = {};
        const testValue2 = [];
        const testValue3 = "";

        const result1 = () => {
            fn.partial(testValue1)
        }
        const result2 = () => {
            fn.partial(testValue2)
        }
        const result3 = () => {
            fn.partial(testValue3)
        }

        expect(result1).toThrow("Callback should be a function")
        expect(result2).toThrow("Callback should be a function")
        expect(result3).toThrow("Callback should be a function")
    })
    it("should return a function is invoked once", () => {
        const testFn = (x, y, z) => x + z + y;

        const testPartialFn = fn.partial(testFn);

        expect(testPartialFn).toBeTypeOf("function");
    })

    it("should return the same value as the pass fn when invoked n times, where is the number of argument", () => {
        const testFn = (x, y, z) => x + z + y;

        const testPartialAdd1And3 = fn.partial(testFn)(1, undefined, 3);
        const result1 = testPartialAdd1And3(2);

        expect(result1).toBe(testFn(1, 2, 3));
    })

    it("should be reuseable at some point", () => {
        const testFn = (x, y, z) => x * z * y;

        const partialMultiplyBy2And3 = fn.partial(testFn)(2, 3);
        const result1 = partialMultiplyBy2And3(4)
        const result2 = partialMultiplyBy2And3(6)
        const result3 = partialMultiplyBy2And3(10)

        expect(result1).toBe(testFn(2, 3, 4));
        expect(result2).toBe(testFn(2, 3, 6));
        expect(result3).toBe(testFn(2, 3, 10));
    })
})

describe("compose function", () => {
    it("should throw error if any of the argument provided is not a function", () => {
        const testValue1 = () => { };
        const testValue2 = [];
        const testValue3 = () => { };

        const composedFn = () => {
            fn.compose(testValue1, testValue2, testValue3)
        }

        expect(composedFn).toThrow("Callback should be a function")
    })

    it("should return a function when invoked once", () => {
        const testValue1 = () => { };
        const testValue2 = () => { };
        const testValue3 = () => { };

        const composedFn = fn.compose(testValue1, testValue2, testValue3);

        expect(composedFn).toBeTypeOf("function");
    })

    it("should invoked the last function with the passed value to result", () => {
        const testValue1 = vi.fn(() => { });
        const testValue2 = vi.fn().mockImplementation(() => { });
        const testValue3 = vi.fn(() => { });
        const testValue = {};

        const composedFn = fn.compose(testValue1, testValue2, testValue3);
        composedFn(testValue);

        expect(testValue3).toBeCalledWith(testValue);
    })

    it("should invoked the each of the passed function once", () => {
        const testValue1 = vi.fn(() => { });
        const testValue2 = vi.fn().mockImplementation(() => { });
        const testValue3 = vi.fn(() => { });
        const testValue = {};

        const composedFn = fn.compose(testValue1, testValue2, testValue3);
        composedFn(testValue);

        expect(testValue1).toHaveBeenCalledOnce();
        expect(testValue2).toHaveBeenCalledOnce();
        expect(testValue3).toHaveBeenCalledOnce();
    })

    it("should called each function with the return value of the previous function", () => {
        const testValue1 = vi.fn(x => x + x);
        const testValue2 = vi.fn().mockImplementation(x => x + 2);
        const testValue3 = vi.fn(x => x + 3);

        const composedFn = fn.compose(testValue1, testValue2, testValue3);
        const result = composedFn(2);

        expect(testValue3).toBeCalledWith(2);
        expect(testValue3).toHaveReturnedWith(5);
        expect(testValue2).toBeCalledWith(5);
        expect(testValue2).toHaveReturnedWith(7);
        expect(testValue1).toBeCalledWith(7);
        expect(testValue1).toHaveReturnedWith(14);
        expect(result).toBe(testValue1(testValue2(testValue3(2))))
    })
})
describe("pipe function", () => {
    it("should throw error if any of the argument provided is not a function", () => {
        const testValue1 = () => { };
        const testValue2 = [];
        const testValue3 = () => { };

        const pipedFn = () => {
            fn.pipe(testValue1, testValue2, testValue3)
        }

        expect(pipedFn).toThrow("Callback should be a function")
    })

    it("should return a function when invoked once", () => {
        const testValue1 = () => { };
        const testValue2 = () => { };
        const testValue3 = () => { };

        const pipedFn = fn.pipe(testValue1, testValue2, testValue3);

        expect(pipedFn).toBeTypeOf("function");
    })

    it("should invoked the first function with the passed value to result", () => {
        const testValue1 = vi.fn(() => { });
        const testValue2 = vi.fn().mockImplementation(() => { });
        const testValue3 = vi.fn(() => { });
        const testValue = {};

        const pipedFn = fn.pipe(testValue1, testValue2, testValue3);
        pipedFn(testValue);

        expect(testValue1).toBeCalledWith(testValue);
    })

    it("should invoked the each of the passed function once", () => {
        const testValue1 = vi.fn(() => { });
        const testValue2 = vi.fn().mockImplementation(() => { });
        const testValue3 = vi.fn(() => { });
        const testValue = {};

        const pipedFn = fn.pipe(testValue1, testValue2, testValue3);
        pipedFn(testValue);

        expect(testValue1).toHaveBeenCalledOnce();
        expect(testValue2).toHaveBeenCalledOnce();
        expect(testValue3).toHaveBeenCalledOnce();
    })

    it("should called each function with the return value of the previous function", () => {
        const testValue1 = vi.fn(x => x + x);
        const testValue2 = vi.fn().mockImplementation(x => x + 2);
        const testValue3 = vi.fn(x => x + 3);

        const pipedFn = fn.pipe(testValue1, testValue2, testValue3);
        const result = pipedFn(2);

        expect(testValue3).toBeCalledWith(6);
        expect(testValue3).toHaveReturnedWith(9);
        expect(testValue2).toBeCalledWith(4);
        expect(testValue2).toHaveReturnedWith(6);
        expect(testValue1).toBeCalledWith(2);
        expect(testValue1).toHaveReturnedWith(4);
        expect(result).toBe(testValue3(testValue2(testValue1(2))))
    })
})

describe("primeNumberCheck function", () => {
    it("should throw error if the value is not transformable number data type", () => {
        const testValue1 = [];
        const testValue2 = "";
        const testValue3 = "invalid";
        const testValue4 = {};

        const result1 = () => {
            fn.primeNumberCheck(testValue1)
        }
        const result2 = () => {
            fn.primeNumberCheck(testValue2)
        }
        const result3 = () => {
            fn.primeNumberCheck(testValue3)
        }
        const result4 = () => {
            fn.primeNumberCheck(testValue4)
        }

        expect(result1).toThrow("num should be a number");
        expect(result2).toThrow("num should be a number");
        expect(result3).toThrow("num should be a number");
        expect(result4).toThrow("num should be a number");
    })

    it("should return true if the number provided is a prime number", () => {
        const testValue1 = 5;
        const testValue2 = 11;
        const testValue3 = 101;

        const result1 = fn.primeNumberCheck(testValue1);
        const result2 = fn.primeNumberCheck(testValue2);
        const result3 = fn.primeNumberCheck(testValue3);

        expect(result1).toBe(true)
        expect(result2).toBe(true)
        expect(result3).toBe(true)
    })

    it("should return false if the number provided is not a prime number", () => {
        const testValue1 = 1;
        const testValue2 = 1002;
        const testValue3 = 20110;

        const result1 = fn.primeNumberCheck(testValue1);
        const result2 = fn.primeNumberCheck(testValue2);
        const result3 = fn.primeNumberCheck(testValue3);

        expect(result1).toBe(false)
        expect(result2).toBe(false)
        expect(result3).toBe(false)
    })
})
describe("evenNumberCheck function", () => {
    it("should throw error if the value is not transformable number data type", () => {
        const testValue1 = [];
        const testValue2 = "";
        const testValue3 = "invalid";
        const testValue4 = {};

        const result1 = () => {
            fn.evenNumberCheck(testValue1)
        }
        const result2 = () => {
            fn.evenNumberCheck(testValue2)
        }
        const result3 = () => {
            fn.evenNumberCheck(testValue3)
        }
        const result4 = () => {
            fn.evenNumberCheck(testValue4)
        }

        expect(result1).toThrow("num should be a number");
        expect(result2).toThrow("num should be a number");
        expect(result3).toThrow("num should be a number");
        expect(result4).toThrow("num should be a number");
    })

    it("should return true if the number provided is an even number", () => {
        const testValue1 = 100;
        const testValue2 = 234;
        const testValue3 = 44;

        const result1 = fn.evenNumberCheck(testValue1);
        const result2 = fn.evenNumberCheck(testValue2);
        const result3 = fn.evenNumberCheck(testValue3);

        expect(result1).toBe(true)
        expect(result2).toBe(true)
        expect(result3).toBe(true)
    })

    it("should return false if the number provided is not an even number", () => {
        const testValue1 = 3;
        const testValue2 = 33;
        const testValue3 = 99;

        const result1 = fn.evenNumberCheck(testValue1);
        const result2 = fn.evenNumberCheck(testValue2);
        const result3 = fn.evenNumberCheck(testValue3);

        expect(result1).toBe(false)
        expect(result2).toBe(false)
        expect(result3).toBe(false)
    })
})
describe("oddNumber function", () => {
    it("should throw error if the value is not transformable number data type", () => {
        const testValue1 = [];
        const testValue2 = "";
        const testValue3 = "invalid";
        const testValue4 = {};

        const result1 = () => {
            fn.oddNumberChecker(testValue1)
        }
        const result2 = () => {
            fn.oddNumberChecker(testValue2)
        }
        const result3 = () => {
            fn.oddNumberChecker(testValue3)
        }
        const result4 = () => {
            fn.oddNumberChecker(testValue4)
        }

        expect(result1).toThrow("num should be a number");
        expect(result2).toThrow("num should be a number");
        expect(result3).toThrow("num should be a number");
        expect(result4).toThrow("num should be a number");
    })

    it("should return true if the number provided is an odd number", () => {
        const testValue1 = 5;
        const testValue2 = 11;
        const testValue3 = 101;

        const result1 = fn.oddNumberChecker(testValue1);
        const result2 = fn.oddNumberChecker(testValue2);
        const result3 = fn.oddNumberChecker(testValue3);

        expect(result1).toBe(true)
        expect(result2).toBe(true)
        expect(result3).toBe(true)
    })

    it("should return false if the number provided is not an odd number", () => {
        const testValue1 = 12;
        const testValue2 = 1002;
        const testValue3 = 20110;

        const result1 = fn.oddNumberChecker(testValue1);
        const result2 = fn.oddNumberChecker(testValue2);
        const result3 = fn.oddNumberChecker(testValue3);

        expect(result1).toBe(false)
        expect(result2).toBe(false)
        expect(result3).toBe(false)
    })
})
