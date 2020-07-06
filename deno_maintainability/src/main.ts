import * as io from "./helpers.ts";
import {
  validateInputs,
  buildErrorsString,
  sum,
  transformTextsToNumber,
} from "./domainLogic.ts";

export const run = () => {
  const args = io.getArguments();

  // validate user input
  const isValid = validateInputs(args);

  // print error on invalid, print sum result on valid
  if (isValid) {
    io.printToTerminal(sum(transformTextsToNumber(args)).toString());
  } else {
    io.printToTerminal(buildErrorsString(args));
  }
};

run();
