import fs from "fs/promises";
import sha256 from "crypto-js/sha256";

export const isMainPasswordValid = async (
  plaintextPassword: string
): Promise<boolean> => {
  const passwordHash = await fs.readFile("./.password", "utf-8");
  const plaintextPasswordHash = sha256(plaintextPassword).toString();
  return plaintextPasswordHash === passwordHash;
};

export const doesCredentialServiceExist = (service: string): boolean => {
  return service === "GitHub";
};
