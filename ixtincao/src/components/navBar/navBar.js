import React from 'react';
import styled from "styled-components";
import { Route , withRouter, useHistory} from 'react-router-dom';




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

const NavBar = () => {

    let history = useHistory();

    const quantidadeDeBotoes = [{
        title:'home',
        path: 'home',
    },
    {
        title:'sobre',
        path: 'sobre',
    },
    {
        title:'Tela de Loading',
        path: 'loading',
    }
    ];
    
    
    return(
        <>
        <Barrinha></Barrinha>
            <CorpoNavBar>
                 {quantidadeDeBotoes.map((botao, index) => <Botao key={index} onClick={() => history.push(`/${botao.path}`)}>{botao.title}</Botao>)}
            </CorpoNavBar>
        </>
    )
};

/* 
const NavBar = (...props) => {
    let { informaçãoRecebidaDentroDoProps } = props; 
    let history = useHistory();

    const quantidadeDeBotoes = [{
        title:'home',
        path: 'home',
    },
    {
        title:'sobre',
        path: 'sobre',
    }
    ];
    
    
    return(
        <>
        <Barrinha></Barrinha>
            <CorpoNavBar>
                 {quantidadeDeBotoes.map((botao, index) => <Botao key={index} onClick={() => history.push(`/${botao.path}`)}>{botao.title}</Botao>)}
            </CorpoNavBar>
        </>
    )
};
 */

/* const NavBar = ({
    


}) => {
    
    const quantidadeDeBotoes = [{
        title:'home',
        path: 'home',
    },
    {
        title:'sobre',
        path: 'sobre',
    }
    ];
    const history = useHistory();
    
    return(
        <>
        <Barrinha></Barrinha>
            <CorpoNavBar>
                 {quantidadeDeBotoes.map(botao => <Botao onClick={history.push(`/${botao.path}`)}>{botao.title}</Botao>)}
            </CorpoNavBar>
        </>
    )
};
 */

export default NavBar;