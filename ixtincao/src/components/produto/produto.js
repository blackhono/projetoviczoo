import React from 'react';
import styled from "styled-components";

const Quadro = styled.div`
display:flex;
flex-flow: wrap;
width: 100%;
height:100%;
`;

const Fundo = styled.div`
width: 420px;
height: 420px;
margin: 10px 10px;

`;


const Container = styled(Fundo)`
background: rgb(0,13,120);
background: linear-gradient(180deg, rgba(100,100,100,1) 35%, rgba(52,58,64,1) 35%);
    border-radius: 10%;
    color: #FFF;

`;

const ContainerVisualizaProduto = styled.div`
background: rgba(200,0,0,0);
    width: 100%;
    height: 60%;
    text-align: -webkit-center;
    padding-top:20px;

`;

const ProdutoContainer = styled.div`
background: rgba(256,256,256,1);
width: 60%;
height: 100%;
border-radius: 100%;


`;

const ProdutoVisualizacao = styled.div`
background: url(https://www.kabum.com.br/hotsite/playstation5/img/console-playstation5.png) no-repeat;
width:100%;
height:100%;
background-size: contain;
`;
const mock = [{
    name: 'Playstation 5',
    price: '4.500$'
},
{
    name: 'Playstation 5',
    price: '4.500$'
},
{
    name: 'Playstation 5',
    price: '4.500$'
},
{
    name: 'Playstation 5',
    price: '4.500$'
}]
const produtos = mock.map((item, index) => (
    <Container>
        <ContainerVisualizaProduto>
            <ProdutoContainer>
                <ProdutoVisualizacao></ProdutoVisualizacao>
            </ProdutoContainer>
        </ContainerVisualizaProduto>
        <h2 style={{ textAlign: "center", marginTop: '30px' }}>{item.name}</h2>
        <h1 style={{ textAlign: "center" }}> {item.price}</h1>
    </Container>
))

const Produto = (props) => {
    return (
        <>
            <Quadro>
                {produtos}
            </Quadro>
        </>
    )
};


export default Produto;