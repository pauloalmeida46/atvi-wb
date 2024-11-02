import Entrada from "../io/entrada";
import Cliente from "../models/cliente";
import Empresa from "../models/empresa";
import Produto from "../models/produto";
import Cadastro from "../negoicios/create/cadastro";
import ListagemClientes from "../negoicios/read/listagemClientes";
import ListagemProdutos from "../negoicios/read/listagemProdutos";

export default class AssociaProduto {
    private empresa:Empresa
    private produtos:Array<Produto>
    private clientes:Array<Cliente>
    private entrada: Entrada

    constructor(empresa:Empresa)
    {
        this.empresa = empresa
        this.produtos = empresa.getProdutos
        this.clientes = empresa.getClientes
        this.entrada = new Entrada()
    }

    public associar(): void 
    {
        console.log(`\nAssociação do produto`)

        let listagem = new ListagemProdutos(this.produtos)
        listagem.listar()

        let num = this.entrada.receberNumero(`Número do produto a ser associado: `)

        let listagemCliente = new ListagemClientes(this.empresa.getClientes)
        listagemCliente.listar()

        let numCliente = this.entrada.receberNumero(`Número do cliente a ser associado: `)

        this.clientes[numCliente-1].pushProduto(this.produtos[num-1])

        console.log(`\n-----> Associação concluída <-----\n`);
    }

}