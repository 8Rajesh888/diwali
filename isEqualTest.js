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

        ["Same Strings should be true", "a", "a", true],
        ["Diff Strings should be false", "a", "b", false],

        ["one NAN should be false", NaN, 0, false],
        ["two NAN should be true", NaN, NaN, true],

        ["both undefined should be true", undefined, undefined, true],
        ["both not undefined should be false", 10, undefined, false],

        ["both null should be true", null, null, true],
        ["both not null should be false", 10, null, false],
        ["null and array should be false", null, [], false],
        ["null and onject should be false", null, {}, false],

        ["diff primitive should be false", 1, "1", false],
    ]
}

const arrayTestCases = {
    type: "arrayTestCases",
    cases: [
        ["Empty Array should be true", [], [], true],
        ["same Length same values should be true", [1], [1], true],
        ["same Length diff values should be be false", [1], [2], false],
        ["diff length more in b should be be false", [1], [1, 2], false],
        ["diff length more in a should be be false", [1, 2], [1], false],
        ["diff length ,one empty should be be false", [], [1, 2], false],
    ]
}

const nestedArrayTestCases = {
    type: "nestedArrayTestCases",
    cases: [
        ["both nested Empty Array should be true", [[]], [[]], true],
        [" one nested Empty Array should be be false", [[]], [1], false],
        ["diff length more than 0 should be be false", [1, [1, 2]], [1, 2], false],
        ["diff length ,one with 0 should be be false", [1, []], [1, [1, 2]], false],
    ]
}

const objectTestCases = {
    type: "objectTestCases",
    cases: [
        ["Empty objects should be true", {}, {}, true],
        ["one object should be be false", { a: 1 }, {}, false],
        ["same obj should be true", { a: 1 }, { a: 1 }, true],
        ["diff obj should be be false", { a: 1 }, { a: 2 }, false],
        ["reversed obj should be true", { a: 1, b: 2 }, { b: 2, a: 1 }, true],
        ["a is first should be be false", { a: undefined }, { b: 1 }, false],
        ["a is second should be be false", { b: 1 }, { a: undefined }, false],
    ]
}

const nestedObjectTestCases = {
    type: "nestedObjectTestCases",
    cases: [
        ["same obj in array should be true", [{ a: [1] }], [{ a: [1] }], true],
        ["same array in obj should be true", { a: [1] }, { a: [1] }, true],
        ["diff obj in array should be be false", [{ a: [1] }], [{ a: [1], b: 2 }], false],
        ["diff array in obj should be be false", { a: [1] }, { a: [1], b: [2] }, false],
    ]
}

const testCases = [
    primitiveTestCases,
    arrayTestCases,
    nestedArrayTestCases,
    objectTestCases,
    nestedObjectTestCases,
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