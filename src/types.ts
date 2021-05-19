// define the type Command: the chosen command can only be list, add or delete
export type Command = "list" | "add" | "delete";

// define the type credential
export type Credential = {
  service: string;
  username: string;
  password: string;
};
