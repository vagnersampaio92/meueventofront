import styled from "styled-components";

export const Container = styled.div`
margin-top:30px;
padding: 10px 40px;
width:100%;
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

`;
export const Card = styled.div`
border: 1px solid #FF522C;
box-sizing: border-box;
border-radius: 18px;
padding:10px 20px 20px 20px;

    h4{
        font-style: normal;
        font-weight: 600;
        font-size: 15x;
        line-height: 24px;
/* or 133% */

        display: flex;
        align-items: center;
        letter-spacing: 0.16px;
        font-feature-settings: 'pnum' on, 'lnum' on;

        color: #666666;

        text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        margin-bottom:10px;

    }
    p{
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 24px;
/* or 86% */

        display: flex;
        align-items: center;
        letter-spacing: 0.16px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #666666;

        text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    }
    span{
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
/* or 86% */

        display: flex;
        align-items: center;
        letter-spacing: 0.16px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #666666;

        text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    }
`;