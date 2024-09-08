"use client"

import { useState } from "react"
import Questao from "./components/questao/Questao"
import QuestaoModel from "./model/questao"
import RespostaModel from "./model/resposta"

const questaoMock = new QuestaoModel(1, "Qual a cor do céu?",
  [RespostaModel.errada("Branco"),
  RespostaModel.errada("Laranja"),
  RespostaModel.errada("Azul"),
  RespostaModel.certa("Incolor")])

export default function Home() {

  const [questao, setQuestao] = useState(questaoMock)

  function respostaFornecida(indice: number) {
    console.log("Resposta fornecida: ", indice)
    setQuestao(questao.responderCom(indice))
  }

  function tempoEsgotado() {
    if (questao.naoRespondida) {
      setQuestao(questao.responderCom(-1))
    }
  }

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Questao valor={questao} respostaFornecida={respostaFornecida} tempoEsgotado={tempoEsgotado} />
    </div>
  )
}
