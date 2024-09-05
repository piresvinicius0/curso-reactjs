"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

export default function rota() {
    const pathname = usePathname()
    const params = useSearchParams()
    console.log(pathname) // Mostra a rota atual
    console.log(params.get('id')) // Mostra o valor do parâmetro 'id'
    return (
        <div>
            <h1>Rota Home</h1>
            <ul>
                <Link href="/rotas/login">
                    <li>Clique Aqui</li>               
                </Link>
            </ul>
        </div>
    )
}