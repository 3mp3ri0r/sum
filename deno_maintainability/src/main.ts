import {
  validateInputs,
  buildErrorsString,
  sum,
  transformTextsToNumber,
} from "./domainLogic.ts";

export const run = (args: Array<string>, consoleLog: Console["log"]) => {
  // validate user input
  const isValid = validateInputs(args);

  // print error on invalid, print sum result on valid
  if (isValid) {
    consoleLog(sum(transformTextsToNumber(args)).toString());
  } else {
    consoleLog(buildErrorsString(args));
  }
};

run(Deno.args, console.log);
