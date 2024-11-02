import Entrada from "../io/entrada";
import Cliente from "../models/cliente";
import Empresa from "../models/empresa";
import Produto from "../models/produto";

export default class Listagem1{
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

    public listar(): void{
        console.log('')
        console.log('Exibindo clientes que mais consumiram produtos...')
        console.log('')
        this.clientes.sort(function(a:Cliente,b:Cliente):number{
           return b.getProdutosConsumidos.length - a.getProdutosConsumidos.length
        })
        let lim = this.clientes.length < 10 ? this.clientes.length : 10

        for (let i = 0; i< lim; i++)
        {
            console.log((i+1) + ' - ' + this.clientes[i].nome)
            console.log(' ')
        }

        console.log('Exibindo clientes que mais consumiram serviços...')
        this.clientes.sort(function(a:Cliente,b:Cliente):number{
           return b.getServicosConsumidos.length - a.getServicosConsumidos.length
        })

        for (let i = 0; i< lim; i++)
        {
            console.log((i+1) + ' - ' + this.clientes[i].nome)
            console.log(' ')
        }
        
        
    }
}