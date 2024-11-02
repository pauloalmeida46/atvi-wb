import Entrada from "../../io/entrada";
import Servico from "../../models/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nCadastro do serviço`);
        let nome = this.entrada.receberTexto(`Nome do serviço: `)
        let preco = this.entrada.receberNumero(`Preço do serviço: `)
        let servico = new Servico(nome,preco);
        this.servicos.push(servico)
        console.log(`\n-----> Cadastro concluído <-----\n`);
    }
}