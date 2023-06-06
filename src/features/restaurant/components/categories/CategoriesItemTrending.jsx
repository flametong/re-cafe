import { getItemsByTrending } from "../../../../logic/appLogic"
import { CategoriesItem } from "./CategoriesItem"

export const CategoriesItemTrending = () => {
    const filteredItems = getItemsByTrending()

    const content = filteredItems.map((item) => (
        <CategoriesItem key={item.id} item={item} />
    ))

    return (
        <div className="category">
            <div className="category__header">
                <h3 className="category__title">Trending</h3>
            </div>
            <div className="food-cards">{content}</div>            
        </div>
    )
}