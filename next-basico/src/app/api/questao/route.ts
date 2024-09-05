import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    if(req.method === 'GET') {
        const id = req.nextUrl.searchParams.get('id')
        return NextResponse.json({ 
            id,
            enunciado: 'Qual a sua cor preferida?',
            respostas: ['Azul', 'Vermelho', 'Amarelo', 'Verde']
        }, { status: 200  })
    } else {
        return NextResponse.json({ message: 'Método não permitido' }, { status: 405  })
    }
}