import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Clientes from './pages/Clientes';
import ListaClientes from './pages/ListaClientes';
import ListaProdutos from './pages/ListaProdutos';


export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/clientes">
                <Clientes />
            </Route>
            <Route path="/produtos">
                <Produtos />
            </Route>
            <Route path="/produtoslista">
                <ListaProdutos />
            </Route>
            <Route path="/clienteslista">
                <ListaClientes />
            </Route>
            </Switch>
        </BrowserRouter>
    )
}