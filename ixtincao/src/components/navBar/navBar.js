import React from 'react';
import styled from "styled-components";
import { Route, withRouter, useHistory } from 'react-router-dom';


import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'popper.js';
import 'jquery';



const CorpoNavBar = styled.div`
    width: 100%;
    height: 30px;
    background-color: rgba( 50, 0, 120, 1);
    display:flex;
    


`;

const Botao = styled(CorpoNavBar)`
    width: 10%;    
    margin: 0px 0px 0px 0px;
    background: rgb(50,0,120);
    color: #AAAAAA;
    transition: 0.8s;
    white-space: nowrap;
    
    text-align: center;
    justify-content:center;
    font-size:16px;

    &:hover{
        color:rgb( 50, 0, 120); box-shadow: 4px 2px 2px 2px rgba(0, 0, 0, 0.2);
        margin: 0px 0px 0px 0px;
        background: #FFF;
        
        transition: 0.8s;
    }
`;


const NavBar = () => {

    let history = useHistory();

    const quantidadeDeBotoes = [{
        title: 'home',
        path: 'home',
    },
    {
        title: 'sobre',
        path: 'sobre',
    },
    {
        title: 'Loading',
        path: 'loading',
    },
    {
        title: 'Pagina Vitão',
        path: 'inicio'
    }
    ,
    {
        title: 'PAGINA EXTRA',
        path: 'pgex'
    }
    ];


    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

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