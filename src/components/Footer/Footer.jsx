import styles from "./Footer.module.scss"
import FooterLogo from '../../img/logo-recafe.png';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.col}>
                    <img 
                        className={styles.logo}
                        src={FooterLogo} 
                        alt="brand logo" 
                    />
                </div>
                <div className={styles.col}>
                    <ul>
                        <li>
                            <a href="#" className={styles.link}>How it works</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>Menu</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>For office</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>Shipping and payment</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>FAQ</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>Invite a friend</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <ul>
                        <li>
                            <a href="#" className={styles.link}>Store addresses</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>Career</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>Public offer</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>Shipping and payment</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>Processing of personal data</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>Terms of use</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <div className={styles.telephone}>
                        <div className={styles.title}>Support:</div>
                        <a 
                            className={styles.number}
                            href="tel:86665554433"
                        >
                            8 666 <span className={styles.regionalNumber}>555 44 33</span>
                        </a>
                    </div>
                    <div>
                        <div>Mo. — Fr. from 9:00 to 20:00</div>
                        <div>Sa. — Su. from 9:00 to 18:00</div>
                    </div>
                    <div>
                        info@example.ru
                    </div>
                </div>
            </div>
        </footer>
    )
}