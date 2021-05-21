import React from "react";
import styles from "./Credential.module.css";

type CredentialProps = {
  service: string;
  username: string;
  password: string;
};

function Credential({
  service,
  username,
  password,
}: CredentialProps): JSX.Element {
  return (
    <li className={styles.credential}>
      {service} {username} {password} <button></button>
    </li>
  );
}

export default Credential;
