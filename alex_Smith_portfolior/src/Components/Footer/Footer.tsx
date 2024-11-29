
import styles from './Footer.module.css'

const Footer = () => {

    return (
        <div className={styles.footerSection}>
            <div className={styles.social}>
                <p><a href="">Twitter</a></p>
                <p><a href=""> Facebook</a></p>
                <p><a href=""> Instagram</a></p>
            </div>
            <div className={styles.copyRight}>
                <p>
                    &copy; {new Date().getFullYear()} All rights reserved. LMPixels.
                </p>
            </div>
        </div>
    )
}

export default Footer
