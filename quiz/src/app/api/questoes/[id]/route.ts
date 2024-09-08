import { NextResponse } from "next/server"
import questoes from "../../../banco/bancodequestoes"

export async function GET (req: Request, { params }: { params: { id: string } }) {
    const res = { id: +params.id  }
    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === res.id)
    if(unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
        return NextResponse.json(questaoSelecionada.toObject(), { status: 200 })
    } else {
        return NextResponse.json({ error: "Questão não encontrada"  }, { status: 404 }  )
    }
}