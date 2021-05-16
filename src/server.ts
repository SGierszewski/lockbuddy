import { readCredentials, saveCredentials } from "./utils/credentials";
import {
  askForMainPassword,
  askForCommand,
  chooseService,
} from "./utils/question";
import { isMainPasswordValid } from "./utils/validation";
import CryptoJS from "crypto-js";

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
          //create a new array which only includes services
          (credential) => credential.service
        );
        const service = await chooseService(credentialServices);
        const selectedService = credentials.find(
          (credential) => credential.service === service
        );

        if (selectedService) {
          const cryptPassword = CryptoJS.AES.decrypt(
            selectedService.password,
            "test"
          );
          console.log(
            `${selectedService.service}:
          Username: ${selectedService.username}
          Password: ${cryptPassword.toString(CryptoJS.enc.Utf8)}`
          );
        }
      }
      break; // there is only one valid case, therefore a break stops the process; if more cases may be valid no break is needed
    case "add":
      {
        saveCredentials();

        // const credentials = await readCredentials();
        // console.log(credentials);
        // const newCredential = await askForCredential();

        // Validation of credential service
        // const startAddCase = async () => {
        //   if (!doesCredentialServiceExist(newCredential)) {
        //     await askForCredential();
        //     console.log("Your new service has been saved");
        //   } else {
        //     console.log("Service already exists");
        //     startAddCase();
        //   }
        // };
        // startAddCase();

        // console.log(newCredential);
      }
      break;
  }
};

start();
