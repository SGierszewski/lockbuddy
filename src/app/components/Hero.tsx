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
      <span className={styles.hero_header}>
        <h1 className={styles.hero_header__title}>{title}</h1>
        <img className={styles.hero_header__image} src={imgSrc} alt="" />
      </span>
      <p className={styles.hero_header__subtitle}>{subtitle}</p>
    </div>
  );
}

export default Hero;
