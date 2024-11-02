import Entrada from "../../io/entrada";
import Cliente from "../../models/cliente";
import CPF from "../../models/cpf";
import RG from "../../models/rg";
import Telefone from "../../models/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nCadastro do cliente`);
        let nome = this.entrada.receberTexto(`Nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Nome social do cliente: `)
        let sexo = this.entrada.receberTexto(`Sexo do cliente: `)
        //Cadastro CPF
        let valor = this.entrada.receberTexto(`Número do CPF: `);
        let data = this.entrada.receberTexto(`Data de emissão do CPF, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        //Cadastro RG
        valor = this.entrada.receberTexto(`Número do RG: `);
        data = this.entrada.receberTexto(`Data de emissão do RG, no padrão dd/mm/yyyy: `);
        partesData = data.split('/')
        ano = new Number(partesData[2].valueOf()).valueOf()
        mes = new Number(partesData[1].valueOf()).valueOf()
        dia = new Number(partesData[0].valueOf()).valueOf()
        dataEmissao = new Date(ano, mes, dia)
        let rg = new RG(valor,dataEmissao);

        //Cadastro Telefone
        let ddd = this.entrada.receberTexto(`DDD do seu telefone: `);
        let num = this.entrada.receberTexto(`Número do seu teelfone: `);
        let tel = new Telefone(ddd,num)
        

        let cliente = new Cliente(nome, nomeSocial,sexo, cpf);
        cliente.setDataCadastro();
        cliente.pushRG(rg);
        cliente.pushTelefone(tel)
        this.clientes.push(cliente)
        console.log(`\n-----> Cadastro concluído <-----\n`);
    }
}