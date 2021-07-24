import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

export default function ListaClientes(){

    const getLocalStorage = () => JSON.parse(localStorage.getItem('Cliente')) ?? []
    const [repositories, setRepositories] = useState([]);
    const history = useHistory();

    useEffect(() => {
      let repositoriesLocal = JSON.parse(localStorage.getItem('Cliente'));
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
        localStorage.setItem(`CLiente`, JSON.stringify(repositoriesLocal2))
        alert ("Cliente deletado!")

        if(repositoriesLocal2.length === 0){
            localStorage.removeItem(`Cliente`)
            alert("Não há clientes cadastrados")
            history.push('/clientes')
        }
    }
    
    return (
    <div>
        <h1> Clientes cadastrados:</h1>
        {repositories.map((item, index) => <li>{item.id} <button type="button" name={index} onClick={delItem}>DEL</button></li>)}
        <NavLink to="/clientes"> Voltar </NavLink>
    </div>
    )
}