import styles from "./Category.module.scss"

import { getItemsByTrending } from "../../features/appLogic"
import { CategoriesItem } from "./CategoriesItem/CategoriesItem"

export const CategoriesItemTrending = () => {
    const filteredItems = getItemsByTrending()

    const content = filteredItems.map((item) => (
        <CategoriesItem key={item.id} item={item} />
    ))

    return (
        <div className={styles.category}>
            <div className={styles.header}>
                <h3 className={styles.title}>Trending</h3>
            </div>
            <div className={styles.cards}>{content}</div>            
        </div>
    )
}