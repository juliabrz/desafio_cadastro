import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function Produtos(){

    const getLocalStorage = () => JSON.parse(localStorage.getItem('Carrinho')) ?? []

    const [produtoInfo, setProdutoInfo] = useState({
        id: "",
        tipo: "",
        descricao: "",
        preco: "",
        estoque: "",
    });

    const [loading, setLoading] = useState(false);
    
    const handleChange = (event) => {
        const auxValues = { ...produtoInfo };
        auxValues[event.target.name] = event.target.value;
        setProdutoInfo(auxValues);
    };
    
    const handleSubmit = (callback) => (event) => {
        event.preventDefault();
        setLoading(true);
        callback();
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        //setLoading(false);
    };
    
    const enviarProduto = () => {
        let produto = getLocalStorage()
        produto.push(produtoInfo)
        localStorage.setItem(`Carrinho`, JSON.stringify(produto))
    };


    return(
        <div>
            <h1>Produto</h1>
            <form onSubmit={handleSubmit(enviarProduto)}>
                <input onChange={handleChange}
                type="text"
                name="id"
                placeholder="Digite o seu nome"
                />
                <input
                onChange={handleChange}
                type="text"
                name="tipo"
                placeholder="Tipo"
                />
                <input
                onChange={handleChange}
                type="text"
                name="descricao"
                placeholder="descrição"
                />
                <input
                onChange={handleChange}
                type="text"
                name="estoque"
                placeholder="Estoque"
                />
                <button type="submit">{loading ? 'Cadastrando...' : 'Enviar'}</button>
            </form>
            {loading && <span>Produto cadastrado!</span>}
            < NavLink to="/produtoslista">Ver inventario </NavLink>           
        </div>
    )
}