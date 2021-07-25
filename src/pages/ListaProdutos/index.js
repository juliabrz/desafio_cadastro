import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import {Container,
    Title,
    NavLinkModified,
    Button } from '../Clientes/styled'
import { StyledTable, ButtonDel } from '../ListaClientes/styled'

export default function ListaProdutos(){
    const getLocalStorage = () => JSON.parse(localStorage.getItem('Carrinho')) ?? []
    const [repositories, setRepositories] = useState([]);
    const history = useHistory();
    const titles =["id", "tipo", "marca", "categoria", "descricao", "quantidade"]

    useEffect(() => {
      let repositoriesLocal = JSON.parse(localStorage.getItem('Carrinho'));
      if (repositoriesLocal !== null){
          setRepositories(repositoriesLocal)
        } else {
            alert("Não há produtos no inventário")
            history.push('/produtos')
        }
    }, [])
  

    const delItem = (event)=>{
        let repositoriesLocal2 = getLocalStorage();
        const index = event.target.getAttribute('name')

        repositoriesLocal2.splice(index,1)
        setRepositories(repositoriesLocal2)

        console.log(repositories)
        localStorage.setItem(`Carrinho`, JSON.stringify(repositoriesLocal2))
        alert ("item deletado!")

        if(repositoriesLocal2.length === 0){
            localStorage.removeItem(`Carrinho`)
            alert("Não há produtos no inventário")
            history.push('/produtos')
        }
    }
    
    return (
    <Container>
        <Title> Produtos cadastrados:</Title>
        {/*repositories.map((item, index) => <li>{item.id} <button type="button" name={index} onClick={delItem}>DEL</button></li>)*/}
        <StyledTable>
            <colgroup>
            <col />
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
                <td> <ButtonDel type="button" name={index} onClick={delItem}>DEL</ButtonDel> </td>
                </tr>
            ))}
            </tbody>
        </StyledTable>

        
        <NavLinkModified to="/produtos"> <Button>Voltar</Button> </NavLinkModified>
        
    </Container>
    )
;
}