const { isEqual } = require("./isEqual");

const primitiveTestCases = {
    type: "primitiveTestCases",
    cases: [
        ["Positive Same Numbers should be true", 1, 1, true],
        ["Negative Same Numbers should be true", -10, -10, true],
        ["diff Positive Numbers should be false", 1, 0, false],
        ["one number and one boolean should be false", 1, false, false],

        ["boolean  opp should be false", true, false, false],
        ["boolean same should be true", true, true, true],

        ["Same Strings", "a", "a", true],
        ["Diff Strings", "a", "b", false],

        // ["one NAN", NaN, 0, false],
        // ["two NAN", NaN, NaN, true],
        // ["both undefined", undefined, undefined, true],
        // ["both not undefined", 10, undefined, false],
        // ["both null", null, null, true],
        // ["both not null", 10, null, false],

        ["diff primitive", 1, "1", false],
    ]
}

const arrayTestCases = {
    type: "arrayTestCases",
    cases: [
        ["Empty Array", [], [], true],
        ["same Length same values", [1], [1], true],
        ["same Length diff values", [1], [2], false],
        ["diff length more in b", [1], [1, 2], false],
        ["diff length more in a", [1, 2], [1], false],
        ["diff length ,one empty", [], [1, 2], false],
    ]
}

const nestedArrayTestCases = {
    type: "nestedArrayTestCases",
    cases: [
        ["both nested Empty Array", [[]], [[]], true],
        [" one nested Empty Array", [[]], [1], false],
        ["diff length more than 0", [1, [1, 2]], [1, 2], false],
        ["diff length ,one with 0", [1, []], [1, [1, 2]], false],
    ]
}

const objectTestCases = {
    type: "objectTestCases",
    cases: [
        ["Empty objects", {}, {}, true],
        ["one object", { a: 1 }, {}, false],
        ["same obj", { a: 1 }, { a: 1 }, true],
        ["diff obj", { a: 1 }, { a: 2 }, false],
        ["reversed obj", { a: 1, b: 2 }, { b: 2, a: 1 }, true],
        ["a is first", { a: undefined }, { b: 1 }, false],
        ["a is second", { b: 1 }, { a: undefined }, false],
    ]
}

const nestedObjectTestCases = {
    type: "nestedObjectTestCases",
    cases: [
        ["same obj in array", [{ a: [1] }], [{ a: [1] }], true],
        ["same array in obj", { a: [1] }, { a: [1] }, true],
        ["diff obj in array", [{ a: [1] }], [{ a: [1], b: 2 }], false],
        ["diff array in obj", { a: [1] }, { a: [1], b: [2] }, false],
    ]
}

const testCases = [
    primitiveTestCases,
    arrayTestCases,
    nestedArrayTestCases,
    objectTestCases,
    // nestedObjectTestCases,
];

function runTests(testCases) {
    let count = testCases.cases.length;

    console.log(`\n`, testCases.type, `\n`);

    for (const [description, first, second, expected] of testCases.cases) {
        const result = isEqual(first, second);
        if (!(result === expected)) {
            console.log(`❌`, description);
            count--;
        }
        else {
            console.log(`✅ `, description);
        }
    }

    // if (count === testCases.cases.length)
    //     console.log(`✅ all are working`);
    // else if (count !== 0)
    //     console.log(`✅ other ${count} are working`);
}

function runAllCases(allCases) {
    for (const testCases of allCases) {
        runTests(testCases);
    }
}

runAllCases(testCases);