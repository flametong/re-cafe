import styles from "./CityDropdown.module.scss"

export const CityDropdown = () => {
    return (
        <div className={styles.dropdownContainer}>
            <ul>
                <input 
                    type="checkbox" 
                    id="btnControl" 
                    className={styles.btnControl} 
                />
                <label htmlFor="btnControl">
                    <li>
                        <a 
                            className={styles.title} 
                            role="button" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                        >
                            Saint Petersburg &#x25BE;
                        </a>
                        <ul className={styles.dropdown}>
                            <li><a>Moscow</a></li>
                            <li><a>Sochi</a></li>
                            <li><a>Kazan</a></li>
                            <li><a>Irkutsk</a></li>
                        </ul>
                    </li>
                </label>
            </ul>
        </div>    
    )   
}