import React from "react";
import styles from "./Credential.module.css";
import type { Credential as CredentialType } from "../../types";

type CredentialProps = {
  credential: CredentialType;
};

function Credential({ credential }: CredentialProps): JSX.Element {
  return (
    <li className={styles.credential}>
      <span>{credential.service}</span>
      <button className={styles.credential__button}></button>
      <span>{credential.username}</span>
      <span>{credential.password}</span>
    </li>
  );
}

export default Credential;
