import React from "react";
import styles from "./App.module.css";

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <img />
        <h1>LockBuddy</h1>
        <p>LockBuddy helps you manage your credentials</p>
      </header>
    </div>
  );
}

export default App;
