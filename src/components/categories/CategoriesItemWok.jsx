import styles from "./Category.module.scss"

import { Categories } from "../../AllData"
import { CategoriesItem } from "./CategoriesItem/CategoriesItem"
import {
    getItemsByCategory, 
    capitalizeFirstLetter
} from "../../features/appLogic"

export const CategoriesItemWok = () => {
    const category = Categories.WOK
    const filteredItems = getItemsByCategory(category)

    const content = filteredItems.map((item) => (
        <CategoriesItem key={item.id} item={item} />
    ))

    return (
        <div className={styles.category}>
            <div className={styles.header}>
                <h3 className={styles.title}>{capitalizeFirstLetter(category)}</h3>
            </div>
            <div className={styles.cards}>{content}</div>            
        </div>
    )
}