import styled from 'styled-components';

export const Selecione = styled.select`
    width: 100%;
    border-radius: 0.5rem;
    height: 2.5rem;
    font-size: 0.9rem;
    margin: 0.5rem 0;
    padding: 0.5rem;

    &:focus {
    outline: none;
    }
`

export const Descricao = styled.textarea`
    width: 100%;
    height: 7rem;
    font-size: 0.9rem;
    border-radius: 0.5rem;
    margin: 0.5rem 0;
    padding: 0.5rem 0 ;

    
    &:focus {
        outline: none;
    }
`
