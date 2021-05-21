import React from "react";
import styles from "./Hero.module.css";

type HeroProps = {
  title: string;
  subtitle: string;
  imgSrc: string;
};

function Hero({ title, subtitle, imgSrc }: HeroProps): JSX.Element {
  return (
    <div className={styles.hero}>
      <h1 className={styles.hero__title}>{title}</h1>
      <p className={styles.hero__subtitle}>{subtitle}</p>
      <img className={styles.hero__image} src={imgSrc} alt="" />
    </div>
  );
}

export default Hero;
