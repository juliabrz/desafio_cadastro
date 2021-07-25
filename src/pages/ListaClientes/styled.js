import styled from 'styled-components';

export const StyledTable = styled.table`
  border: none;
  /* border-collapse: collapse; */
  border-collapse: separate; 
  width: 80%;
             
  td,
  th {
    border: none;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: #F6BACC;
    }
  }
  thead > tr {
      height: 2rem;
      color: #ffffff;
      background-color: #0463C4;
  }

  @media (max-width: 480px) { 
  thead {
    display: none;
  }
  tr {
    border-bottom: 1px solid #dddddd;
    align-items: center;
  }
  td {
    border: 0;
  }
  td:not(:first-child) {
    display: block;
  }
}
`;

export const ButtonDel = styled.button`
    height: auto;
    width: auto;
    font-size: 1.2rem;
    border: 1px solid #CC2828;
    background: #CC2828;
    color: #fff;
    border-radius: 0.5rem;
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