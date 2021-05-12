export const printPassword = (service: string): void => {
  const password = service + "123";
  console.log(`The password for ${service} is ${password}`);
};
