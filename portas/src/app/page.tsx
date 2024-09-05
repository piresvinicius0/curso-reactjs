"use client"

import Link from "next/link"
import Cartao from "./components/cartao/Cartao"
import styles from "./Formulario.module.css"
export default function Formulario() {

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao></Cartao>
      </div>
      <div>
        <Cartao></Cartao>
        <Cartao bgColor="#28a085">
          <Link href={`/pages/4/2`} className={styles.link}>
            <h2>Jogar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
