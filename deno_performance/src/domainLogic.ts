/***
 * Can be named sum but better using this term as it will do some task like validate the input,
 * build the output and build the error in single iteration
 */
export const validateAndBuildResult = (args: Array<string>): string => {
  const [successResult, errorResult] = args.reduce(
    (previousTotalError, currentValue) => {
      const numericValue = parseFloat(currentValue);
      return !isNaN(numericValue)
        ? [previousTotalError[0] + numericValue, previousTotalError[1]]
        : [
            previousTotalError[0],
            previousTotalError[1] !== ""
              ? `${previousTotalError[1]}, ${currentValue} is not a valid integer`
              : `${currentValue} is not a valid integer`,
          ];
    },
    [0, ""]
  );
  return errorResult !== "" ? errorResult : successResult.toString();
};
