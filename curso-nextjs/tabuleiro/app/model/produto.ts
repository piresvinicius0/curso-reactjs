export default class Produto {
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    getId(): number {
        return this.id;
    }

    getNome(): string {
        return this.nome;
    }

    getPreco(): number {
        return this.preco;
    }

}