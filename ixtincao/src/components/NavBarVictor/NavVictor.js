import React from 'react';

import styled from "styled-components";
import { Route , withRouter, useHistory} from 'react-router-dom';

const Barrao = styled.div`
    width: 100%;
    height: 20px;
    background-color: rgb(0,0,0)

`;

const cobrircorpo = styled.div`
    width: 100%;
    height: 42px;
    background-color: rgba( 16, 50, 12);
    display:flex;

    `;
    const Botao = styled(cobrircorpo)`
    margin: -18px 0px 0px 0px;
    background-color: rgba(100,23,10)
    color: #37006f;
    padding: 30px 30px 0px 30px;
    text-align: center;
    
    &:hover{color: yellowgreen;
        background: #f20000;box-shadow: 0 0 10px #f20000, 0 0 40px #f20000, 0 0 80px #f20000; 
        transition-delay: 0.5s; 
        -webkit-box-reflect: below 1px linear-gradient(transparent,#0005); 
        transition: 0.5s;
    }
    `;

    const NavVictor = () => {

        let history = useHistory();

        const numeroDeBotoes = [{
            title:'inicio',
            path: 'ind',
        },
        {
            title:'informações',
            path: 'infos',
        },
        {
            title:'teste',
            path: 'loading',
        }
        ];
        
        
        return(
            <>
            <Barrao></Barrao>
                <cobrircorpo>
                     {numeroDeBotoes.map((botao, index) => <Botao key={index} onClick={() => history.push(`/${botao.path}`)}>{botao.title}</Botao>)}
                </cobrircorpo>
            </>
        )
    };
    export default NavVictor;