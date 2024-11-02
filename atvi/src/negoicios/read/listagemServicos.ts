import Servico from "../../models/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os serviços:`);
        let n :number = 1
        this.servicos.forEach(servico => {
            console.log(`SERVIÇO NÚMERO ` + n)
            console.log(`Nome: ` + servico.nome);
            console.log(`Preço: ` + servico.preco);
            console.log(` `);
            n++
        });
        console.log(`\n`);
    }
}