import React, { useState } from "react"
import ListaProdutos from "../../components/ListaProdutos"
import Trash from "../../assets/Trash.svg"
import Botao from '../../components/Botao'
import axios from 'axios'

export default () => {

    const ItensAExcluir = 1
    const [produtos, setProdutos] = useState([])
    const [nomeCliente, setNomeCliente] = useState("")
    const [dataEntrega, setDataEntrega] = useState()
    const [valorTotal, setValorTotal] = useState(0)

    function deletar(produto) {
        //Duplica array de produtos
        const produtosSelecionados = [...produtos]
        const indexProduto = produtosSelecionados.indexOf(produto)

        //Deleto a partir do indice, a quantidade indicada
        produtosSelecionados.splice(indexProduto, ItensAExcluir)

        //Seto o array de produtos com o novo sem o produto deletado
        setProdutos(produtosSelecionados)

        let novoTotal = 0
        produtosSelecionados.map(item => {
            novoTotal += (item.produto.price * item.qty)
        })

        setValorTotal(novoTotal)
    }

    //Função de Chamada da API (POST) para salvamento de pedido
    function _salvarPedido() {

        //Montagem do JSON para salvamento
        const pedido = {
            nome_cliente: nomeCliente,
            data_entrega: dataEntrega,
            valor_total: valorTotal,
            itens_pedido: produtos
        }

        //Chamada da Rota
        axios.post('http://localhost:3001/pedido', pedido)
            //Redirecionamento para tela de listagem
            .then(_ => {
                window.location.href = "http://localhost:3000/todos-os-pedidos";
            })
            //Exibição de erro, quando ocorrer
            .catch(error => {
                alert(error.response.data.message)
            })
    }

    return(
        <section className="mb-10">

            <h1 className="font-bold text-400 p-2 text-2xl text-center bg-white">Criar Pedido</h1>  
        
            <main className="flex flex-col" class="container-main">        
                <div className="flex mt-4">
                    <div className="flex bg-white p-2 m-2" class="input-field">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="cliente">
                            Nome do Cliente
                        </label>
                        <input 
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="cliente" 
                            type="text" 
                            onChange={(e) => {setNomeCliente(e.target.value)}}
                            placeholder="Nome do Cliente">
                        </input>
                    </div>                
                    <div className="flex bg-white p-2 m-2" class="input-field">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="entrega">
                            Data de Entrega
                        </label>
                        <input 
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="data" 
                            type="date"
                            onChange={(e) => {setDataEntrega(e.target.value)}}
                            placeholder="Data de Entrega">
                        </input>
                    </div>
                </div>
                
                <ListaProdutos 
                    setProdutos={setProdutos} 
                    produtosSelecionados={produtos}
                    setValorTotal={setValorTotal}
                    valorTotal={valorTotal}
                /> 
                
                <div class="table-container" className="flex justify-center mt-4">
                    <table>
                        <tr>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Valor Unitário</th>
                            <th>Valor Total</th>
                            <th>Excluir</th>
                        </tr>
                        {
                            produtos.map(item => {
                                return (
                                    <tr id="itens">
                                        <td>{item.produto.name}</td>
                                        <td>{item.qty} un.</td>
                                        <td>R$ {item.produto.price}</td>
                                        <td>R$ {item.produto.price * item.qty}</td>
                                        <td>
                                            <img
                                            onClick={() => deletar(item)}
                                            src={Trash} 
                                            alt="lixeira" 
                                            className="opacity-50 w-6 h-6 ml-6 hover:cursor-pointer 
                                            hover:scale-110 active:scale-95"/>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>

                <section class="button-section">
                    <span className="self-center text-xl mr-5">Valor Total: R$ {valorTotal}</span>
                    <Botao label="Finalizar" click={_salvarPedido}></Botao>
                </section>
            </main>
        </section>
    )
}