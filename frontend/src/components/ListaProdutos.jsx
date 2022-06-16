import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"
import Botao from "./Botao"

export default (props) => {

    //Duplico o array de produtos do componente "CriarPedido"
    const produtosSelecionados = [...props.produtosSelecionados]

    //Produtos do select
    const [produtos, setProdutos] = useState([])
    const [quantidade, setQuantidade] = useState(0)
    const [produto, setProduto] = useState({})

    useEffect(() => {
        axios.get("http://localhost:3001/produto").then(response => setProdutos(response.data))
    }, [])

    function addProduto() {
        if(produto.qty_stock >= quantidade) {
            const produtoSelecionado = produto
            produtoSelecionado.qty_stock -= quantidade
            let itemPedido = {
                qty: quantidade,
                produto: produtoSelecionado
            }
            produtosSelecionados.push(itemPedido)
            props.setProdutos(produtosSelecionados)
            setQuantidade(0)
            let valorTotal = props.valorTotal + (itemPedido.qty * itemPedido.produto.price)
            props.setValorTotal(valorTotal)
        } else {
            alert(`Produto sem quantidade em estoque`)
        }
    }

    return (
        <section className="flex flex-col">
            <main className="flex bg-white">
                <div className="flex bg-white" class="select-produto">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="produto">
                        Produto
                    </label>
                    <select 
                        defaultValue={-1}
                        onChange={e => {setProduto(JSON.parse(e.target.value))}}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="produto" 
                        type="text" 
                        placeholder="Nome do Cliente">
                            <option disabled value={-1} className="">Itens</option>
                            {
                                produtos.map(produto => {
                                    return <option value={JSON.stringify(produto)}>{produto.name}</option>
                                })
                            }
                    </select>
                </div>

                <div className="flex bg-white" class="input-qtd">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="quantidade">
                        Quantidade
                    </label>
                    <input 
                        value={quantidade}
                        onChange={(e) => {setQuantidade(e.target.value)}}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="quantidade" 
                        type="number" 
                        placeholder="Quantidade de itens"></input>
                </div>

                <br/>


            </main>

            <section class="button-section">
                <Botao click={addProduto} label="Adicionar"/>
            </section>

        </section>

    )
}

   