import React from 'react'
import { ButtonLink, Conteiner, ButtonSpace,NavLinkModified, Title } from './styled'


export default function Home(){

    return(
        <Conteiner>
            <Title> Sistema de cadastramento </Title>
            <ButtonSpace>
                <NavLinkModified to='/clientes'> <ButtonLink> Clientes</ButtonLink></NavLinkModified>
                <NavLinkModified to='/produtos'> <ButtonLink> Produtos</ButtonLink></NavLinkModified>
            </ButtonSpace>
        </Conteiner>
    )
}