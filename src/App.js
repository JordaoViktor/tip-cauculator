import React, { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
width:500px;

`;
const SubTitle = styled.p`

`;
const Input = styled.input.attrs({
  type:'number',
  placeholder:'0'
})`
::-webkit-inner-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
}
::-webkit-outer-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
}
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
width:40%;
border:2px solid #000;
border-radius:3px;
`;

const Container = styled.div`
  width:700px;
  height:100%;
  display:flex;
  flex-direction:column;
  background-color:#ed9e02;
`;

const Result = styled.div`
  width:700px;
  border-top:1px solid black;
  margin-top:20px;

`
const Total = styled.p`
  font-size:16px;
  font-weight:bold;
`

function App() {
  const [ count, setCount ] = useState(0)
  const [ percentage, setPercentage ] = useState(10)

  const tipCalc = () =>{
    let Fullmath = percentage * count /100

   return Fullmath
    
  }

  return (
    <>
      <Container>
        <Title>Calculadora de Gorjeta</Title>
        <SubTitle>Quanto deu a conta ?</SubTitle>
        <Input value={count} onChange={e=> setCount(e.target.value) && tipCalc()} />
        <SubTitle>Qual a porcentagem da gorjeta ?</SubTitle>
        <Input value={percentage} onChange={e=> setPercentage(e.target.value)}/>
        {parseInt(count) > 0 && <Result>
          <SubTitle>Sub-total:{parseInt(count).toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}</SubTitle>
          <SubTitle>Gorjeta ({percentage}%):{tipCalc().toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}</SubTitle>
          <Total>Total:R$ {parseInt(count) + parseInt(tipCalc()) }</Total>
        </Result>}
      </Container>
      
    </>
  );
}

export default App;
