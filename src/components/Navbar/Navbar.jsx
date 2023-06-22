import styles from "./Navbar.module.scss"

import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li className={styles.element}>
                    <Link to={`categories/trending`} className={styles.link}>
                        TRENDING
                    </Link>
                </li>
                <li className={styles.element}>
                    <Link to={`categories/pizza`} className={styles.link}>
                        PIZZA
                    </Link>
                </li>
                <li className={styles.element}>
                    <Link to={`categories/sushi`} className={styles.link}>
                        SUSHI
                    </Link>
                </li>
                <li className={styles.element}>
                    <Link to={`categories/wok`} className={styles.link}>
                        WOK
                    </Link>
                </li>
                <li className={styles.element}>
                    <Link to={`categories/salads`} className={styles.link}>
                        SALADS
                    </Link>
                </li>
                <li className={styles.element}>
                    <Link to={`categories/soups`} className={styles.link}>
                        SOUPS
                    </Link>
                </li>
                <li className={styles.element}>
                    <Link to={`categories/dessert`} className={styles.link}>
                        DESSERT
                    </Link>
                </li>
            </ul>
        </nav>
    )
}