import inquirer from "inquirer";
import { Command, NewUserAndPw } from "../types";

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

export const chooseService = async (): Promise<string> => {
  const answers = await inquirer.prompt<{ service: string }>([
    {
      type: "list",
      name: "Service",
      message: "Choose a service",
      choices: [
        { name: "Google", value: "Google", short: "pw1" },
        { name: "Github", value: "Github", short: "pw2" },
        { name: "Codewars", value: "Codewars", short: "pw3" },
      ],
    },
  ]);
  return answers.service;
};

// possibel to add all question into one addNewCredential and
export const addNewService = async (): Promise<string> => {
  const inputService = await inquirer.prompt<{ service: string }>([
    {
      type: "input",
      name: "service",
      message: "What's the service?",
    },
  ]);
  return inputService.service;
};

export const addNewUserAndPw = async (): Promise<NewUserAndPw> => {
  const answers = await inquirer.prompt<NewUserAndPw>([
    {
      type: "input",
      name: "username",
      message: "What's your username?",
    },
    {
      type: "password",
      name: "password",
      message: "What's your password?",
      mask: "*",
    },
  ]);
  return answers;
};
