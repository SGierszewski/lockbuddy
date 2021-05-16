// the chosen command can only be list or add
export type Command = "list" | "add";

export type NewUserAndPw = {
  name: string;
  password: string;
};
// define the type credential
export type Credential = {
  service: string;
  username: string;
  password: string;
};
