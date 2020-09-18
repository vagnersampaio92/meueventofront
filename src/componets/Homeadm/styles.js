import styled from "styled-components";

export const Container = styled.div`
margin-top:30px;
padding: 10px 40px;
width:100%;
word-wrap: break-word;

`;

export const Titulo = styled.div`
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 24px;
margin-bottom:40px;
/* or 100% */

display: flex;
align-items: center;
letter-spacing: 0.16px;
font-feature-settings: 'pnum' on, 'lnum' on;

color: #666666;

text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
`;
export const Box = styled.div`
display: flex;
width:100%;
justify-content: space-between;
flex-flow:row wrap;
@media (max-width: 402px) {
    justify-content:center;
    width:80%;
  margin-left:0px;
     
}
`;
export const Card = styled.div`
border: 1px solid #FF522C;
box-sizing: border-box;
border-radius: 18px;
padding:15px 25px 25px 25px;
@media (max-width: 724px) {
    margin-top: 30px;
    padding:5px 15px 15px 15px;
     
}
    h4{
        font-style: normal;
        font-weight: 600;
        font-size: 18x;
        line-height: 24px;
/* or 133% */

        display: flex;
        align-items: center;
        letter-spacing: 0.16px;
        font-feature-settings: 'pnum' on, 'lnum' on;

        color: #666666;

        text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        margin-bottom:15px;
        @media (max-width: 724px) {
            h4{
            font-size: 8x  !important;
            }
        }

    }
    p{
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
/* or 86% */

        display: flex;
        align-items: center;
        letter-spacing: 0.16px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #666666;

        text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        @media (max-width: 724px) {
          p{font-size: 8x !important;}  
        }
    }
    span{
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 24px;
/* or 86% */

        display: flex;
        align-items: center;
        letter-spacing: 0.16px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #666666;

        text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        @media (max-width: 724px) {
            span{
                font-size: 14x !important;
            }
            
        }
    }
`;