export const revalidate = 10;

export default function EstaticoComRevalidacao() {

    const numero = Math.random()

    return (
        <div>
            <h1>Estático #1</h1>
            <h2>{numero}</h2>
        </div>
    )
}

export async function generateStaticParams() {
    return []; // Retorna um array vazio se não houver parâmetros dinâmicos
  }

// Indica que esta página deve ser pré-renderizada estaticamente a cada 10s (SSG)
