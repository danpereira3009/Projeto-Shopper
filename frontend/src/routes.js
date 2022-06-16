import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./views/Home/Home";
import CriarPedido from "./views/CriarPedido/CriarPedido"
import VerPedidos from './views/VerPedidos/VerPedido'
import Produtos from './views/Produtos/Produtos'
import Cabecalho from "./components/Cabecalho";

export default function AppRouter() {
    return (
        <Router>
            <Cabecalho />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/criar-pedido' element={<CriarPedido />}/>
                    <Route path='/todos-os-pedidos' element={<VerPedidos />}/>
                    <Route path='/produtos' element={<Produtos />}/>
                </Routes>
        </Router>
    );
}