import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NumberFormat from 'react-number-format';

export const Container = styled.div`
    display: flex;
    padding-top: 3rem;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    align-items: center;
`

export const Button = styled.button`
    height: auto;
    min-height: 2.5rem;
    width: auto;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 1.5rem;
    width: 80%;

    @media(max-width: 720px) {
        flex-direction: column-reverse;
        align-items: center;
        Button {
        margin-bottom: 1rem;
        }
  }
`

export const NavLinkModified = styled(NavLink)`
    text-decoration: none;
`

export const Title =styled.h1`
    font-size: 2.5rem;
    color: #0463c4;
    text-align: center;
`

export const MessagemCadastro = styled.span`
    font-size: 1.5rem;
    color: greenyellow;
`

export const ButtonSubmit = styled.button`
    height: auto;
    min-height: 2rem;
    width: auto;
    min-width: 5rem;
    font-size: 1rem;
    border: 1px solid #0463c4;
    background: #0463c4;
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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    width: 40%;
    align-items: center;

    @media(max-width: 720px) {
        width: 50%;
    }

    @media(max-width: 480px) {
        width: 70%
        }
`

export const Endereco = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

`

export const Selecione = styled.select`
    width: 35%;
    border-radius: 0.5rem;
    height: 2.5rem;
    font-size: 0.9rem;

    &:focus {
    outline: none;
    }
`
export const Input = styled.input `
    width: 100%;
    height: 1.5rem;
    font-size: 0.9rem;
    border-radius: 0.5rem;
    margin: 0.5rem 0;
    padding: 0.5rem 0 ;

    &:focus {
        outline: none;
    }
`
export const NumberFormatModified = styled(NumberFormat)`
width: 100%;
    height: 1.5rem;
    font-size: 0.9rem;
    border-radius: 0.5rem;
    margin: 0.5rem 0;
    padding: 0.5rem 0;

    &:focus {
        outline: none;
    }
`

export const Label = styled.label`
  font-size: 1.4rem;
  margin-bottom: .5rem;
  color: #E31C58;

`

export const InputForm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0.5rem 0;
`