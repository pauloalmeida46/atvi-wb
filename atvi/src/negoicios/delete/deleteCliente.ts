import Entrada from "../../io/entrada";
import Cliente from "../../models/cliente";
import ListagemClientes from "../read/listagemClientes";
import Empresa from "../../models/empresa"

export default class DeleteCliente {
    private empresa: Empresa
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, empresa: Empresa) {
        this.empresa = empresa
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log(`\nDeletar cliente`);

        let listagem = new ListagemClientes(this.empresa.getClientes)
        listagem.listar()

        let num = this.entrada.receberNumero(`Número do cliente a ser excluído: `)
        this.clientes.splice(num - 1,1)
        console.log(`\n-----> Deletado <-----\n`);
    }
}