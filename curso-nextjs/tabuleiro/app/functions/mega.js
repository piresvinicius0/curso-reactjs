export function mega(qtd = 6, numeros = [] ) {
    qtd = +qtd
    if(qtd < 6 || qtd > 60) {
        throw new Error("Quantidade de números inválida. Deve ser entre 6 e 60.")
    }

    if(numeros.length === qtd) {
        return numeros.sort((a, b) => a - b)
    }

    const numerosAleatorios = Math.floor(Math.random() * 60) + 1
    if(!numeros.includes(numerosAleatorios)) {
        return mega(qtd, [...numeros, numerosAleatorios])
    } else {
        return mega(qtd, numeros)
    }
}