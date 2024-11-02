import Entrada from "../../io/entrada";
import Servico from "../../models/servico";
import ListagemServicos from "../read/listagemServicos";
import Empresa from "../../models/empresa"

export default class DeleteServico {
    private empresa: Empresa
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>, empresa: Empresa) {
        this.empresa = empresa
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log(`\nDeletar serviço`);

        let listagem = new ListagemServicos(this.empresa.getServicos)
        listagem.listar()

        let num = this.entrada.receberNumero(`Número do servico a ser excluído: `)
        this.servicos.splice(num - 1,1)
        console.log(`\n-----> Deletado <-----\n`);
    }
}