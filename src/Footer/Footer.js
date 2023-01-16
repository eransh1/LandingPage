import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <section className={styles.footer}>
        <p className={styles.text}>Privacy Policy</p>
        <div className={styles.linkCont}>
            <p className={styles.link}>Facebook</p>
            <p className={styles.link}>Instagram</p>
            <p className={styles.link}>Linkedin</p>
        </div>
    </section>
  )
}

export default Footer