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

    input[type="file"] {
   border:0;
   clip:rect(0,0,0,0);
   height:1px;
   overflow:hidden;
   position:absolute;
   word-spacing:nowrap;
  }
  
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
    height: 100vh;
    margin-bottom:60px;    
    border-radius: 18px;
    border: 1px solid #FF522C;
    @media (max-width: 1000px) {
       display: none;
      
     
}
`;

export const Imgslide = styled.img`
    width: 200px;
     margin-top:50px;
     height: 200px;
     margin-bottom:20px;
      max-height: 300px;
      border:1px solid #FF522C;
      border-radius: 50%;
`;
export const Card = styled.div`
    border-radius: 18px;
    border: 1px solid #FF522C;
    display:flex;
    height: 100vh;
    width: 75%;
    @media (max-width: 1000px) {
      width: 100%;
       border: 0;   
     
}
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
  width:100% !important;
  justify-content: space-between;
  .encolhe{
    width:45% !important;
  }

  @media (max-width: 1000px) {
      flex-direction: column;
      .MuiInput-root{
        width:100% !important;
      }
     .MuiFormControl-root .MuiTextField-root{
      width:100% !important;
     }
     .encolhe{
      width:100% !important;
  }
}

.button{
    width:200px !important;
    background:#FF522C;
    color: white;
    text-align:center;
    cursor: pointer;
    border-radius: 10px;
    padding:2px 0 2px 0;
    letter-spacing: 0.16px;
    color: #FFFFFF;


    text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    &:hover{
        background: white;
        color: #FF522C;
        border: 1px solid #FF522C;
    }
 }

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
    &:hover{
        background: white;
        color: #FF522C;
        border: 1px solid #FF522C;
    }
`;
export const Cardright = styled.div`
    display:flex;
    height: 100vh;
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