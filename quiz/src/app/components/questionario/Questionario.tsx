import QuestaoModel from "../../model/questao"
import Botao from "../botao/Botao"
import Questao from "../questao/Questao"
import styles from "./Questionario.module.css"

interface QuestionarioProps {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irPraProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

    function respostaFornecida(indice: number) {
        if(props.questao.naoRespondida) {
            props.questaoRespondida(props.questao.responderCom(indice))
            props.irPraProximoPasso()
        }
    }

    return (
        <div className={styles.questionario}>
            {props.questao ? (
                <>
                    <Questao
                        valor={props.questao}
                        tempoPraResposta={15}
                        respostaFornecida={respostaFornecida}
                        tempoEsgotado={props.irPraProximoPasso} />
                    <Botao texto={props.ultima ? "Finalizar" : "Próxima"} onClick={props.irPraProximoPasso} />
                </>
            )
                : null
            }
        </div>
    )
}