import React from "react"
import { Link } from 'react-router-dom'

export default () => 

<section className="flex justify-center text-lg font-bold p-3 bg-fuchsia-300 shadow-lg shadow-black mb-5">
    <div className="ml-4 mr-4 hover:cursor-pointer hover:text-red-600"><Link to="/">Home</Link></div>
    <div className="ml-4 mr-4 hover:cursor-pointer hover:text-red-600"><Link to="/criar-pedido">Criar Pedido</Link></div>
    <div className="ml-4 mr-4 hover:cursor-pointer hover:text-red-600"><Link to="/todos-os-pedidos">Ver Meus Pedidos</Link></div>
    <div className="ml-4 mr-4 hover:cursor-pointer hover:text-red-600"><Link to="/produtos">Produtos Disponíveis</Link></div>
</section>
