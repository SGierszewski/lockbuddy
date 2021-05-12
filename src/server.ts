import { readCredentials } from "./utils/credentials";

import {
  askForMainPassword,
  askForCommand,
  askForCredential,
  chooseService,
} from "./utils/question";
import {
  isMainPasswordValid,
  // doesCredentialServiceExist,
} from "./utils/validation";

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
  if (!(await isMainPasswordValid(mainPassword))) {
    console.log("Is invalid");
    start();
    return;
  }

  console.log("Is valid");

  const command = await askForCommand();

  switch (command) {
    case "list":
      {
        const credentials = await readCredentials();
        const credentialServices = credentials.map(
          (credential) => credential.service
        );
        const service = await chooseService(credentialServices);
        const selectedService = credentials.find(
          (credential) => credential.service === service
        );
        console.log(selectedService);
      }
      break; // there is only one valid case, therefore a break stops the process; if more cases may be valid no break is needed
    case "add":
      {
        const newCredential = await askForCredential();
        console.log(newCredential);
        // const startAddCase = async () => {
        //   const newService = await addNewService();
        //   if (!doesCredentialServiceExist(newService)) {
        //     await addNewUserAndPw();
        //     console.log("Your new service has been saved");
        //   } else {
        //     console.log("Service already exists");
        //     startAddCase();
        //   }
        // };
        // startAddCase();
      }
      break;
  }
};

start();
