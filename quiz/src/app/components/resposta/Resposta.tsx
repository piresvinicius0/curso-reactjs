"use client"

import RespostaModel from "../../model/resposta"
import styles from "./Resposta.module.css"

interface RespostaProps {
    valor: RespostaModel
    indice: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (indice: number) => void
}

export default function Resposta(props: RespostaProps) {
    const resposta = props.valor
    const respostaRevelada = resposta.revelada ? styles.respostaRevelada : ''
    return (
        <div className={styles.resposta} onClick={() => props.respostaFornecida(props.indice)}>
            <div className={`${respostaRevelada} ${styles.conteudoResposta}`}>
                    <div className={`${styles.frente} ${styles.frenteeverso}`}>
                        <div className={styles.letra} style={{ backgroundColor: props.corFundoLetra }}>
                            {props.letra}
                        </div>
                        <div className={styles.valor}>{resposta.valor}</div>
                    </div>
                    <div className={`${styles.verso} ${styles.frenteeverso}`}>
                        {resposta.certa ? (
                            <div className={styles.certa}>
                                <div>A Resposta certa é...</div>
                                <div className={styles.valor}>{resposta.valor}</div>
                            </div>
                        ) : (
                            <div className={styles.errada}>
                                <div>A Resposta informada esta errada</div>
                                <div className={styles.valor}>{resposta.valor}</div>
                            </div>
                        )}
                    </div>
            </div>
        </div>
    )
}