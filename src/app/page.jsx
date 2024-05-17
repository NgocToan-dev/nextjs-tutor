import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          porro modi expedita sequi adipisci natus aliquam repudiandae quas!
          Corporis consequuntur voluptatum officiis cupiditate veritatis atque
          eius quia nemo dicta blanditiis.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="Brand 1"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" fill className={styles.heroImg} />
      </div>
    </div>
  );
}

export default Home;
