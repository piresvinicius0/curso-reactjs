"use client"
import Botao from "../../components/botao/Botao"
import Estatistica from "../../components/estatistica/Estatistica"
import styles from "./Resultado.module.css"
import { useRouter, useSearchParams } from "next/navigation"

export default function Resultado() {
    const searchParams = useSearchParams()
    const totalQuestoes = parseInt(searchParams.get('total') || '0')
    const totalCertas = parseInt(searchParams.get('certas') || '0')
    const percentual = Math.round((totalCertas / totalQuestoes) * 100)

    return (
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <div style={{display: "flex"}}>
                <Estatistica texto="Perguntas" valor={totalQuestoes} />
                <Estatistica texto="Certas" valor={totalCertas} corFundo="#9CD2A4"/>
                <Estatistica texto="Percentual" valor={`${percentual}%`} corFundo="#DE6A33"/>
            </div>
            <Botao href="/" texto="Tentar Novamente"></Botao>
        </div>
    )
}