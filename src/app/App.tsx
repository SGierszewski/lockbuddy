import React from "react";
import styles from "./App.module.css";
import Credential from "./components/Credential";
import Hero from "./components/Hero";

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <Hero
        title="LockBuddy"
        subtitle="All your credentials in one safe space"
        imgSrc="../src/assets/dog.svg"
      />
      <main>
        <ul className={styles.Credential_list}>
          <Credential service="Github" username="Steffi" password="123" />
          <Credential service="Github" username="Steffi" password="123" />
          <Credential service="Github" username="Steffi" password="123" />
          <Credential service="Github" username="Steffi" password="123" />
          <Credential service="Github" username="Steffi" password="123" />
        </ul>
      </main>
    </div>
  );
}

export default App;
