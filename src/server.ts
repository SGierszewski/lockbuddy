import {
  askForMainPassword,
  askForCommand,
  addNewCredential,
} from "./utils/question";
import { isMainPasswordValid } from "./utils/validation";

//function start() {
const start = async () => {
  /* Solution with while */
  // let mainPassword = await askForMainPassword();
  // while (!isMainPasswordValid(mainPassword)) {
  //   console.log("is valid");
  //   mainPassword = await askForMainPassword();
  // }
  // console.log("Is valid");

  /* Solution with recursion */
  const mainPassword = await askForMainPassword();
  if (!isMainPasswordValid(mainPassword)) {
    console.log("Is invalid");
    start(); // Recursion
  } else {
    console.log("Is valid");
  }
  const command = await askForCommand();

  switch (command) {
    case "list":
      console.log("List Case");
      break; // there is only one valid case, therefore a break stops the process; if more cases may be valid no break is needed
    case "add":
      addNewCredential();
      break;
  }
};

start();
