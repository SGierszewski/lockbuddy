import inquirer from "inquirer";

//export function askForMainPassword(): Promise<string> {
export const askForMainPassword = (): Promise<string> => {
  return inquirer
    .prompt<{ mainPassword: string }>([
      {
        type: "passowrd",
        name: "mainPassword",
        message: "Enter main password",
      },
    ])
    .then((answers) => answers.mainPassword);
};
