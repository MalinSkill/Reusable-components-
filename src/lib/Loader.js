import React from 'react';
import styled from 'styled-components/macro';

const LoaderWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: #263038;
`

const LoaderSpan = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: animloader 1s linear infinite;

@keyframes animloader {
  0% {
    box-shadow: -72px 0 ${(props) => props.color} inset;
  }
  100% {
    box-shadow: 48px 0 ${(props) => props.color} inset;
  }
}
`
const AnimatedP = styled.p`
    /* font-family: 'Audiowide', cursive;  */
    color: ${(props) => props.color};
    font-size: 28px;  
    padding-top: 5px;     
    padding-bottom: 5px;     
    overflow: hidden; /* Ensures the content is not revealed until the animation */     
    border-right: .15em solid orange; /* The typwriter cursor */     
    white-space: nowrap; /* Keeps the content on a single line */     
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */     
    letter-spacing: .15em; /* Adjust as needed */     
    animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;

     /* The typing effect */ 
     @keyframes typing { from { width: 0 }  to { width: 100% }}    
     /* The typewriter cursor effect */     
     @keyframes blink-caret { from, to { border-color: transparent }  50% { border-color: white;}}
`

export const Loader = ({ loaderColor, textColor }) => {
  return (
    <LoaderWrapper>
      <LoaderSpan color={loaderColor} />
      <AnimatedP color={textColor}>Loading...</AnimatedP>
    </LoaderWrapper>
  )
}