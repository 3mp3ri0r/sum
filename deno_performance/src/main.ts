import { validateAndBuildResult } from "./domainLogic.ts";

export const run = (args: Array<string>, consoleLog: Console["log"]): void => {
  if (args.length === 0) consoleLog("There are no numbers to add");
  else consoleLog(validateAndBuildResult(args));
  return;
};

run(Deno.args, console.log);
