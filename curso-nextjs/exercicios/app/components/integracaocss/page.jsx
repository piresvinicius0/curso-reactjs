import styles from "./integracao.module.css"

export default function integracao() {
    return (
        <div>
            <div className={styles.vermelha}>Texto 1</div>
            <div className={styles.azul}>Texto 2</div>
            <div className={styles.branca}>Texto 3</div>
        </div>
    )
}