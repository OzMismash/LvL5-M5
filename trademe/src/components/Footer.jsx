import React from 'react'
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footerContainer}>
        {/* === Paragraph list things === */}
        <div className={styles.leftList}>
            <p className={styles.list}>Desktop Site</p>
            <p className={styles.list}>About Us</p>
            <p className={styles.list}>Careers</p>
            <p className={styles.list}>Advertise</p>
            <p className={styles.list}>Privacy Policy</p>
            <p className={styles.list}>Terms and Conditions</p>
            <p className={styles.list}>Contact Us</p>
        </div>
        <div className={styles.middleList}>
            <p className={styles.list}>Trade Me</p>
            <p className={styles.list}>Trade Me Insurance</p>
            <p className={styles.list}>Holiday Houses</p>
            <p className={styles.list}>FindSomeone</p>
            <p className={styles.list}>MotorWeb</p>
            <p className={styles.list}>home.co.nz</p>
        </div>
        <div className={styles.rightList}>
            <p className={styles.list}>Community</p>
            <p className={styles.list}>Help</p>
            <p className={styles.list}>Announcements</p>
            <p className={styles.list}>Trust & Safety</p>
            <p className={styles.list}>Seller Information</p>
        </div>

        {/* === Lil image icon logo dudes === */}
        <img src="/Export.png" alt="export" className={styles.exportImg}></img>
        <img src="/Facebook.png" alt="Facebook" className={styles.facebookImg}></img>
        <img src="/Twitter.png" alt="Twitter" className={styles.twitterImg}></img>
    </div>
  )
}

export default Footer