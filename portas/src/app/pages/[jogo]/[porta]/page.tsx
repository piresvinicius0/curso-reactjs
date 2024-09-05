"use client"

import styles from "./Jogo.module.css"
import { useEffect, useState } from "react"
import Porta from "../../../components/porta/Porta"
import { atualizarPortas, criarPortas } from "../../../portas"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function Jogo() {

  const { jogo, porta } = useParams()

  const [portas, setPortas] = useState([])

  

  useEffect(() => {
    const numPortas = +jogo || 3
    const comPresente = +porta || 2
    setPortas(criarPortas(numPortas, comPresente))
    
  }, [jogo, porta])


  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }

  return (
    <main>
      <div id={styles.jogo}>
        <div className={styles.portas}>
          {renderizarPortas()}
        </div>
        <div className={styles.botoes}>
          <Link href="/">
            <button>Reiniciar Jogo</button>
          </Link>
        </div>
      </div>
    </main>
  )

}