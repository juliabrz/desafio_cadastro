import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { StyledTable, ButtonDel } from './styled'
import {Container,
        Title,
        NavLinkModified,
        Button } from '../Clientes/styled'

export default function ListaClientes(){

    const getLocalStorage = () => JSON.parse(localStorage.getItem('Clientes')) ?? []
    const [repositories, setRepositories] = useState([]);
    const history = useHistory();
    const titles = ["nome", "cpf", "email", "telefone", "endereco"];

    useEffect(() => {
      let repositoriesLocal = JSON.parse(localStorage.getItem('Clientes'));
      if (repositoriesLocal !== null){
          setRepositories(repositoriesLocal)
        } else {
            alert("Não há clientes cadastrados")
            history.push('/clientes')
        }
    }, [])
  

    const delItem = (event)=>{
        let repositoriesLocal2 = getLocalStorage();
        console.log(repositoriesLocal2)

        const index = event.target.getAttribute('name')
        repositoriesLocal2.splice(index,1)

        console.log(repositoriesLocal2)

        setRepositories(repositoriesLocal2)
        localStorage.setItem(`Clientes`, JSON.stringify(repositoriesLocal2))
        alert ("Cliente deletado!")

        if(repositoriesLocal2.length === 0){
            localStorage.removeItem(`Clientes`)
            alert("Não há clientes cadastrados")
            history.push('/clientes')
        }
    }

    return (
    <Container>
        
        <Title> Clientes cadastrados:</Title>
        {/*repositories.map((item, index) => <li>{item.nome} <button type="button" name={index} onClick={delItem}>DEL</button></li>)*/}

        <StyledTable>
            <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            </colgroup>
            <thead>
            <tr>
                {titles.map((title, index) => (
                <th key={index}>{title}</th>
                ))}
                <th key="deletar"> Deletar </th>
            </tr>
            </thead>
            <tbody>
            {repositories.map((item, index) => (
                <tr key={index}>
                {titles.map((title, index) => (
                    <td key={index}>{item[title]}</td>
                ))}
                <td> <ButtonDel  type="button" name={index} onClick={delItem}>DEL</ButtonDel> </td>
                </tr>
            ))}
            </tbody>
        </StyledTable>

    
        <NavLinkModified to="/clientes"> <Button>Voltar</Button> </NavLinkModified>
    </Container>
    )
}