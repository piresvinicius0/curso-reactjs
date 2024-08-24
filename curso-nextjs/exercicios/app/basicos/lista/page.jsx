"use client";

export default function list() {
    return (
        <div>
            {gerarLista(20)}
        </div>)
}

function gerarLista(final = 10) {
    const lista = [];
    for (let i = 1; i <= final; i++) {
        lista.push(<span key={i}>{i},</span> )
    }
    return lista

}