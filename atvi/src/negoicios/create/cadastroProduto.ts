import Entrada from "../../io/entrada";
import Produto from "../../models/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nCadastro do produto`);
        let nome = this.entrada.receberTexto(`Nome do produto: `)
        let preco = this.entrada.receberNumero(`Preço do produto: `)
        let produto = new Produto(nome, preco);
        this.produtos.push(produto)
        console.log(`\n-----> Cadastro concluído <-----\n`);
    }
}