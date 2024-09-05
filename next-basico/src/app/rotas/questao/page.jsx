"use client"
import {useState, useEffect} from 'react'

export default function questao() {

    const [questao, setQuestao] = useState({id: 0, enunciado: '', respostas: []  })

    useEffect(() => {
        fetch('http://localhost:3000/api/questao')
           .then(response => response.json())
           .then(data => setQuestao(data))
    }, [])

    function renderizarRespostas() {
        if(questao) {
            return questao.respostas.map((resposta, index) => (
                <li key={index}>{resposta}</li>
            ))
        }
        return false
    }

    return (
        <div>
            <h1>Questão</h1>
            <div>
                <span>{questao.enunciado}</span>
                <ul>
                    {renderizarRespostas()}
                </ul>
            </div>
        </div>
    )
}