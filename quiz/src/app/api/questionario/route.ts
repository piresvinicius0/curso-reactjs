import { NextResponse } from "next/server"
import questoes from "../../banco/bancodequestoes"
import { embaralhar } from "../../functions/arrays"

export async function GET (req: Request) {
    const ids = questoes.map(q => q.id)
    return NextResponse.json(embaralhar(ids), { status: 200 }  )
}