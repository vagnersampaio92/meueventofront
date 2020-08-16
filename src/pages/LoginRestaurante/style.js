import React from 'react';
import styled from 'styled-components'



export const Container = styled.div`

display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
padding-top: 70px;
width: 100%;
height:80vh;
background: white;
a{
        color: #FF522C
    }
`;

export const Buttonnew = styled.div`
    width:40%;
    background:#FF522C;
    color: white;
    text-align:center;
    border-radius: 10px;
    padding:2px 0 2px 0;
`;


export const Img = styled.img`
    width: 100%;
     max-width: 250px;
     height: auto;
     margin-bottom:20px;
      max-height: 100px;
     
`;

export const Card2 = styled.div`
  width: 90%;
   
    margin-bottom: 10px;
    max-width: 350px;
    padding-top:15px;
    height: auto;
    justify-content: center;
   
    display: flex;
    flex-direction: column;
  
  
`;

export const Card = styled.div`
  width: 100%;
    
    margin-bottom: 10px;

    max-width: 250px;
    background: white;
    height: auto;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #FF522C;
    display: flex;
    flex-direction: column;

    header{
        padding:30px;
        display: flex;
        flex-direction: column;
        align-items: center;
      
    }
    p{
        padding:15px;
    }
    h3{
        padding:25px;
    }
   
`;


  
