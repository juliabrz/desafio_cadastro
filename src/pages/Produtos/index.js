import React from 'react';
import { useState } from 'react';
import {NavLinkModified, 
    Title, 
    ButtonSpace, 
    Button, 
    MessagemCadastro,
    Container,
    ButtonSubmit,
    Form, 
    Input, 
    NumberFormatModified,
    Label,
    InputForm } from '../Clientes/styled';
import {Selecione, Descricao} from './styled'

export default function Produtos(){

    const getLocalStorage = () => JSON.parse(localStorage.getItem('Carrinho')) ?? []

    const [produtoInfo, setProdutoInfo] = useState({});

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
        <Container>
            <Title>Produto</Title>
            <Form onSubmit={handleSubmit(enviarProduto)}>
                <InputForm>
                    <Label htmlFor="id">Código do produto: </Label>
                    <NumberFormatModified onChange={handleChange}
                    required
                    id="id"
                    name="id"
                    placeholder="Código do produto"
                    />
                </InputForm>
                <InputForm>
                    <Label htmlFor="categoria">Categoria do produto: </Label>
                    <Selecione required id="categoria" name="categoria" onChange={handleChange} defaultValue="">
                        <option value='' disabled >Selecione a Categoria </option>
                        <option value="eletrodomestico">Eletrodomésticos</option>
                        <option value="móveis">Movéis</option>
                        <option value="celulares">Celulares</option>
                        <option value="outros">Outros</option>
                    </Selecione>
                </InputForm>
                <InputForm>
                    <Label htmlFor="id">Tipo do produto: </Label>
                    <Input
                    required
                    id="tipo"
                    onChange={handleChange}
                    type="text"
                    name="tipo"
                    placeholder="Tipo do produto"
                    />
                </InputForm>
                <InputForm>
                    <Label htmlFor="marca">Marca do produto: </Label>
                    <Input
                    required
                    id="marca"
                    onChange={handleChange}
                    type="text"
                    name="marca"
                    placeholder="Marca do produto"
                    />
                </InputForm>
                <InputForm>
                    <Label htmlFor="descricao">Descrição do produto: </Label>
                    <Descricao
                    required
                    id="descricao"
                    onChange={handleChange}
                    type="text"
                    name="descricao"
                    placeholder="Descrição"
                    />
                </InputForm>
                <InputForm>
                    <Label htmlFor="quantidade">Quantidade: </Label>
                    <Input
                    required
                    id="quantidade"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    name="quantidade"
                    placeholder="Quantidade em estoque"
                    />
                </InputForm>
                <ButtonSubmit type="submit">{loading ? 'Cadastrando...' : 'Enviar'}</ButtonSubmit>
            </Form>
            {loading && <MessagemCadastro>Produto cadastrado!</MessagemCadastro>}
            <ButtonSpace>
                <NavLinkModified to="/"> <Button>Voltar</Button></NavLinkModified>
                <NavLinkModified to="/produtoslista"> <Button>Ver inventario</Button> </NavLinkModified>
            </ButtonSpace>         
        </Container>
    )
}