/*export function getStaticProps() {
    props : {
        numero: Math.random()
    }
}*/ /* A função getStaticProps é obsoleta no next 14 basta realizar o fecth dentro da função */

export default function estaticoProps() {

    const numero = Math.random()

    return (
        <div>
            <h1>Estático #1</h1>
            <h2>{numero}</h2>
        </div>
    )
}

// Indica que esta página deve ser pré-renderizada estaticamente (SSG)
export const revalidate = false; // Faz com que a página seja gerada uma vez e nunca revalide