import styles from "./Button.module.scss";
import clsx from "clsx";

export const Button = (props) => {
    const { 
        id, className, children, ...restProps
    } = props

    return (
        <button 
            id={id} 
            className={clsx(styles.button, [className])}
            {...restProps}
        >
            {children}
        </button>
    )
}