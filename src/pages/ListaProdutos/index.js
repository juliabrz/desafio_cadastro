import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';


export default function ListaProdutos(){
    const getLocalStorage = () => JSON.parse(localStorage.getItem('Carrinho')) ?? []
    const [repositories, setRepositories] = useState([]);
    const history = useHistory();

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
        console.log(repositoriesLocal2)

        const index = event.target.getAttribute('name')
        repositoriesLocal2.splice(index,1)

        console.log(repositoriesLocal2)

        setRepositories(repositoriesLocal2)
        localStorage.setItem(`Carrinho`, JSON.stringify(repositoriesLocal2))
        alert ("item deletado!")

        if(repositoriesLocal2.length === 0){
            localStorage.removeItem(`Carrinho`)
            alert("Não há produtos no inventário")
            history.push('/produtos')
        }
    }
    
    return (
    <div>
        <h1> Produtos cadastrados:</h1>
        {repositories.map((item, index) => <li>{item.id} <button type="button" name={index} onClick={delItem}>DEL</button></li>)}
        <NavLink to="/produtos"> Voltar </NavLink>
    </div>
    )
;
}