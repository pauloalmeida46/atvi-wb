import Entrada from "../io/entrada";
import Cliente from "../models/cliente";
import Empresa from "../models/empresa";
import Servico from "../models/servico";
import ListagemClientes from "../negoicios/read/listagemClientes";
import ListagemServicos from "../negoicios/read/listagemServicos";

export default class AssociaServico {
    private empresa:Empresa
    private servicos:Array<Servico>
    private clientes:Array<Cliente>
    private entrada: Entrada

    constructor(empresa:Empresa)
    {
        this.empresa = empresa
        this.servicos = empresa.getServicos
        this.clientes = empresa.getClientes
        this.entrada = new Entrada()
    }

    public associar(): void 
    {
        console.log(`\nAssociação do serviço`)

        let listagem = new ListagemServicos(this.servicos)
        listagem.listar()

        let num = this.entrada.receberNumero(`Número do serviço a ser associado: `)

        let listagemCliente = new ListagemClientes(this.empresa.getClientes)
        listagemCliente.listar()

        let numCliente = this.entrada.receberNumero(`Número do cliente a ser associado: `)

        this.clientes[numCliente-1].pushServico(this.servicos[num-1])

        console.log(`\n-----> Associação concluída <-----\n`);
    }

}