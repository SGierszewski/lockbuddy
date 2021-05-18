import fs from "fs/promises";
import type { Credential } from "../types";
import { askForCredential } from "../utils/question";
import CryptoJS from "crypto-js";
import { getCollection } from "../database";
// import { doesCredentialServiceExist } from "./validation";

type DB = {
  credentials: Credential[];
};

export const readCredentials = async (): Promise<Credential[]> => {
  const response = await fs.readFile("./db.json", "utf-8");
  const data: DB = JSON.parse(response);
  return data.credentials;
};

// export const readCredentials = async (client, collection): Promise<collection> {
//   const response = await client.db("lockbuddy").collection("credentials").find()
// };

// export const saveCredentials = async (
//   credential: Credential
// ): Promise<void> => {
//   const credentials = await readCredentials();
//   const newCredential = await askForCredential();
//   // if (!doesCredentialServiceExist(newCredential.service)) {
//   const cryptPassword = CryptoJS.AES.encrypt(
//     newCredential.password,
//     "test"
//   ).toString();
//   newCredential.password = cryptPassword;
//   credentials.push(newCredential);
//   const newDB = { credentials: credentials };
//   const newCredentialListJSON = JSON.stringify(newDB, null, 2);
//   await fs.writeFile("./db.json", newCredentialListJSON);
//   console.log("We have saved your new credential!");
//   // } else {
//   //   console.log("Service already exists");
//   // }
// };

export const saveCredentials = async (password: string): Promise<void> => {
  const newCredential = await askForCredential();
  const passwordEncrypt = CryptoJS.AES.encrypt(
    newCredential.password,
    password
  ).toString();
  newCredential.password = passwordEncrypt;
  await getCollection("credentials").insertOne(newCredential);
};
