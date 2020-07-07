export const isNumber = (text: string): Boolean => !isNaN(parseFloat(text));

export const validateInputs = (args: Array<string>): Boolean => {
  if (args.length === 0) {
    return false;
  }
  return args.filter((text) => !isNumber(text)).length === 0;
};

export const buildErrorString = (text: string): string =>
  `${text} is not a valid integer`;

export const buildErrorsString = (args: Array<string>): string => {
  if (args.length === 0) {
    return "There are no numbers to add";
  }
  return args
    .filter((arg) => !isNumber(arg))
    .reduce(
      (errorString, currentArgument) =>
        errorString
          ? `${errorString}, ${buildErrorString(currentArgument)}`
          : buildErrorString(currentArgument),
      ""
    );
};

export const transformTextsToNumber = (texts: Array<string>): Array<number> =>
  texts.map((text) => parseFloat(text));

export const sum = (numbers: Array<number>): number =>
  numbers.reduce((total, currentValue) => total + currentValue, 0);
