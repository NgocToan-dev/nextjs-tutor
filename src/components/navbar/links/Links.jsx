"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
          {links.map((link, index) => (
            <NavLink key={index} item={link} />
          ))}
          {session ? (
            <>
              {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLink item={{ title: "Login", path: "/login" }} />
          )}
        </div>
        {!open && (
          <button
            className={styles.menuBtn}
            onClick={() => setOpen((prev) => !prev)}
          >
          </button>
        )}
        {open && (
          <div className={styles.mobileLinks}>
            <button
              className={styles.menuBtn}
              onClick={() => setOpen((prev) => !prev)}
            >
              Menu
            </button>
            {links.map((link, index) => (
              <NavLink key={index} item={link} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Links;
