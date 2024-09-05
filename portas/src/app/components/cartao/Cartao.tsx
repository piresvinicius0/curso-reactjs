import styles from "./Cartao.module.css"

interface CartaoProps {
    bgColor?: string
}
export default function Cartao(props) {
    return (
        <div className={styles.cartao} style={{
            backgroundColor: props.bgColor ?? "lightgray"
        }}>
            {props.children}
        </div>
    )
}