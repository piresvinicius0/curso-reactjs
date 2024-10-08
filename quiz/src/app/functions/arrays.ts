export function embaralhar(elementos: any[]): any[] {
    return elementos.map(valor => ({ valor, aleatorio: Math.random() }))
    .sort((a, b) => a.aleatorio - b.aleatorio)
    .map(obj => obj.valor)
}