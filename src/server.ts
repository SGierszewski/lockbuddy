import { askForMainPassword } from "./utils/question";
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

  /* ToDo */
  // askForCommand();
};

start();
