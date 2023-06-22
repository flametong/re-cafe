import styles from "./Main.module.scss"

export const Main = (props) => {
    const {
        className, children, ...restProps
    } = props

    return (
        <main className={styles.main}>
            { children }
        </main>
    )
}