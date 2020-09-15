import React from 'react';
import styled from 'styled-components'



export const Container = styled.div`

display:flex;
flex-direction: column;
align-items: center;
height: 100% !important;
width: 20%;
border-right: 1px solid #FF522C;
padding-top:20px;
position: fixed;
.active{
        border-bottom:1px solid #e90000 !important;
    }
    .component{
      border-bottom:1px solid #4d2682 !important;
    }

`;


export const Img = styled.img`
    width: 80%;
     
     height: 10%;
     margin-bottom: 30px;
  
`;
export const Span = styled.span`
svg{
   width:15px;
   height:15px;
   margin-left:50%;
   background: #FF522C;
   color: white;
   border-radius:50%;
}
`;

export const Line = styled.div`
   border-bottom: 1px solid rgba(0, 0, 0, 0.15);
   min-width: 200px;
   padding-bottom:3px;
   margin-top:10px;
  color: #666666;
   font-weight: 600;
   cursor: pointer;
   font-feature-settings: 'pnum' on, 'lnum' on;
 
`;
export const Sair = styled.div`
position: absolute;
width: 56px;
height: 34px;

top: calc(50% - 34px/2 + 319px);


font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 24px;
/* or 100% */

display: flex;
align-items: center;
letter-spacing: 0.16px;
font-feature-settings: 'pnum' on, 'lnum' on;

color: #666666;

text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
 cursor: pointer;
`;