import React from 'react';
import styled from 'styled-components'



export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: 100vh;
    width: 100%;
    background: white;
`;

export const Img = styled.img`
    width: 100%;
    max-width: 250px;
    height: auto;
    margin-bottom:60px;
    max-height: 100px;
     
`;
export const Imginterna = styled.img`
    width: 30%;
    height: 65vh;
    margin-bottom:60px;    
    border-radius: 18px;
    border: 1px solid #FF522C;
`;


export const Card = styled.div`
    border-radius: 18px;
    border: 1px solid #FF522C;
    display:flex;
    height: 65vh;
    width: 75%;
`;
export const AlinhaBotao = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  

`;
export const Ajustaaltura = styled.div`
margin-top:10%;
`;
export const Alinatitulo = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;


`;

export const Divide = styled.div`
  display: flex;

  justify-content: space-around;

`;
export const Dividenovo = styled.div`
  display: flex;
  width:100%;


  justify-content: space-around;
`;
export const Buttonnew = styled.div`
  width:200px;
    background:#FF522C;
    color: white;
    text-align:center;
    cursor: pointer;
    border-radius: 10px;
    padding:2px 0 2px 0;
    letter-spacing: 0.16px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #FFFFFF;
    text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
`;
export const Cardright = styled.div`
    display:flex;
    height: 65vh;
    flex-direction:column;
    width:100%;
   
    padding:30px;
    p{
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 24px;
    /* identical to box height, or 109% */

      display: flex;
      align-items: center;
      letter-spacing: 0.16px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #666666;
      text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    }
`;