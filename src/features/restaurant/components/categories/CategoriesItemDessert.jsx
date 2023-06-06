import { Categories } from "../../../../AllData"
import { CategoriesItem } from "./CategoriesItem"
import {
    getItemsByCategory, 
    capitalizeFirstLetter
} from "../../../../logic/appLogic"

export const CategoriesItemDessert = () => {
    const category = Categories.DESSERT
    const filteredItems = getItemsByCategory(category)

    const content = filteredItems.map((item) => (
        <CategoriesItem key={item.id} item={item} />
    ))

    return (
        <div className="category">
            <div className="category__header">
                <h3 className="category__title">{capitalizeFirstLetter(category)}</h3>
            </div>
            <div className="food-cards">{content}</div>            
        </div>
    )
}