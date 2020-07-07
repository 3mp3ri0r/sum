import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import {
  buildErrorString,
  buildErrorsString,
  isNumber,
  sum,
  transformTextsToNumber,
  validateInputs,
} from "./domainLogic.ts";

/***
 * Behaviour of domain logic isNumber
 *
 * We only need to test string as input generated from arguments and only provide string value.
 */
Deno.test("isNumber - numeric string - valid", () => {
  assertEquals(isNumber("10"), true);
});

Deno.test("isNumber - non numeric string - invalid", () => {
  assertEquals(isNumber("ten"), false);
});

Deno.test("isNumber - empty string - invalid", () => {
  assertEquals(isNumber(""), false);
});

/***
 * Behaviour of domain logic validateInputs
 */
Deno.test("validateInputs - numeric strings - valid", () => {
  const sampleInputs = ["1", "2", "3", "4", "5"];
  assertEquals(validateInputs(sampleInputs), true);
});

Deno.test("validateInputs - non numeric strings - invalid", () => {
  const sampleInputs = ["1", "2", "three", "4", "5"];
  assertEquals(validateInputs(sampleInputs), false);
});

Deno.test("validateInputs - no arguments - invalid", () => {
  const sampleInputs: Array<string> = [];
  assertEquals(validateInputs(sampleInputs), false);
});

/***
 * Behaviour of domain logic buildErrorString
 *
 * Build error string from template for non numeric value
 */
Deno.test("buildErrorString - case #1 - two", () => {
  assertEquals(buildErrorString("two"), "two is not a valid integer");
});

Deno.test("buildErrorString - case #1 - Four?", () => {
  assertEquals(buildErrorString("Four?"), "Four? is not a valid integer");
});

/***
 * Behaviour of domain logic buildErrorsString
 *
 * Build errors string from template for non numeric value
 */
Deno.test("buildErrorString - case #1 - one invalid", () => {
  const sampleInputs = ["1", "2", "three", "4", "5"];
  assertEquals(buildErrorsString(sampleInputs), "three is not a valid integer");
});

Deno.test("buildErrorString - case #2 - two invalid", () => {
  const sampleInputs = ["1", "2", "three", "4", "Five?"];
  assertEquals(
    buildErrorsString(sampleInputs),
    "three is not a valid integer, Five? is not a valid integer"
  );
});

Deno.test("buildErrorString - case #3 - three invalid", () => {
  const sampleInputs = ["what is that", "2", "three", "4", "Five?"];
  assertEquals(
    buildErrorsString(sampleInputs),
    "what is that is not a valid integer, three is not a valid integer, Five? is not a valid integer"
  );
});

Deno.test("buildErrorString - case #4 - empty arguments", () => {
  const sampleInputs: Array<string> = [];
  assertEquals(buildErrorsString(sampleInputs), "There are no numbers to add");
});

/***
 * Behaviour of domain logic transformTextsToNumber
 *
 * We do not need to test wether text passed to transformTextToNumber is valid because of
 * transformTextToNumber only called after successful validation.
 */
Deno.test("transformTextsToNumber - integer", () => {
  assertEquals(transformTextsToNumber(["10", "20"]), [10, 20]);
});

Deno.test("transformTextsToNumber - float", () => {
  assertEquals(transformTextsToNumber(["0.1", "0.2"]), [0.1, 0.2]);
});

/***
 * Behaviour of domain logic sum
 */
Deno.test("sum - test case #1 - int only", () => {
  const sampleNumber = [1, 2, 3, 4, 5];
  assertEquals(sum(sampleNumber), 15);
});

Deno.test("sum - test case #2 - contain float", () => {
  const sampleNumber = [1, 2, 3, 4.5, 5];
  assertEquals(sum(sampleNumber), 15.5);
});

Deno.test("sum - test case #3 - float only", () => {
  const sampleNumber = [1.1, 2.2, 3.3, 4.4, 5.5];
  assertEquals(sum(sampleNumber), 16.5);
});
