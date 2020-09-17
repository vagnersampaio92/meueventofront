import React from 'react';
import styled from 'styled-components'



export const Container = styled.div`

display:flex !important;


height: 100vh !important;
width: 100%;
.teste{
    
  
    width: 100% ;
 }
 @media (max-width: 904px) {
    flex-direction: column;
   
   
    .teste{
     
        margin-top:100px;
    }
  
    }

`;

export const Buttongroup = styled.div`
 display: flex;
  justify-content: center;
    align-items: center;
    flex-direction: row;
    

`;
