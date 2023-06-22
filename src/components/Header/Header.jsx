import styles from "./Header.module.scss"

import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import HeaderLogo from '../../img/logo-recafe.png'
import { CityDropdown } from '../CityDropdown/CityDropdown'
import { Button } from "../../ui/Button/Button"

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.row1}>
                    <div className={styles.row1Elem1}>
                        <Link to="/">
                            <img 
                                className={styles.logo}
                                src={HeaderLogo} 
                                alt="brand logo" 
                            />
                        </Link>
                        <CityDropdown />
                        <div className={styles.telephone}>
                            <div className={styles.title}>Telephone:</div>
                            <a 
                                className={styles.number}
                                href="tel:86665554433"
                            >
                                8 666 <span className={styles.regionalNumber}>555 44 33</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <Button className={styles.signInBtn}>Sign In</Button>
                        <a href="#" className={styles.signUpBtn}>Sign Up</a>
                    </div>
                </div>
                <div className={styles.row2}>
                    <span className={styles.locationIcon}>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <input 
                        className={styles.address}
                        type="text" 
                        placeholder="Enter shipping address..."
                        autoComplete="off"
                        name="ADDRESS"
                    />
                </div>
            </div>
        </header>
    )
}