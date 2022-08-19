
import { expect, it, describe, vi } from "vitest";
import * as fn from "../objectFn.js"

describe("forEachObject function", () => {
    it("should throw error if the first argument is not an object and second agrument is not a function", () => {
        const testValue1 = [];
        const testValue2 = "";
        const testValue3 = null

        const callback1 = "";
        const callback2 = [];
        const callback3 = 4;

        const result1 = () => {
            fn.forEachObject(testValue1, callback1)
        }
        const result2 = () => {
            fn.forEachObject(testValue2, callback2)
        }
        const result3 = () => {
            fn.forEachObject(testValue3, callback3)
        }

        expect(result1).toThrow("The first argument should be an object and the second argument should be a function");
        expect(result2).toThrow("The first argument should be an object and the second argument should be a function");
        expect(result3).toThrow("The first argument should be an object and the second argument should be a function");
    })

    it("should throw error if the first argument provided is not an object", () => {
        const testValue = [];
        const callback = () => { };

        const result = () => {
            fn.forEachObject(testValue, callback)
        }

        expect(result).toThrow("The first argument should be an object")
    })

    it("should invoked the callback each times with the property value, property name and the object", () => {
        const testValue = {
            name: "Ifeoluwa",
            username: "@ifeoluwaaa_"
        }

        const callback = vi.fn();
        fn.forEachObject(testValue, callback);

        expect(callback).toHaveBeenCalledWith(testValue["name"], "name", testValue)
        expect(callback).toHaveBeenCalledWith(testValue["username"], "username", testValue)
    })

    it("should not return any value", () => {
        const testValue = {
            name: "Ifeoluwa",
            username: "@ifeoluwaaa_"
        }
        const callback = vi.fn();

        const result = fn.forEachObject(testValue, callback);

        expect(result).not.toBeDefined();
    })

})

describe("objectAssign function", () => {
    it("should throw error if any provided argument is not an object", () => {
        const testValue1 = {};
        const testValue2 = [];
        const testValue3 = "";
        const testValue4 = null;

        const result1 = () => {
            fn.objectAssign(testValue1, testValue1);
        }
        const result2 = () => {
            fn.objectAssign(testValue2, testvalue1);
        }
        const result3 = () => {
            fn.objectAssign(testValue3, testValue3);
        }
        const result4 = () => {
            fn.objectAssign(testValue4, testValue3);
        }

        expect(result1).not.toThrow();
        expect(result2).toThrow()
        expect(result3).toThrow()
        expect(result4).toThrow()
    })

    it("should always return an object if invoked with another object", () => {
        const testValue1 = {};
        const testValue2 = {};
        const testValue3 = {};

        const result = fn.objectAssign(testValue1, testValue2, testValue3)

        expect(result).toBeTypeOf("object");
    })

    it("should copy the properties of the source to the target object", () => {
        const testObj1 = { name: `Ifeoluwa` }
        const testObj2 = { location: "Nigeria" }

        const result = fn.objectAssign(testObj1, testObj2);

        expect(result).toEqual({ name: `Ifeoluwa`, location: "Nigeria" })
    })
})

describe("objectKeys function", () => {
    it("should throw error if the provided value is not an object", () => {
        const testvalue1 = [];
        const testValue2 = "";
        const testValue3 = null;

        const result1 = () => {
            fn.objectKeys(testvalue1);
        }
        const result2 = () => {
            fn.objectKeys(testValue2);
        }
        const result3 = () => {
            fn.objectKeys(testValue3);
        }


        expect(result1).toThrow()
        expect(result2).toThrow()
        expect(result3).toThrow()
    })

    it("should alway alway return an array for any object provided", () => {
        const testValue = { name: "Ifeoluwa" }

        const result = Array.isArray(fn.objectKeys(testValue));

        expect(result).toBe(true)
    })

    it("should return an array of properties name of the provided object", () => {
        const testValue = {
            animal: `Dog`,
            game: "Pes"
        }

        const result = fn.objectKeys(testValue);

        expect(result).toEqual(Object.keys(testValue))
    })
})

describe("objectValues function", () => {
    it("should throw error if the provided value is not an object", () => {
        const testvalue1 = [];
        const testValue2 = "";
        const testValue3 = null;

        const result1 = () => {
            fn.objectValues(testvalue1);
        }
        const result2 = () => {
            fn.objectValues(testValue2);
        }
        const result3 = () => {
            fn.objectValues(testValue3);
        }


        expect(result1).toThrow()
        expect(result2).toThrow()
        expect(result3).toThrow()
    })

    it("should alway alway return an array for any object provided", () => {
        const testValue = { name: "Ifeoluwa" }

        const result = Array.isArray(fn.objectValues(testValue));

        expect(result).toBe(true)
    })

    it("should return an array of properties value of the provided object", () => {
        const testValue = {
            animal: `Dog`,
            game: "Pes"
        }

        const result = fn.objectValues(testValue);

        expect(result).toEqual(Object.values(testValue))
    })


})

describe("objectEntries function", () => {
    it("should throw error if the provided value is not an object", () => {
        const testvalue1 = [];
        const testValue2 = "";
        const testValue3 = null;

        const result1 = () => {
            fn.objectEntries(testvalue1);
        }
        const result2 = () => {
            fn.objectEntries(testValue2);
        }
        const result3 = () => {
            fn.objectEntries(testValue3);
        }


        expect(result1).toThrow()
        expect(result2).toThrow()
        expect(result3).toThrow()
    })

    it("should alway alway return an array for any object provided", () => {
        const testValue = { name: "Ifeoluwa" }

        const result = Array.isArray(fn.objectEntries(testValue));

        expect(result).toBe(true)
    })

    it("should return an array of properties name and property value of the provided object", () => {
        const testValue = {
            animal: `Dog`,
            game: "Pes"
        }

        const result = fn.objectEntries(testValue);

        expect(result).toEqual(Object.entries(testValue))
    })
})