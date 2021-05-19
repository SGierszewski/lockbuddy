import type { Credential } from "../types";
import { chooseService } from "../utils/question";
import CryptoJS from "crypto-js";
import { getCollection, getCredentialsCollection } from "../database";

export const saveCredentials = async (
  newCredential: Credential,
  password: string
): Promise<void> => {
  // const newCredential = await askForCredential();
  const passwordEncrypt = CryptoJS.AES.encrypt(
    newCredential.password,
    password
  ).toString();
  newCredential.password = passwordEncrypt;
  await getCollection("credentials").insertOne(newCredential);
};

//possible to search for specific credentials inside find query; important to set toArray()!!
//sort service by name; 1 = upwards, -1 = downwards
export const readCredentials = async (): Promise<Credential[]> => {
  return await getCredentialsCollection().find().sort({ service: 1 }).toArray();
};

export const deleteCredential = async (service: string): Promise<void> => {
  await getCollection("credentials").deleteOne({ service: service });
  console.log("Credential successfully deleted.");
};

export async function selectCredential(): Promise<Credential> {
  const credentials = await readCredentials();
  const credentialServices = credentials.map(
    //create a new array which only includes services
    (credential) => credential.service
  );
  const service = await chooseService(credentialServices);
  const selectedCredential = credentials.find(
    (credential) => credential.service === service
  );
  if (!selectedCredential) {
    throw new Error("No credential found");
  }
  return selectedCredential;
}
