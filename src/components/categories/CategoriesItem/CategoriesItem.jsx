import styles from "./CategoriesItem.module.scss"

import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addOne } from "../../../features/slices/basketSlice"

import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Button } from "../../../ui/Button/Button"

export const CategoriesItem = ({ item }) => {
    const dispatch = useDispatch()

    return (
        <article className={styles.card}>
            <Link to={`/categories/product/${item.id}`}>
                <img
                    className={styles.cardImg}
                    src={item.img}
                    alt={item.title}
                />
            </Link>
            <div className={styles.cardDescription}>
                <h4 className={styles.cardTitle}>{item.title}</h4>
                <p className={styles.cardCaption}>{item.description}</p>
            </div>
            <div className={styles.cardFooter}>
                <div className={styles.price}>
                    <span className={styles.number}>{item.price}</span>
                    &nbsp;{item.currency}
                </div>
                <Button
                    className={styles.orderBtn}
                    onClick={() => dispatch(addOne(item, 1))}
                >
                    <FontAwesomeIcon icon={faPlus} /> ORDER
                </Button>
            </div>
        </article>
    )
}