import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const Conteiner = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const ButtonLink= styled.button`
    height: 2.5rem;
    width: 10rem;
    font-size: 1.5rem;
    border: 1px solid #E31C58;
    background: #E31C58;
    color: #fff;
    border-radius: 1rem;
    margin: 1rem;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: 
        transform 250ms ease-in-out,
        opacity 250ms linear;

    &:hover{
        transform: scale(1.1);
        opacity: .9;
    }
`

export const ButtonSpace = styled.div`
  @media(max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    Button {
      margin-bottom: 1.5rem;
    }
  }
`

export const NavLinkModified = styled(NavLink)`
    text-decoration: none;
`

export const Title =styled.h1`
    font-size: 3rem;
    color: #0463c4;

    @media(max-width: 720px) {
        text-align: center; 
        }
`