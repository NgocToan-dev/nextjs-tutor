import React from "react";
import styles from "./footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>TianDev</div>
      <div className={styles.text}>
        <p>© 2021 TianDev. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
