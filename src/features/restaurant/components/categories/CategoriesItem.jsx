import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addOne } from "../../slices/basketSlice"

import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CategoriesItem = ({ item }) => {
    const dispatch = useDispatch()

    return (
        <article className="category__food-card">
            <Link to={`/categories/product/${item.id}`}>
                <img
                    className="food-card-img"
                    src={item.img}
                    alt={item.title}
                />
            </Link>
            <div className="food-card-description">
                <h4 className="food-card-title">{item.title}</h4>
                <p className="food-card-caption">{item.description}</p>
            </div>
            <div className="food-card-footer">
                <div className="price">
                    <span className="number">{item.price}</span>
                    &nbsp;{item.currency}
                </div>
                <button 
                    className="food-card-btn btn"
                    onClick={() => dispatch(addOne(item, 1))}
                >
                    <FontAwesomeIcon className="plus-icon" icon={faPlus} /> ORDER
                </button>
            </div>
        </article>
    )
}