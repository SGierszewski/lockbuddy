import React from "react";
import styles from "./App.module.css";
import { Credential as CredentialType } from "../types";
import Credential from "./components/Credential";
import Hero from "./components/Hero";

function App(): JSX.Element {
  const credentials: CredentialType[] = [
    {
      service: "GitHub",
      username: "Steffi",
      password: "123",
    },
    {
      service: "Google",
      username: "SG",
      password: "xyz",
    },
    {
      service: "Twitch",
      username: "SteffiG",
      password: "testtest123",
    },
    {
      service: "Steam",
      username: "MegaGamer",
      password: "zocken123",
    },
  ];
  const credentialElements = credentials.map((credential) => (
    <Credential key={credential.service} credential={credential} />
  ));

  return (
    <div className={styles.App}>
      <Hero
        title="LockBuddy"
        subtitle="All your credentials in one safe space"
        imgSrc="../src/assets/dog.svg"
      />
      <main>
        <ul className={styles.Credential_list}>{credentialElements}</ul>
      </main>
    </div>
  );
}

export default App;
