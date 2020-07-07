import { assertEquals } from "https://deno.land/std@0.50.0/testing/asserts.ts";
import {
  spy,
  Spy,
} from "https://raw.githubusercontent.com/udibo/mock/v0.3.0/spy.ts";

import { run } from "./main.ts";

/***
 * Behaviour of main sum application
 */
Deno.test("sum on zero arguments - negative response", () => {
  const consoleLogMock: Spy<Console> = spy(console, "log");
  const args: Array<string> = [];
  assertEquals(run(args, consoleLogMock), undefined);
  assertEquals(consoleLogMock.calls, [
    { args: ["There are no numbers to add"] },
  ]);
  consoleLogMock.restore();
});

Deno.test("sum on arguments contain non numeric - negative response", () => {
  const consoleLogMock: Spy<Console> = spy(console, "log");
  const args: Array<string> = ["10", "what", "why"];
  assertEquals(run(args, consoleLogMock), undefined);
  assertEquals(consoleLogMock.calls, [
    {
      args: ["what is not a valid integer, why is not a valid integer"],
    },
  ]);
  consoleLogMock.restore();
});

Deno.test("sum on one numeric arguments - positive response", () => {
  const consoleLogMock: Spy<Console> = spy(console, "log");
  const args: Array<string> = ["10"];
  assertEquals(run(args, consoleLogMock), undefined);
  assertEquals(consoleLogMock.calls, [
    {
      args: ["10"],
    },
  ]);
  consoleLogMock.restore();
});

Deno.test("sum on multiple numeric arguments - positive response", () => {
  const consoleLogMock: Spy<Console> = spy(console, "log");
  const args: Array<string> = ["10", "11", "1", "3"];
  assertEquals(run(args, consoleLogMock), undefined);
  assertEquals(consoleLogMock.calls, [
    {
      args: ["25"],
    },
  ]);
  consoleLogMock.restore();
});
