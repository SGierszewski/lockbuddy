import dotenv from "dotenv";
import {
  deleteCredential,
  saveCredentials,
  selectCredential,
} from "./utils/credentials";
import {
  askForMainPassword,
  askForCommand,
  askForCredential,
} from "./utils/question";
import { isMainPasswordValid } from "./utils/validation";
import CryptoJS from "crypto-js";
import { connectDatabase, disconnectDatabase } from "./database";

dotenv.config();

//function start() {

const start = async () => {
  if (process.env.MONGO_URL === undefined) {
    throw new Error("Missing env MONGO_URL");
  }

  await connectDatabase(process.env.MONGO_URL);
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
        const selectedCredential = await selectCredential();

        if (selectedCredential) {
          const cryptPassword = CryptoJS.AES.decrypt(
            selectedCredential.password,
            mainPassword
          );
          console.log(
            `${selectedCredential.service}:
          Username: ${selectedCredential.username}
          Password: ${cryptPassword.toString(CryptoJS.enc.Utf8)}`
          );
        }
      }
      break; // there is only one valid case, therefore a break stops the process; if more cases may be valid no break is needed
    case "add":
      {
        const newCredential = await askForCredential();
        await saveCredentials(newCredential, mainPassword);
        console.log(newCredential);
      }
      break;

    case "delete":
      {
        const selectedCredential = await selectCredential();
        await deleteCredential(selectedCredential.service);
      }
      break;
  }
  await disconnectDatabase();
};

start();
