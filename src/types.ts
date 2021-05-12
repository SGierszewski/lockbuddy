export type Command = "list" | "add";

export type NewUserAndPw = {
  name: string;
  password: string;
};

export type Credential = {
  service: string;
  name: string;
  password: string;
};
