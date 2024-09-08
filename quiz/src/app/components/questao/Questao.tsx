"use client"

import QuestaoModel from "../../model/questao"
import Enunciado from "../enunciado/Enunciado"
import Resposta from "../resposta/Resposta"
import Temporizador from "../temporizador/temporizador"
import style from "./Questao.module.css"

const letras = [{
    valor: "A", cor: "#F2c866"
}, {
    valor: "B", cor: "#F266BA"
}, {
    valor: "C", cor: "#85D4F2"
}, {
    valor: "D", cor: "#BCE596"
}]

interface QuestaoProps {
    valor: QuestaoModel
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void;
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor

    function renderizarRespostas() {
        return questao.respostas.map((resposta, index) => {

            return <Resposta
                key={index}
                valor={resposta.toObject()}
                indice={index}
                letra={letras[index].valor}
                corFundoLetra={letras[index].cor}
                respostaFornecida={props.respostaFornecida} />
        })
    }

    return (
        <div className={style.questao}>
            <Enunciado texto={questao.enunciado} />
            <Temporizador duracao={10} tempoEsgotado={props.tempoEsgotado}/>
            {renderizarRespostas()}
        </div>
    )
}