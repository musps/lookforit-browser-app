import styled, { keyframes } from 'styled-components';

const animationBounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-30px);}
    60% {transform: translateY(-15px);}
`

const Loader = {
  main: styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(108, 122, 137, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 9999;
    display: none;
    align-items: center;
    justify-content: center;
    display: ${props => props.loader ? 'flex' : 'none'};
  `,
  content: styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 10% 0;
  `,
  message: styled.h1`
    font-size: 5em;
    letter-spacing: 3px;
    margin: 0;
    padding: 14px;
    text-shadow: 0 0 6px #333, 0 0 10px #333;
    animation: ${animationBounce} 1s infinite;
  `
}

export default Loader
