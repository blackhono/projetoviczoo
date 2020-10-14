import React from 'react';
import styled from "styled-components";
import { Route, withRouter, useHistory } from 'react-router-dom';
/* import Eita from '../../resources/imagesImport'; */


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

    const mock = [
        {
            title: 'Eletronicos',
            products: ['https://www.kabum.com.br/hotsite/playstation5/img/console-playstation5.png', 'https://images.samsung.com/is/image/samsung/br-uhdtv-nu8000-un75nu8000gxzd-frontblack-113032908?$L2-Thumbnail$', 'https://freepikpsd.com/wp-content/uploads/2019/10/aparelho-de-som-png-3-Transparent-Images.png']
        },
        {
            title: 'Eletronicos',
            products: ['https://www.kabum.com.br/hotsite/playstation5/img/console-playstation5.png', 'https://images.samsung.com/is/image/samsung/br-uhdtv-nu8000-un75nu8000gxzd-frontblack-113032908?$L2-Thumbnail$', 'https://freepikpsd.com/wp-content/uploads/2019/10/aparelho-de-som-png-3-Transparent-Images.png']
        },
        {
            title: 'Eletronicos',
            products: ['https://www.kabum.com.br/hotsite/playstation5/img/console-playstation5.png', 'https://images.samsung.com/is/image/samsung/br-uhdtv-nu8000-un75nu8000gxzd-frontblack-113032908?$L2-Thumbnail$', 'https://freepikpsd.com/wp-content/uploads/2019/10/aparelho-de-som-png-3-Transparent-Images.png']
        },
        {
            title: 'Eletronicos',
            products: ['https://www.kabum.com.br/hotsite/playstation5/img/console-playstation5.png', 'https://images.samsung.com/is/image/samsung/br-uhdtv-nu8000-un75nu8000gxzd-frontblack-113032908?$L2-Thumbnail$', 'https://freepikpsd.com/wp-content/uploads/2019/10/aparelho-de-som-png-3-Transparent-Images.png']
        },
        {
            title: 'Eletronicos',
            products: ['https://www.kabum.com.br/hotsite/playstation5/img/console-playstation5.png', 'https://images.samsung.com/is/image/samsung/br-uhdtv-nu8000-un75nu8000gxzd-frontblack-113032908?$L2-Thumbnail$', 'https://freepikpsd.com/wp-content/uploads/2019/10/aparelho-de-som-png-3-Transparent-Images.png']
        },
        {
            title: 'Eletronicos',
            products: ['https://www.kabum.com.br/hotsite/playstation5/img/console-playstation5.png', 'https://images.samsung.com/is/image/samsung/br-uhdtv-nu8000-un75nu8000gxzd-frontblack-113032908?$L2-Thumbnail$', 'https://freepikpsd.com/wp-content/uploads/2019/10/aparelho-de-som-png-3-Transparent-Images.png']
        }
    ]

    const rows = mock.map((item, index) => {
        return (

            <div id={"carouselExampleInterval" + index} class="carousel slide" data-ride="carousel">
                <div class="carousel-inner d-inline-block" id={`${index}`} style={{ height: '10%', width: '10%' }}>
                    {item.products.map((x, i) => {
                        return (
                            <>
                                <div class={i == 0 ? "carousel-item active" : 'carousel-item'} data-interval="5000" >
                                    <img src={x} class="img-thumbnail" alt="..." />
                                </div>
                            </>

                        );
                    })}
                </div>
            </div>
        )
    })



    /*  for (let i = 1; i <= 10; i++) {
         rows.push(
 
             <div class="carousel-inner d-inline-block" id={`${i}`} style={{ height: '10%', width: '10%' }}>
                 <div class="carousel-item active" data-interval="1000" >
                     <img src="https://images.samsung.com/is/image/samsung/br-uhdtv-nu8000-un75nu8000gxzd-frontblack-113032908?$L2-Thumbnail$" class="img-thumbnail" alt="..." />
                 </div>
                 <div class="carousel-item" data-interval="1000">
                     <img src="https://www.kabum.com.br/hotsite/playstation5/img/console-playstation5.png" class="img-thumbnail" alt="..." />
                 </div>
                 <div class="carousel-item" data-interval="1000">
                     <img src="https://freepikpsd.com/wp-content/uploads/2019/10/aparelho-de-som-png-3-Transparent-Images.png" class="img-thumbnail" alt="..." />
                 </div>
             </div>
         )
 
     } */


    return (
        <>


            <div class="fixed-top">
                <nav class="navbar navbar-dark bg-dark">
                    <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <form class="form-inline my-0 my-lg-0 w-75" style={{ flexFlow: "nowrap" }}>
                        <input class="form-control mr-sm-4 w-100 " type="search" placeholder="Buscar" aria-label="Search" />
                        <button class="btn btn-outline-danger bg my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </nav>
                <div class="col-md-8" class="collapse " id="navbarToggleExternalContent">
                    <div class="card-body" class="bg-dark p-4 d-block-inline" >
                        {rows}
                    </div>


                </div>

            </div>




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