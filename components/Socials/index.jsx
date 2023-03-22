import React from "react";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import styles from "../../styles/Socials.module.css";
import Link from "next/link";

export default function Socials() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.button}>
          <div className={styles.icon}>
            <Link href="https://twitter.com/blvckmvn">
              <FiTwitter className={styles.fab} />
            </Link>
          </div>
        </div>

        <div className={styles.button}>
          <div className={styles.icon}>
            <Link href='https://www.instagram.com/kolvde/'>
              <FiInstagram className={styles.fab} />
            </Link>
          </div>
        </div>

        <div className={styles.button}>
          <div className={styles.icon}>
            <Link href='https://github.com/koladebalogun?tab=repositories'>
              <AiFillGithub className={styles.fab} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
