import styles from "./ProductPage.module.scss"

import { useParams } from "react-router-dom"
import { items } from "../../AllData"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addOne } from "../../features/slices/basketSlice"

import { 
    faPlus,
    faMinus
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Main } from "../../components/Main/Main"
import { Button } from "../../ui/Button/Button"
import clsx from "clsx"
import { calculateEnergyPortionVal } from "../../features/appLogic"


export const ProductPage = () => {
    const { id } = useParams()
    const [product] = items.filter((item) => item.id === parseInt(id))
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const decrease = () => { if (quantity > 1) setQuantity(quantity - 1) }
    const increase = () => { if (quantity < 100) setQuantity(quantity + 1) }

    return (
        <Main>
            <article className={styles.product}>
                <div className={styles.header}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>{product.title}</h1>
                        <p className={styles.description}>{product.description}</p>
                    </div>
                    <div className={styles.priceContainer}>
                        <div className={styles.price}>
                            <span className={styles.number}>{product.price}</span>
                            &nbsp;{product.currency}
                        </div>
                    </div>
                </div>
                <img
                    className={styles.img}
                    src={product.img} 
                    alt={product.title}
                />
                <div className={styles.main}>
                    <p className={styles.productDescriptionFull}>{product.descriptionFull}</p>
                    <div className={styles.productExtraInfo}>
                        <div className={styles.col1}>
                            <div className={styles.weightContainer}>
                                <div>Weight, g</div>
                                <div className={styles.weightVal}>{product.weight}</div>
                            </div>
                            <div className={styles.energyContainer}>
                                <div>Energy value per 100 g, kcal</div>
                                <div className={styles.energyVal}>{product.energyValue}</div>
                            </div>
                            {/* hidden container in desktop */}
                            <div className={clsx(styles.energyPortionContainer, styles.desktop_hide)}>
                                <div>Energy value per serving, kcal</div>
                                <div className={styles.energyPortionVal}>{calculateEnergyPortionVal(product.energyValue, product.weight)}</div>
                            </div>
                            <div className={styles.nutritionalTitle}>Nutritional value per 100 g</div>
                            <div className={styles.proteinsContainer}>
                                <div className={styles.title}>Proteins, g</div>
                                <div>{product.proteins}</div>
                            </div>
                            <div className={styles.fatsContainer}>
                                <div className={styles.title}>Fats, g</div>
                                <div>{product.fats}</div>
                            </div>
                            <div className={styles.carbsContainer}>
                                <div className={styles.title}>Carbs, g</div>
                                <div>{product.carbs}</div>
                            </div>
                        </div>
                        <div className={styles.col2}>
                            <div className={styles.energyPortionContainer}>
                                <div>Energy value per serving, kcal</div>
                                <div className={styles.energyPortionVal}>{calculateEnergyPortionVal(product.energyValue, product.weight)}</div>
                            </div>
                            <div className={styles.ingredientsContainer}>
                                <div className={styles.title}>Ingredients</div>
                                <div className={styles.val}>{product.ingredients}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.quantityContainer}>
                        <div>Quantity</div>
                        <div className={styles.interaction}>
                            <Button
                                className={styles.btn}
                                onClick={decrease}
                            >
                                <FontAwesomeIcon icon={faMinus} />
                            </Button>
                            <div className={styles.val}>{quantity}</div>
                            <Button
                                className={styles.btn}
                                onClick={increase}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </div>
                    </div>
                    <div className={styles.priceContainer}>
                        <div className={styles.price}>
                            <span className={styles.number}>{product.price * quantity}</span>
                            &nbsp;{product.currency}
                        </div>
                        <Button 
                            className={styles.btn}
                            onClick={() => dispatch(addOne(product, quantity))}
                        >
                            + ORDER
                        </Button>
                    </div>
                </div>
            </article>
        </Main>
    )
}