import React from 'react';
import styled, { keyframes } from "styled-components";

import logo192 from './logo192.png';

const Load = styled.div`
    text-align: center;
`;
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
  }
`;

const Logo = styled(Load)`
    height: 192px;
    width: 192px;
    pointer-events: none;
    background-image: url('${logo192}');

    @media (prefers-reduced-motion: no-preference) {
        animation: ${rotate} infinite 20s linear;
    }

`;

const Header = styled(Load)`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Loading = ({

}) => {
    return(
        <>
            <Header>
                <Logo></Logo>
            Carregando, aguarde...
            </Header>

        </>
    )
};


export default Loading;