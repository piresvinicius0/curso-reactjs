"use client";

export default function segundo() {

    const subtitle = "Estoy no javascript";
    return (
        <div>
            <h1>Segundo Componente</h1>
            <p>{Math.max(13, 39)}</p>
            <button onClick={() => alert('Botão do segundo componente')}>Alertar</button>
        </div>
    )
}
