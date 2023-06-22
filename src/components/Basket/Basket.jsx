import styles from "./Basket.module.scss"
import { Button } from "../../ui/Button/Button"

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
} from "../../features/slices/basketSlice"

const BasketItem = ({ item }) => {
    const dispatch = useDispatch()

    return (
        <article className={styles.item}>
            <div className={styles.mainContent}>
                <img
                    className={styles.img}
                    src={item.img}
                    alt={item.title}
                />
                <div className={styles.innerContainer}>
                    <p className={styles.innerContainerTitle}>{item.title}</p>
                    <div className={styles.quantityContainer}>
                        <button 
                            className={styles.quantityBtn}
                            onClick={() => dispatch(decreaseCountByOne(item))}
                        >
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <p className={styles.quantityVal}>{item.basketCount}</p>
                        <button 
                            className={styles.quantityBtn}
                            onClick={() => dispatch(increaseCountByOne(item))}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>
            </div>
            <button 
                className={styles.removeBtn}
                onClick={() => dispatch(deleteOne(item)) }
            >
                <FontAwesomeIcon icon={faXmark} />
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
        <div className={styles.basket}>
            <button className={styles.btn} onClick={handleClick}>
                <FontAwesomeIcon className={styles.iconShopping} icon={faBasketShopping} />
                <div className={styles.countVal}>{count}</div>
            </button>
            {open && (
                <div className={styles.body}>
                    <div className={styles.title}>BASKET</div>
                    <div className={styles.items}>{content}</div>
                    <div className={styles.promoRow}>
                        <div className={styles.elem1}>
                            <p className={styles.promoTitle}>Promo</p>
                            <input 
                                className={styles.input}
                                type="text" 
                                placeholder="Enter your promo..."
                                autoComplete="off"
                                name="promo"
                            />
                        </div>
                        <Button>APPLY</Button>
                    </div>
                    <div className={styles.total}>
                        <p>Total</p>
                        <p className={styles.price}>
                            {totalPrice} <span className={styles.currency}>₽</span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}