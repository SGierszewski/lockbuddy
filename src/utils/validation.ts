export const isMainPasswordValid = (mainPassword: string): boolean => {
  return mainPassword === "123";
};

export const doesCredentialServiceExist = (service: string): boolean => {
  return service === "Github";
};
