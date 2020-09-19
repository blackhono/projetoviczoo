import React from 'react';
import styled from "styled-components";

const quantidadeDeBotoes = ['Home','Sobre', 'Botaonovo'];

const Barrinha = styled.div`
    width: 100%;
    height: 9px;
    background-color: rgb(200,200,200);

`;

const CorpoNavBar = styled.div`
    width: 100%;
    height: 42px;
    background-color: rgba( 50, 0, 120, 1);
    display:flex;


`;

const Botao = styled(CorpoNavBar)`
    margin: -18px 0px 0px 0px;
    background: linear-gradient(0deg, rgb(50,0,120) 70%, rgb(200,200,200) 70%);
    color: #AAAAAA;
    padding: 20px 20px 0px 20px;
    text-align: center;
    transition: 0.8s;
    
    &:hover{
        border-radius: 0px 0px 10px 10px;
        margin: 0px 0px 0px 0px;
        padding: 20px 20px;
        background: #AAAAAA;
        background: linear-gradient(0deg, rgb(50,0,120) 30%, rgb(200,200,200) 70%);
        color: rgb( 50, 0, 120);
        transition: 0.8s;
    }
`;

const NavBar = ({

}) => {
    return(
        <>
        <Barrinha></Barrinha>
            <CorpoNavBar>
                 {quantidadeDeBotoes.map(botao => <Botao>{botao}</Botao>)}
            </CorpoNavBar>
        </>
    )
};


export default NavBar;