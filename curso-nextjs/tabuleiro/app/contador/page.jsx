"use client"

import ContadorDisplay from "../components/numeroDisplay/NumeroDisplay.jsx"
import { useState } from "react"

export default function contador() {


    const [numero, setContador] = useState(0)


    const updateContador = (op) => {
        console.log("Operação: ", op)
        if (op.target.innerText === "Incrementar") {
            setContador(numero + 1)
        } else if (op.target.innerText === "Decrementar") {
            setContador(numero - 1)
        }
        
    }
    return (
        <div>
            <div>Contador</div>
            <ContadorDisplay numero={numero}/>
            <div>
                <button onClick={updateContador}>Incrementar</button>
                <button onClick={updateContador}>Decrementar</button>
            </div>
        </div>
    )
}