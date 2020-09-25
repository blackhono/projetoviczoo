import React from 'react';
import styled from "styled-components";
import NavVictor from '../../components/NavBarVictor/NavVictor';


const Cobrir = styled.div`
    background-color: rgba(12,0,200);
    width: 100%;
    height: 100px;
`;

function Emitir(){
    return(
        <>
        <Cobrir></Cobrir>
        </>
    )
};

export default Emitir;