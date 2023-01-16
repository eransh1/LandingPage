import React from 'react'
import styles from "./Navbar.module.css"
import logo from "../images/fingerprint.png"
import apple from "../images/appleLogo.png"
const Navbar = () => {
  return (
    <section className={styles.navbar}>
    
        <div className={styles.brandLogo}>
            <img className={styles.logo} src={logo} alt="logo" />
        </div>
        <div className={styles.linksCont}>
            <h3 className={styles.links}>Payment</h3>
            <p className={styles.partition}>/</p>
            <h3 className={styles.links}>Services</h3>
            <p className={styles.partition}>/</p>
            <h3 className={styles.links}>Account</h3>
        </div>
       
        <div className={styles.btnCont}>
            <button className={styles.button}><div style={{display:"flex"}}><img className={styles.appleLogo} src={apple} alt="apple" /></div>
            <div>Download From <br></br><span>App Store</span></div></button>
        </div>
    </section>
  )
}

export default Navbar