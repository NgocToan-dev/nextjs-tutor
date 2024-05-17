import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, non!
          Iusto dolorem, iure expedita ducimus earum tenetur ipsam? Eos dolores,
          nostrum aliquam similique vel error et distinctio voluptas quasi
          assumenda.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>100 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About" fill className={styles.aboutImg} />
      </div>
    </div>
  );
}

export default AboutPage;
