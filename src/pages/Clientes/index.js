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
        Endereco, 
        Selecione, 
        Input, 
        NumberFormatModified,
        Label,
        InputForm } from './styled';


export default function Clientes(){

    const getLocalStorage = () => JSON.parse(localStorage.getItem('Clientes')) ?? []

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
        localStorage.setItem(`Clientes`, JSON.stringify(produto))
    };


    return(
        <Container>
            <Title>Clientes</Title>
            <Form onSubmit={handleSubmit(enviarProduto)}>
                <InputForm>
                    <Label htmlFor="nome">Nome: </Label>
                    <Input 
                    required
                    onChange={handleChange}
                    id="nome"
                    type="text"
                    name="nome"
                    placeholder="Nome completo"
                    />
                </InputForm>
                <InputForm>
                    <Label htmlFor="cpf">CPF: </Label>
                    <NumberFormatModified
                    required
                    id="cpf"
                    onChange={handleChange}
                    format="###.###.###-##"
                    mask="_"
                    name="cpf"
                    placeholder="CPF"
                    />
                </InputForm>
                <InputForm>
                    <Label htmlFor="email">Email: </Label>
                    <Input
                    required
                    id="email"
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="exemplo: nome@email.com"
                    />
                </InputForm>
                <InputForm>
                    <Label htmlFor="telefone">Telefone: </Label>
                    <NumberFormatModified
                    required
                    id="telefone"
                    onChange={handleChange}
                    name="telefone"
                    placeholder="Telefone"
                    format="(##) #####-####"
                    mask="_"
                    />
                </InputForm>

                <InputForm>
                    <Label htmlFor="endereco">Endereço: </Label>
                    <Endereco>
                        <Input
                        required
                        id="endereco"
                        onChange={handleChange}
                        type="text"
                        name="endereco"
                        placeholder="Endereço"
                        />
                        <Selecione required id="UF" name="UF" defaultValue="" onChange={handleChange}>
                            <option value="" disabled >Estado</option>
                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="AP">AP</option>
                            <option value="AM">AM</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="DF">DF</option>
                            <option value="ES">ES</option>
                            <option value="GO">GO</option>
                            <option value="MA">MA</option>
                            <option value="MS">MS</option>
                            <option value="MT">MT</option>
                            <option value="MG">MG</option>
                            <option value="PA">PA</option>
                            <option value="PB">PB</option>
                            <option value="PR">PR</option>
                            <option value="PE">PE</option>
                            <option value="PI">PI</option>
                            <option value="RJ">RJ</option>
                            <option value="RN">RN</option>
                            <option value="RS">RS</option>
                            <option value="RO">RO</option>
                            <option value="RR">RR</option>
                            <option value="SC">SC</option>
                            <option value="SP">SP</option>
                            <option value="SE">SE</option>
                            <option value="TO">TO</option>
                        </Selecione>
                    </Endereco>
                </InputForm>
                <ButtonSubmit type="submit">{loading ? 'Cadastrando...' : 'Enviar'}</ButtonSubmit>
            </Form>
            {loading && <MessagemCadastro>Cliente cadastrado!</MessagemCadastro>}
            <ButtonSpace>
                <NavLinkModified  to="/"> <Button> Voltar </Button></NavLinkModified >
                <NavLinkModified  to="/clienteslista"> <Button> Clientes cadastrados </Button></NavLinkModified>  
            </ButtonSpace>          
        </Container>
    )
}