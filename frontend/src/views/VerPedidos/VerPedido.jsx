import axios from 'axios'
import React, { useEffect, useState } from "react"
import './VerPedidos.css'
import * as moment from 'moment'

export default () => {
    const [pedidos, setPedidos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/pedido').then(result => setPedidos(result.data))
    }, [])

    return (
        <section className="mb-10">

            <h1 className="font-bold text-400 mt-4 text-2xl text-center bg-white">Meus Pedidos</h1>

            <main>
                <div class="pedido" className="flex justify-center m-4">
                    <table>
                        <tr>
                            <th>Pedido Nº</th>
                            <th>Data de Entrega</th>
                            <th>Nome do Cliente</th>
                            <th>Valor Total</th>
                        </tr>
                        {
                            pedidos.map(pedido => {
                                return (
                                   <tr>
                                        <td>{pedido.id}</td>
                                        <td>{moment(pedido.data_entrega).format('DD/MM/YYYY')}</td>
                                        <td>{pedido.nome_cliente}</td>
                                        <td>R$ {pedido.valor_total}</td>
                                   </tr>
                                )
                            })
                        }       
                    </table>
                </div>
            </main>
        </section>
    )
}