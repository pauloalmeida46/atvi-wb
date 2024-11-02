import Entrada from "../io/entrada";
import Empresa from "../models/empresa";
import Mocking from "../negoicios/mocking";
import AssociaProduto from "../negoicios/associaProduto";
import AssociaServico from "../negoicios/associaServico";
//cliente
import CadastroCliente from "../negoicios/create/cadastroCliente";
import ListagemClientes from "../negoicios/read/listagemClientes";
import DeleteCliente from "../negoicios/delete/deleteCliente";
import UpdateCliente from "../negoicios/update/updateCliente";
//produto
import CadastroProduto from "../negoicios/create/cadastroProduto";
import ListagemProdutos from "../negoicios/read/listagemProdutos";
import DeleteProduto from "../negoicios/delete/deleteProduto";
import UpdateProduto from "../negoicios/update/updateProduto";
//serviço
import CadastroServico from "../negoicios/create/cadastroServico";
import ListagemServicos from "../negoicios/read/listagemServicos";
import DeleteServico from "../negoicios/delete/deleteServico";
import UpdateServico from "../negoicios/update/updateServico";
//listagem
import Listagem1 from "../listings/listagem1";
import Listagem2 from "../listings/listagem2";
import Listagem3 from "../listings/listagem3";
import Listagem4 from "../listings/listagem4";
import Listagem5 from "../listings/listagem5";
import Listagem6 from "../listings/listagem6";

let empresa = new Empresa();
let entrada = new Entrada();
let execucao = true;

while (execucao) {
    console.log(` `)
    console.log(`______Grupo World Beauty_____`);
    console.log(`Opções:`);
    console.log(`1 - Clientes`);
    console.log(`2 - Produtos`);
    console.log(`3 - Serviços`);
    console.log(`4 - Listagens`);
    console.log(`0 - Sair`);
    console.log(` `)

    const opcao = entrada.receberNumero("Escolha uma opção: ");

    switch (opcao) {
        case 1:
            let execucaoCliente = true;
            while (execucaoCliente) {
                console.log(` `)
                console.log(`______CLIENTE______`);
                console.log(`Opções:`);
                console.log(`1 - Cadastrar Cliente`);
                console.log(`2 - Ver Clientes`);
                console.log(`3 - Editar Cliente`);
                console.log(`4 - Excluir Cliente`);
                console.log(`5 - Associar Produto`);
                console.log(`6 - Associar Serviço`);
                console.log(`0 - Voltar`);
                console.log(` `)

                const opcaoCliente = entrada.receberNumero("Escolha uma opção: ");
                switch (opcaoCliente) {
                    case 1:
                        let cadastro = new CadastroCliente(empresa.getClientes);
                        cadastro.cadastrar();
                        break;
                    case 2:
                        let listagem = new ListagemClientes(empresa.getClientes);
                        listagem.listar();
                        break;
                    case 3:
                        let d = new DeleteCliente(empresa.getClientes, empresa);
                        d.deletar();
                        break;
                    case 4:
                        let u = new UpdateCliente(empresa);
                        u.update();
                        break;
                    case 5:
                        let a = new AssociaProduto(empresa);
                        a.associar();
                        break;
                    case 6:
                        let s = new AssociaServico(empresa);
                        s.associar();
                        break;
                    case 0:
                        execucaoCliente = false;
                        break;
                    default:
                        console.log(`Opção Inválida`);
                }
            }
            break;

        case 2:
            let execucaoProduto = true;
            while (execucaoProduto) {
                console.log(` `)
                console.log(`______PRODUTO______`);
                console.log(`Opções:`);
                console.log(`1 - Cadastrar Produto`);
                console.log(`2 - Ver Produtos`);
                console.log(`3 - Editar Produtos`);
                console.log(`4 - Excluir Produtos`);
                console.log(`5 - Associar Produto`);
                console.log(`0 - Voltar`);
                console.log(` `)

                const opcaoProduto = entrada.receberNumero("Escolha uma opção: ");
                switch (opcaoProduto) {
                    case 1:
                        let cadastro = new CadastroProduto(empresa.getProdutos);
                        cadastro.cadastrar();
                        break;
                    case 2:
                        let listagem = new ListagemProdutos(empresa.getProdutos);
                        listagem.listar();
                        break;
                    case 3:
                        let d = new DeleteProduto(empresa.getProdutos, empresa);
                        d.deletar();
                        break;
                    case 4:
                        let u = new UpdateProduto(empresa);
                        u.update();
                        break;
                    case 5:
                        let a = new AssociaProduto(empresa);
                        a.associar();
                        break;
                    case 0:
                        execucaoProduto = false;
                        break;
                    default:
                        console.log(`Opção Inválida`);
                }
            }
            break;

        case 3:
            let execucaoServico = true;
            while (execucaoServico) {
                console.log(` `)
                console.log(`_______SERVIÇOS______`);
                console.log(`Opções`);
                console.log(`1 - Cadastrar Serviço`);
                console.log(`2 - Ver Serviços`);
                console.log(`3 - Editar Serviços`);
                console.log(`4 - Excluir Serviços`);
                console.log(`5 - Associar Serviço`);
                console.log(`0 - Voltar`);
                console.log(` `)

                const opcaoServicos = entrada.receberNumero("Escolha uma opção: ");
                switch (opcaoServicos) {
                    case 1:
                        let cadastro = new CadastroServico(empresa.getServicos);
                        cadastro.cadastrar();
                        break;
                    case 2:
                        let listagem = new ListagemServicos(empresa.getServicos);
                        listagem.listar();
                        break;
                    case 3:
                        let d = new DeleteServico(empresa.getServicos, empresa);
                        d.deletar();
                        break;
                    case 4:
                        let u = new UpdateServico(empresa);
                        u.update();
                        break;
                    case 5:
                        let a = new AssociaServico(empresa);
                        a.associar();
                        break;
                    case 0:
                        execucaoServico = false;
                        break;
                    default:
                        console.log(`Opção Inválida`);
                }
            }
            break;

        case 4:
            let execucaoListagem = true;
            while (execucaoListagem) {
                console.log(` `)
                console.log(`____________LISTAGEM____________`);
                console.log(`Opções:`);
                console.log(`1 - Clientes que mais consumiram Produtos/Serviços`);
                console.log(`2 - Clientes por gênero`);
                console.log(`3 - Produtos/Serviços mais consumidos`);
                console.log(`4 - Produtos/Serviços mais consumidos por gênero`);
                console.log(`5 - 10 clientes que menos consumiram`);
                console.log(`6 - 5 clientes que mais consumiram (em valor)`);
                console.log(`0 - Voltar`);
                console.log(` `)

                const opcaoListagem = entrada.receberNumero("Escolha uma opção: ");
                switch (opcaoListagem) {
                    case 1:
                        let l1 = new Listagem1(empresa);
                        l1.listar();
                        break;
                    case 2:
                        let l2 = new Listagem2(empresa);
                        l2.listar();
                        break;
                    case 3:
                        let l3 = new Listagem3(empresa);
                        l3.listar();
                        break;
                    case 4:
                        let l4 = new Listagem4(empresa);
                        l4.listar();
                        break;
                    case 5:
                        let l5 = new Listagem5(empresa);
                        l5.listar();
                        break;
                    case 6:
                        let l6 = new Listagem6(empresa);
                        l6.listar();
                        break;
                    case 0:
                        execucaoListagem = false;
                        break;
                    default:
                        console.log(`Opção Inválida`);
                }
            }
            break;

        case 0:
            execucao = false;
            console.log(`Tchau!`);
            break;

        default:
            console.log(`Opção Inválida`);
    }
}
