import styles from './Casa.module.css'
export default function Casa(props) {
    return (
        <div style={{backgroundColor: props.preta ? "#000" : "#fff"}} className={styles.casa}></div>
    )
}