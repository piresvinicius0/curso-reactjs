import listaProdutos from "../data/listaProdutos"

export default function Repeticao1() {
function renderTable(): JSX.Element[] {
    return listaProdutos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })
}

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preco</th>
                </tr>
            </thead>
            <tbody>
                {renderTable()}
            </tbody>
        </table>
    )
}