import React from 'react';
import styled from "styled-components";




const Barra = styled.div`
display:flex;
width: 100%;
height: 50px;
background-color: #FF0000;
justify-content: center;
`;

const Conteudo = styled(Barra)`
 margin: 0px 0px 0px 60px;
 width: 20%;
 text-align:
`



const BarraDeBusca = () => {

    
    return(
        <>
            <Barra><Conteudo>Frete</Conteudo><Conteudo>Economia</Conteudo><Conteudo>Desconto</Conteudo></Barra>
        </>
    )
};

export default BarraDeBusca;