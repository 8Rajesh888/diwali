const { isEqual } = require("./isEqual");

function runNullTestCases() {
    console.log('\nnullTestCases');

    runTest("both null should be true", null, null, true);
    runTest("both not null should be false", 10, null, false);
    runTest("null and string should be false", null, "hi", false);
    runTest("null and array should be false", null, [], false);
    runTest("null and onject should be false", null, {}, false);

}

function runUndefinedTestCases() {
    console.log('\nundefinedTestCases');

    runTest("both undefined should be true", undefined, undefined, true);
    runTest("both not undefined should be false", 10, undefined, false);
    runTest("undefined and string should be false", undefined, "hi", false);
    runTest("undefined , array should be false", undefined, [true], false);
    runTest("undefined , object should be false", undefined, { x: true }, false);

}

function runNaNTestCases() {
    console.log('\nNaNTestCases');

    runTest("NaN and number should be false", NaN, 0, false);
    runTest("two NAN should be true", NaN, NaN, true);
    runTest("NaN and string should be false", NaN, "hi", false);
    runTest("NaN , array should be false", NaN, [true], false);
    runTest("NaN , object should be false", NaN, { x: true }, false);

}

function runStringTestCases() {
    console.log('\nstringTestCases');

    runTest("Same Strings should be true", "a", "a", true);
    runTest("Diff Strings should be false", "a", "b", false);
    runTest("String , array should be false", "hi", [10], false);
    runTest("String , object should be false", "hi", { x: "hi" }, false);

}

function runBooleanTestCases() {
    console.log('\nbooleanTestCases');

    runTest("boolean  opp should be false", true, false, false);
    runTest("boolean same should be true", true, true, true);
    runTest("boolean , array should be false", true, [true], false);
    runTest("boolean , object should be false", true, { x: true }, false);

}

function runNumberTestCases() {
    console.log('\nnumberTestCases');

    runTest("Positive Same Numbers should be true", 1, 1, true);
    runTest("Negative Same Numbers should be true", -10, -10, true);
    runTest("diff Positive Numbers should be false", 1, 0, false);
    runTest("one number and one boolean should be false", 1, false, false);
    runTest("number , array should be false", 10, [true], false);
    runTest("number , object should be false", 10, { x: true }, false);
    runTest("number and string should be false", 1, "1", false);
    runTest("number and boolean should be false", 1, true, false);

}

function runArrayTestCases() {
    console.log('\narrayTestCases');

    runTest("Empty Array should be true", [], [], true);
    runTest("same Length same values should be true", [1], [1], true);
    runTest("same Length diff values should be be false", [1], [2], false);
    runTest("diff length more in b should be be false", [1], [1, 2], false);
    runTest("diff length more in a should be be false", [1, 2], [1], false);
    runTest("diff length ,one empty should be be false", [], [1, 2], false);
    runTest("array , object diff keys should be false", [10], { x: 10 }, false);
    runTest("array , object same keys should be false", [10], { 0: 10 }, false);

}

function runNestedArrayTestCases() {
    console.log('\nnestedArrayTestCases');

    runTest("both nested Empty Array should be true", [[]], [[]], true);
    runTest(" one nested Empty Array should be be false", [[]], [1], false);
    runTest("diff length more than 0 should be be false", [1, [1, 2]], [1, 2], false);
    runTest("diff length ,one with 0 should be be false", [1, []], [1, [1, 2]], false);

}

function runObjectTestCases() {
    console.log('\nobjectTestCases');

    runTest("Empty objects should be true", {}, {}, true);
    runTest("one object should be be false", { a: 1 }, {}, false);
    runTest("same obj should be true", { a: 1 }, { a: 1 }, true);
    runTest("diff obj should be be false", { a: 1 }, { a: 2 }, false);
    runTest("reversed obj should be true", { a: 1, b: 2 }, { b: 2, a: 1 }, true);
    runTest("a is first should be be false", { a: undefined }, { b: 1 }, false);
    runTest("a is second should be be false", { b: 1 }, { a: undefined }, false);

}

function runNestedObjectTestCases() {
    console.log('\nnestedObjectTestCases');

    runTest("same obj in array should be true", [{ a: [1] }], [{ a: [1] }], true);
    runTest("same array in obj should be true", { a: [1] }, { a: [1] }, true);
    runTest("diff obj in array should be be false", [{ a: [1] }], [{ a: [1], b: 2 }], false);
    runTest("diff array in obj should be be false", { a: [1] }, { a: [1], b: [2] }, false);

}

function runTest(description, first, second, expected) {
    const result = isEqual(first, second);

    if (!(result === expected)) {
        console.log(`❌`, description);
    }
    else {
        console.log(`✅ `, description);
    }

}

function runAllCases() {
    runBooleanTestCases();
    runNumberTestCases();
    runStringTestCases();
    runArrayTestCases();
    runNestedArrayTestCases();
    runObjectTestCases();
    runNestedObjectTestCases();
    runUndefinedTestCases();
    runNullTestCases();
    runNaNTestCases();
}

runAllCases();