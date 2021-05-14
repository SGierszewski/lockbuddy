import inquirer from "inquirer";
import { Command } from "../types";

//export function askForMainPassword(): Promise<string> {
export const askForMainPassword = (): Promise<string> => {
  return inquirer
    .prompt<{ mainPassword: string }>([
      {
        type: "password",
        name: "mainPassword",
        message: "Enter main password",
        mask: "*",
      },
    ])
    .then((answers) => answers.mainPassword);
};

export const askForCommand = async (): Promise<Command> => {
  const answers = await inquirer.prompt<{ command: Command }>([
    //Command is declared in types.ts
    {
      type: "list",
      name: "command",
      message: "What would you like to do?",
      choices: [
        { name: "List all credentials", value: "list" },
        { name: "Add new credentials", value: "add" },
      ],
    },
  ]);
  return answers.command;
};

// if user chooses the list case
export const chooseService = async (services: string[]): Promise<string> => {
  const answers = await inquirer.prompt<{ service: string }>({
    type: "list",
    name: "service",
    message: "Please choose a service",
    choices: services,
  });

  return answers.service;
};

// if user chooses the add case
export const askForCredential = async (): Promise<Credential> => {
  const answers = await inquirer.prompt<Credential>([
    {
      type: "input",
      name: "service",
      message: "Please enter service name",
    },
    {
      type: "input",
      name: "username",
      message: "Please enter username",
    },
    {
      type: "password",
      name: "password",
      message: "Please enter password",
    },
  ]);
  return answers;
};

// export const chooseService = async (): Promise<string> => {
//   const answers = await inquirer.prompt<{ service: string }>([
//     {
//       type: "list",
//       name: "Service",
//       message: "Choose a service",
//       choices: [
//         { name: "Google", value: "Google", short: "pw1" },
//         { name: "GitHub", value: "GitHub", short: "pw2" },
//         { name: "Codewars", value: "Codewars", short: "pw3" },
//       ],
//     },
//   ]);
//   return answers.service;
// };

// // possibel to add all question into one addNewCredential and
// export const addNewService = async (): Promise<string> => {
//   const inputService = await inquirer.prompt<{ service: string }>([
//     {
//       type: "input",
//       name: "service",
//       message: "What's the service?",
//     },
//   ]);
//   return inputService.service;
// };

// export const addNewUserAndPw = async (): Promise<NewUserAndPw> => {
//   const answers = await inquirer.prompt<NewUserAndPw>([
//     {
//       type: "input",
//       name: "username",
//       message: "What's your username?",
//     },
//     {
//       type: "password",
//       name: "password",
//       message: "What's your password?",
//       mask: "*",
//     },
//   ]);
//   return answers;
// };
