import Entrada from "../../io/entrada";
import Produto from "../../models/produto";
import ListagemProdutos from "../read/listagemProdutos";
import Empresa from "../../models/empresa"

export default class DeleteProduto {
    private empresa: Empresa
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>, empresa: Empresa) {
        this.empresa = empresa
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log(`\nDeletar produto`);

        let listagem = new ListagemProdutos(this.empresa.getProdutos)
        listagem.listar()

        let num = this.entrada.receberNumero(`Número do produto a ser excluído: `)
        this.produtos.splice(num - 1,1)
        console.log(`\n-----> Deletado <-----\n`);
    }
}