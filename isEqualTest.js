const { isEqual } = require("./isEqual");

const nullTestCases = {
    type: "nullTestCases",
    cases: [
        ["both null should be true", null, null, true],
        ["both not null should be false", 10, null, false],
        ["null and string should be false", null, "hi", false],
        ["null and array should be false", null, [], false],
        ["null and onject should be false", null, {}, false],
    ]
}

const undefinedTestCases = {
    type: "undefinedTestCases",
    cases: [
        ["both undefined should be true", undefined, undefined, true],
        ["both not undefined should be false", 10, undefined, false],
        ["undefined and string should be false", undefined, "hi", false],
        ["undefined , array should be false", undefined, [true], false],
        ["undefined , object should be false", undefined, { x: true }, false],
    ]
}

const NaNTestCases = {
    type: "NaNTestCases",
    cases: [
        ["NaN and number should be false", NaN, 0, false],
        ["two NAN should be true", NaN, NaN, true],
        ["NaN and string should be false", NaN, "hi", false],
        ["NaN , array should be false", NaN, [true], false],
        ["NaN , object should be false", NaN, { x: true }, false],
    ]
}

const stringTestCases = {
    type: "stringTestCases",
    cases: [
        ["Same Strings should be true", "a", "a", true],
        ["Diff Strings should be false", "a", "b", false],
        ["String , array should be false", "hi", [10], false],
        ["String , object should be false", "hi", { x: "hi" }, false],
    ]
}

const booleanTestCases = {
    type: "booleanTestCases",
    cases: [
        ["boolean  opp should be false", true, false, false],
        ["boolean same should be true", true, true, true],
        ["boolean , array should be false", true, [true], false],
        ["boolean , object should be false", true, { x: true }, false],
    ]
}

const numberTestCases = {
    type: "numberTestCases",
    cases: [
        ["Positive Same Numbers should be true", 1, 1, true],
        ["Negative Same Numbers should be true", -10, -10, true],
        ["diff Positive Numbers should be false", 1, 0, false],
        ["one number and one boolean should be false", 1, false, false],
        ["number , array should be false", 10, [true], false],
        ["number , object should be false", 10, { x: true }, false],
        ["number and string should be false", 1, "1", false],
        ["number and boolean should be false", 1, true, false],
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
        ["array , object diff keys should be false", [10], { x: 10 }, false],
        ["array , object same keys should be false", [10], { 0: 10 }, false],
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
    numberTestCases,
    booleanTestCases,
    stringTestCases,
    undefinedTestCases,
    NaNTestCases,
    nullTestCases,
    arrayTestCases,
    nestedArrayTestCases,
    objectTestCases,
    nestedObjectTestCases,
];

function runTests(testCases) {
    let count = testCases.cases.length;

    console.log(`\n`, testCases.type,);

    for (const [description, first, second, expected] of testCases.cases) {
        const result = isEqual(first, second);

        if (!(result === expected)) {
            console.log(`❌`, description);
            count--;
        }
        // else {
        //     console.log(`✅ `, description);
        // }
    }

    if (count === testCases.cases.length)
        console.log(`✅ all are working`);
    else if (count !== 0)
        console.log(`✅ other ${count} are working`);
    else
        console.log(`None of them are working`);
}

function runAllCases(allCases) {
    for (const testCases of allCases) {
        runTests(testCases);
    }
}

runAllCases(testCases);