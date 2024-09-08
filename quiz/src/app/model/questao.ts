import { embaralhar } from "../functions/arrays"
import RespostaModel from "./resposta"

export default class QuestaoModel {
    #id: number
    #enunciado: string
    #respostas: RespostaModel[]
    #acertou: boolean

    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false) {
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id(): number {
        return this.#id
    }

    get enunciado(): string {
        return this.#enunciado
    }

    get respostas(): any[] {
        return this.#respostas
    }

    get acertou(): boolean {
        return this.#acertou
    }

    get naoRespondida(): boolean {
        return !this.respondida
    }

    get respondida(): boolean { 
        return this.#respostas.some(resposta => resposta.revelada)
    }

    responderCom(indice: number): QuestaoModel {
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resposta, i) => {
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resposta.certa
            return deveRevelar ? resposta.revelar() : resposta
        })

        return new QuestaoModel(this.#id, this.#enunciado, respostas, acertou)
    }

    embaralharRespostas(): QuestaoModel {
        let respostasembaralhas = embaralhar(this.#respostas)
        return new QuestaoModel(this.#id, this.#enunciado, respostasembaralhas, this.#acertou)
    }

    toObject(): any {
        return {
            id: this.id,
            enunciado: this.enunciado,
            respostas: this.respostas.map(resposta => resposta.toObject()),
            respondida: this.respondida,
            acertou: this.acertou,
        }
    }

}