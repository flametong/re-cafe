import { useParams } from "react-router-dom"
import { items } from "../../../AllData"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addOne } from "../slices/basketSlice"

import { 
    faPlus,
    faMinus
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const ProductPage = () => {
    const { id } = useParams()
    const [product] = items.filter((item) => item.id === parseInt(id))
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const decrease = () => { if (quantity > 1) setQuantity(quantity - 1) }
    const increase = () => { if (quantity < 100) setQuantity(quantity + 1) }

    return (
        <main className="main">
            <article className="product">
                <div className="product__header">
                    <div className="title-container">
                        <h1 className="product-title">{product.title}</h1>
                        <p className="product-description">{product.description}</p>
                    </div>
                    <div className="price-container">
                        <div className="price">
                            <span className="number">{product.price}</span>
                            &nbsp;{product.currency}
                        </div>
                    </div>
                </div>
                <img
                    className="product__img"
                    src={product.img} 
                    alt={product.title}
                />
                <div className="product__main">
                    <p className="product-description-full">{product.descriptionFull}</p>
                    <div className="product-extra-info">
                        <div className="col-1">
                            <div className="weight-container">
                                <div className="weight-title">Weight, g</div>
                                <div className="weight-val">{product.weight}</div>
                            </div>
                            <div className="energy-container">
                                <div className="energy-title">Energy value per 100 g, kcal</div>
                                <div className="energy-val">{product.energyValue}</div>
                            </div>
                            {/* hidden container in desktop */}
                            <div className="energy-portion-container desktop_hide">
                                <div className="energy-portion-title">Energy value per serving, kcal</div>
                                <div className="energy-portion-val">{Math.round(product.energyValue * product.weight / 100)}</div>
                            </div>
                            <div className="nutritional-title">Nutritional value per 100 g</div>
                            <div className="proteins-container">
                                <div className="proteins-title">Proteins, g</div>
                                <div className="proteins-val">{product.proteins}</div>
                            </div>
                            <div className="fats-container">
                                <div className="fats-title">Fats, g</div>
                                <div className="fats-val">{product.fats}</div>
                            </div>
                            <div className="carbs-container">
                                <div className="carbs-title">Carbs, g</div>
                                <div className="carbs-val">{product.carbs}</div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="energy-portion-container">
                                <div className="energy-portion-title">Energy value per serving, kcal</div>
                                <div className="energy-portion-val">{Math.round(product.energyValue * product.weight / 100)}</div>
                            </div>
                            <div className="ingredients-container">
                                <div className="ingredients-title">Ingredients</div>
                                <div className="ingredients-val">{product.ingredients}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__footer">
                    <div className="quantity-container">
                        <div className="quantity-title">Quantity</div>
                        <div className="quantity-interaction">
                            <button 
                                className="quantity-btn btn"
                                onClick={decrease}
                            >
                                <FontAwesomeIcon className="basket-icon" icon={faMinus} />
                            </button>
                            <div className="quantity-val">{quantity}</div>
                            <button 
                                className="quantity-btn btn"
                                onClick={increase}
                            >
                                <FontAwesomeIcon className="basket-icon" icon={faPlus} />
                            </button>
                        </div>
                    </div>
                    <div className="price-container">
                        <div className="price">
                            <span className="number">{product.price * quantity}</span>
                            &nbsp;{product.currency}
                        </div>
                        <button 
                            className="product-btn btn"
                            onClick={() => dispatch(addOne(product, quantity))}
                        >
                            + ORDER
                        </button>
                    </div>
                </div>
            </article>
        </main>
    )
}