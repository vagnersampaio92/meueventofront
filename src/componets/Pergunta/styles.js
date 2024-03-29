import styled from "styled-components";

export const Container = styled.div`
margin-top:30px;
padding: 10px 40px;
width:100%;
.espaco{
    margin-top:40px;
    margin-bottom:60px;
}
.texto{

    display: flex;
    margin-top:250px;
    justify-content:center;
    p{
        /* margin-top:20%; */
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
/* or 150% */
    text-align: center;
    display: flex;
    align-items: center;
    letter-spacing: 0.16px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #666666;

    text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
}


}

`;

export const Titulo = styled.div`
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 24px;
margin-bottom:40px;
/* or 100% */

display: flex;
flex-direction: column;
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
        color: #FF522c;
        background: white;
    }
}

`;
export const Boxd = styled.div`
border: 1px solid #FF522C;
width:50%;
box-sizing: border-box;
border-radius: 18px;
margin-top:10px;
padding:25px;
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
div{
    display:flex;
    justify-content: space-between;
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
}
}

`;

export const Busca = styled.div`
display: flex;
align-items:center;
margin-left:30px;
justify-content: center;
.MuiInputBase-root{

    width:300px;
    @media (max-width: 525px) {
        width:150px;
     
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
        background: #FF522c;
        color: white;
    }
}

`;




export const Card = styled.div`
margin-top:10px;
width:100%;
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

button{
    &:hover{
        background: #FF522c;
        color: white;
    }
}

`;