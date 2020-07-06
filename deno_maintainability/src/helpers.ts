export const getArguments = (): Array<string> => Deno.args;

export const printToTerminal = (text: string): void => console.log(text);
