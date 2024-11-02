import Entrada from "../../io/entrada";
import Produto from "../../models/produto";
import ListagemServicos from "../read/listagemServicos";
import Empresa from "../../models/empresa"
import Servico from "../../models/servico";

export default class UpdateServico {
    private empresa: Empresa
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(empresa: Empresa) {
        this.empresa = empresa
        this.servicos = empresa.getServicos
        this.entrada = new Entrada()
    }

    public update(): void {
        console.log(`\nAtualização do serviço`);

        let listagem = new ListagemServicos(this.empresa.getServicos)
        listagem.listar()

        let num = this.entrada.receberNumero(`Número do serviço a ser atualizado: `)
        let nome = this.entrada.receberTexto(`Novo nome do serviço: `)
        let preco = this.entrada.receberNumero(`Novo preço do serviço: `)
        this.servicos[num-1] = new Servico(nome,preco)
        console.log(`\n-----> Atualizado <-----\n`);
    }
}