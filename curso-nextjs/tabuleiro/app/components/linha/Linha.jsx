import styles from './Linha.module.css'
import Casa from './../casa/Casa'
export default function Linha(props) {
    return (
        <div className={styles.linha}>
            <Casa preta={props.preta}></Casa>
            <Casa preta={!props.preta}></Casa>
            <Casa preta={props.preta}></Casa>
            <Casa preta={!props.preta}></Casa>
            <Casa preta={props.preta}></Casa>
            <Casa preta={!props.preta}></Casa>
            <Casa preta={props.preta}></Casa>
            <Casa preta={!props.preta}></Casa>
        </div>
    )
}