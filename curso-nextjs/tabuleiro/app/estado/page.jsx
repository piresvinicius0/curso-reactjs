"use client"

import { useState } from "react"

export default function Mouse() {
    const estilo = { 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        felxDirection: "column",
        backgroundColor: "#222" ,
        color: "#fff",
        height: "100vh"
        }

    const [x, setX] = useState(0)

    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]

    function quandoMover(e) {
        setX(e.clientX)
        alterarY(e.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span> Eixo X: {x}</span>
            <span> Eixo Y: {y}</span>
        </div>
    )
}