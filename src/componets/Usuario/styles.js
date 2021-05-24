import styled from "styled-components";

export const Container = styled.div`
margin-top:30px;
padding: 10px 40px;
width:100%;
`;

export const Alinha = styled.div`
width:100%;
display: flex;
justify-content:center;
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
border: 1px solid #FF522C;
box-sizing: border-box;
border-radius: 18px;
margin-top:10px;
padding:25px;

button{
    width: 98px;
    height: 26px;
    background: #FFFFFF;
    border: 1px solid #FF522C;
    box-sizing: border-box;
    border-radius: 15px;
    color: #FF522C;
    cursor: pointer;

    &:hover{
        background: #FF522C;
        color: white;
    }
}

`;
// 806
export const Boxd = styled.div`
border: 1px solid #FF522C;
width:50%;
box-sizing: border-box;
border-radius: 18px;
margin-top:10px;
padding:25px;
@media (max-width: 806px) {
    width:90%;
    p{
        font-size: 18px !important;
    }
     
}
p{
    font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 24px;
/* or 100% */
margin-top:20px;
display: flex;
align-items: center;
letter-spacing: 0.16px;
font-feature-settings: 'pnum' on, 'lnum' on;

color: #666666;

text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
}
button{
    width: 98px;
    height: 26px;
    background: #FF522C;
    margin-top:25px;
    box-sizing: border-box;
    border-radius: 15px;
    color: #ffffff;
    cursor: pointer;
    border:none;

    &:hover{
        background: white;
        color: #FF522c;
        border: 1px solid #FF522c;
    }
}

`;

export const Busca = styled.div`
display: flex;
align-items:center;
margin-left:30px;
.MuiInputBase-root{

    width:300px;
    @media (max-width: 525px) {
        width:200px;
     
}
}
button{
    width: 98px;
    height: 26px;
    background: #FFFFFF;
    border: 1px solid #FF522C;
    box-sizing: border-box;
    border-radius: 15px;
    color: #FF522C;
    cursor: pointer;

    &:hover{
        background: #FF522C;
        color: white;
    }
}

`;




export const Card = styled.div`
margin-top:10px;
display: flex;
justify-content: space-between;
border-bottom: 2px solid rgba(0, 0, 0, 0.15);
padding-bottom:5px;
p{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
/* or 100% */

    display: flex;
    align-items: center;
    letter-spacing: 0.16px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #666666;
    text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
}

`;

// @media (min-width: 481px) {
//     /* max-width:240px; */
//     height:150px;
//    }