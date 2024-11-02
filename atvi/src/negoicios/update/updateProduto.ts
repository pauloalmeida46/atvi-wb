import Entrada from "../../io/entrada";
import Produto from "../../models/produto";
import ListagemProdutos from "../../negoicios/read/listagemProdutos";
import Empresa from "../../models/empresa"

export default class UpdateProduto {
    private empresa: Empresa
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(empresa: Empresa) {
        this.empresa = empresa
        this.produtos = empresa.getProdutos
        this.entrada = new Entrada()
    }

    public update(): void {
        console.log(`\nAtualização do produto`);

        let listagem = new ListagemProdutos(this.empresa.getProdutos)
        listagem.listar()

        let num = this.entrada.receberNumero(`Número do produto a ser atualizado: `)
        let nome = this.entrada.receberTexto(`Novo nome do produto: `)
        let preco = this.entrada.receberNumero(`Novo preço do produto: `)
        this.produtos[num-1] = new Produto(nome,preco)
        console.log(`\n-----> Atualizado <-----\n`);
    }
}