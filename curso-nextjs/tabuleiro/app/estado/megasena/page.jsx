"use client"

import { useEffect, useState } from "react"
import {mega} from "../../functions/mega"
import NumeroDisplay from "../../components/numeroDisplay/NumeroDisplay.jsx"

export default function megasena() {

    const [quantidadeApostas, setQuantidadeApostas] = useState(6)
    const [numeros, setNumeros] = useState([])

    /*useEffect(() => {
        // Gera os números apenas no lado do cliente
        setNumeros(mega(quantidadeApostas));
    }, [quantidadeApostas]);*/

    function renderNumeros() {
        return numeros.map(num => <NumeroDisplay key={num} numero={num}/>)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <h1>MegaSena</h1>
            <div style={{display: "flex"}}>
                {renderNumeros()}
            </div>
            <div>
                <input type="number" placeholder="Número de apostas" min={6} max={20} value={quantidadeApostas} onChange={e => setQuantidadeApostas(parseInt(e.target.value) || 6)}/>
                <button onClick={() => setNumeros(mega(quantidadeApostas))}>Gerar Nova Aposta</button>
            </div>
        </div>
    )
}