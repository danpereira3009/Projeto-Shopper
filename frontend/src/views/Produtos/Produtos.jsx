import React from "react"
import './Produtos.css'
import { useEffect, useState } from "react"

export default () => {
    
    const [produtos, setProdutos] = useState([])
    const [setProduto] = useState({})

    useEffect(() => {
        fetch("http://localhost:3001/produto").then(res => res.json()).then(produtos => setProdutos(produtos))
    }, [])

    return (

<section>
   
    <main className="flex justify-center bg-white mt-4">

        <tr defaultValue={-1} onChange={e => {setProduto(JSON.parse(e.target.value))}} class="tabela">
                <div class="nome_produto text-center">
                    <h1>Produtos Disponíveis</h1> 
                    {
                        produtos.map(produto => {
                            //esse JSON.stringify é necessário? 
                            return <th value={JSON.stringify(produto)}>{produto.name}</th>
                        })
                    }
                </div>
                
                <div class="preco">
                    <h1>Preço</h1> 
                    {
                        produtos.map(produto => {
                            return <th value={JSON.stringify(produto)}>R${produto.price},00</th>
                        })
                    }
                </div>
                
                <div class="estoque">
                    <h1>Estoque</h1> 
                    {
                        produtos.map(produto => {
                            return <th value={JSON.stringify(produto)}>{produto.qty_stock}</th>
                        })
                    }
                </div>  
        </tr>
    </main>
</section>

    )
}