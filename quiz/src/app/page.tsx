"use client"

import { useEffect, useState } from "react"
import QuestaoModel from "./model/questao"
import Questionario from "./components/questionario/Questionario"
import { useRouter } from "next/navigation"
import { env } from "process"

export default function Home() {
  const URL = process.env.NEXT_PUBLIC_BASE_URL
  console.log("URL: ", URL)

  const router = useRouter()
  const [idsDasQuestoes, setIdsDasQuestoes] = useState([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)

  async function carregarIdsQuestoes() {
    const resp = await fetch(`${URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    setIdsDasQuestoes(idsDasQuestoes)
  }

  async function carregarQuestao(id: number) {
    const resp = await fetch(`${URL}/questoes/${id}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.fromObject(json)
    setQuestao(novaQuestao)
  }

  function idProximaQuestao() {
    if (questao) {
      const proxIndice = idsDasQuestoes.indexOf(questao.id) + 1
      return idsDasQuestoes[proxIndice]
    }
  }

  // Primeira renderização. Quando terminar a renderização (simbolizado pelas []), carregar os primeiros ids das questões
  useEffect(() => {
    carregarIdsQuestoes()
  }, [])

  // Quando os ids das questões forem carregados, carregar a primeira questão
  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  function respostaFornecida(indice: number) {
    console.log("Resposta fornecida: ", indice)
    setQuestao(questao.responderCom(indice))
  }

  function tempoEsgotado() {
    if (questao.naoRespondida) {
      setQuestao(questao.responderCom(-1))
    }
  }

  function questaoRespondida(questao: QuestaoModel) {
    setQuestao(questao)
    const acertou = questao.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }

  function irProximoPasso() {
    const proximoId = idProximaQuestao()
    proximoId ? irPraProximaQuestao(proximoId) : finalizar()
  }

  function irPraProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId)
  }

  function finalizar() {
    const queryParams = new URLSearchParams({
      total: "" + idsDasQuestoes.length,
      certas: "" + respostasCertas
    }).toString()

    router.push(`/resultado?${queryParams}`)
  }

  return questao ?
    (<Questionario
      questao={questao}
      ultima={idProximaQuestao() === undefined}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irProximoPasso}
    />
    ) : false

}
