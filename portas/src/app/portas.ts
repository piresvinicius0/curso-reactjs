import PortaModel from "./model/porta";

export function criarPortas(qtd: number, comPresente: number): PortaModel[] {
    return Array.from({ length: qtd }, (_, i) => {
        const numero = i + 1
        const temPresente = numero === comPresente
        return new PortaModel(numero, temPresente)
        })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(porta => porta.numero === portaModificada.numero? portaModificada : portaModificada.aberta ? porta : porta.desselecionar())
}