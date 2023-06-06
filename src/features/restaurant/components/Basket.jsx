import { 
    faBasketShopping, 
    faXmark,
    faPlus,
    faMinus
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useState } from "react"
import { 
    useDispatch, 
    useSelector
} from "react-redux"

import { 
    selectBasket, 
    selectCount,
    deleteOne,
    increaseCountByOne,
    decreaseCountByOne,
    selectTotalPrice
} from "../slices/basketSlice"

const BasketItem = ({ item }) => {
    const dispatch = useDispatch()

    return (
        <article className="basket__item">
            <div className="main-content">
                <img
                    className="item-img"
                    src={item.img}
                    alt={item.title}
                />
                <div className="item-inner-container">
                    <p className="item-title">{item.title}</p>
                    <div className="item-quantity-container">
                        <button 
                            className="quantity-btn"
                            onClick={() => dispatch(decreaseCountByOne(item))}
                        >
                            <FontAwesomeIcon className="xmark-icon" icon={faMinus} />
                        </button>
                        <p className="quantity-val">{item.basketCount}</p>
                        <button 
                            className="quantity-btn"
                            onClick={() => dispatch(increaseCountByOne(item))}
                        >
                            <FontAwesomeIcon className="xmark-icon" icon={faPlus} />
                        </button>
                    </div>
                </div>
            </div>
            <button 
                className="item-remove-btn"
                onClick={() => dispatch(deleteOne(item)) }
            >
                <FontAwesomeIcon className="xmark-icon" icon={faXmark} />
            </button>
        </article>
    )
}

export const Basket = () => {
    const [open, setOpen] = useState(false)

    const count = useSelector(selectCount)
    const basket = useSelector(selectBasket)
    const totalPrice = useSelector(selectTotalPrice)

    const handleClick = () => {
        setOpen(!open)
    }

    const content = basket.map((item) => (
        <BasketItem key={item.id} item={item} />
    ))

    return (
        <div className="basket">
            <button className="basket__btn" onClick={handleClick}>
                <FontAwesomeIcon className="icon-shopping" icon={faBasketShopping} />
                <div className="count-val">{count}</div>
            </button>
            {open && (
                <div className="basket__body">
                    <div className="basket__title">BASKET</div>
                    <div className="basket__items">{content}</div>
                    <div className="basket__promo-row">
                        <div className="promo-row-elem-1">
                            <p className="promo-title">Promo</p>
                            <input 
                                className="promo-input"
                                type="text" 
                                placeholder="Enter your promo..."
                                autoComplete="off"
                                name="promo"
                            />
                        </div>
                        <button className="promo-btn btn">APPLY</button>
                    </div>
                    <div className="basket__total">
                        <p className="total-title">Total</p>
                        <p className="total-price">
                            {totalPrice} <span className="currency">₽</span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}