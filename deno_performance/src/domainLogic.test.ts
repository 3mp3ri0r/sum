import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { validateAndBuildResult } from "./domainLogic.ts";

/***
 * Behaviour of domain logic validateAndBuildResult
 */
Deno.test(
  "validateAndBuildResult - test case #1 - contain one non numeric string",
  () => {
    const sampleNumber = ["1", "2", "3", "4", "five"];
    assertEquals(
      validateAndBuildResult(sampleNumber),
      "five is not a valid integer"
    );
  }
);

Deno.test(
  "validateAndBuildResult - test case #2 - contain multiple non numeric string",
  () => {
    const sampleNumber = ["What?", "2", "three", "4", "five"];
    assertEquals(
      validateAndBuildResult(sampleNumber),
      "What? is not a valid integer, three is not a valid integer, five is not a valid integer"
    );
  }
);

Deno.test(
  "validateAndBuildResult - test case #3 - contain one numeric string",
  () => {
    const sampleNumber = ["10"];
    assertEquals(validateAndBuildResult(sampleNumber), "10");
  }
);

Deno.test(
  "validateAndBuildResult - test case #4 - contain one numeric string with zero value",
  () => {
    const sampleNumber = ["0"];
    assertEquals(validateAndBuildResult(sampleNumber), "0");
  }
);

Deno.test(
  "validateAndBuildResult - test case #5 - contain multiple numeric string",
  () => {
    const sampleNumber = ["0", "10", "12", "13"];
    assertEquals(validateAndBuildResult(sampleNumber), "35");
  }
);
