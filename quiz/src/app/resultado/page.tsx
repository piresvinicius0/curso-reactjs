"use client"
import { Suspense, useEffect, useState } from "react"
import Botao from "../components/botao/Botao"
import Estatistica from "../components/estatistica/Estatistica"
import styles from "./Resultado.module.css"
import { useSearchParams } from "next/navigation"

const ResultadoFilho = () => {
    console.log("Resultado renderizado")

    const [totalQuestoes, setTotalQuestoes] = useState(0)
    const [totalCertas, setTotalCertas] = useState(0)
    const [percentual, setPercentual] = useState(0)

    const searchParams = useSearchParams()

    useEffect(() => {
        if (typeof window !== "undefined") {
            const total = parseInt(searchParams.get('total') || '0')
            const certas = parseInt(searchParams.get('certas') || '0')
            const perc = Math.round((certas / total) * 100)

            setTotalQuestoes(total)
            setTotalCertas(certas)
            setPercentual(perc)
        }
    }, [searchParams])

    return (
        <>
            <div style={{ display: "flex" }}>
                <Estatistica texto="Perguntas" valor={totalQuestoes} />
                <Estatistica texto="Certas" valor={totalCertas} corFundo="#9CD2A4" />
                <Estatistica texto="Percentual" valor={`${percentual}%`} corFundo="#DE6A33" />
            </div>
            <Botao href="/" texto="Tentar Novamente"></Botao>
        </>
    )
}

export default function Resultado() {
    console.log("ResultadoWrapper renderizado")
    return (
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <Suspense>
                <ResultadoFilho />
            </Suspense>
        </div>
    )
}

