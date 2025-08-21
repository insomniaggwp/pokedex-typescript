import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";
describe.each([
    {
        input: "  hello  world  ",
        expected: ["hello", "world"],
    },
    // TODO: more test cases here
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        // TODO: call cleanInput with the input here
        // The `expect` and `toHaveLength` functions are from vitest
        // they will fail the test if the condition is not met
        expect(cleanInput(input)).toHaveLength(expected.length);
        for (const i in expected) {
            const result = cleanInput(input);
            // likewise, the `toBe` function will fail the test if the values are not equal
            expect(result[i]).toBe(expected[i]);
        }
    });
});
