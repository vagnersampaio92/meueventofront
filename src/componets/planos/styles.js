import styled from "styled-components";

export const Container = styled.div`
  text-align:center;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  width:100%;

`;
export const Box = styled.div`
margin-top:100px;
display:flex;

`;
export const Titulo = styled.div`
text-align:left;
margin-top:50px;
margin-left:-700px;

font-style: normal;
font-weight: 600;
font-size: 34px;
line-height: 24px;
/* or 71% */
border-bottom: 2px solid #FF522C;
padding-bottom:5px;
display: flex;
align-items: center;
letter-spacing: 0.16px;
font-feature-settings: 'pnum' on, 'lnum' on;
text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
color: #666666;


`;

export const Card = styled.div`
width: 250px !important;

word-wrap: break-word;
border: 1px solid #FF522C;
border-radius:10px;
display: flex;
flex-direction: column;
padding: 10px 15px 30px 15px;
align-items: center;
margin-left:30px;
div{
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

button{

    background:#FF522C;
    color: white;
    text-align:center;
    cursor: pointer;
    border-radius: 10px;
    padding:5px 5px 5px 5px;
    align-content: flex-end;
    margin-top:10px;
   
    color: #FFFFFF;
    border:none !important;
}
`;
export const Cadtitle= styled.div`
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 24px;
/* or 133% */
margin-bottom:30px;
text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
display: flex;
align-items: center;
letter-spacing: 0.16px;
font-feature-settings: 'pnum' on, 'lnum' on;

color: #666666;


`;

export const P= styled.p`
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
/* or 171% */
word-wrap: break-word;
margin-top:15px;
display: flex;
align-items: center;
letter-spacing: 0.16px;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #666666;

`;