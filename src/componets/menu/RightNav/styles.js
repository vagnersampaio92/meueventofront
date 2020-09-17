import styled from 'styled-components';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: #666666;
  li {
    color: #666666;
    padding: 8px 10px;
    font-size:1.2rem;
    a {
      text-decoration:none !important;
    }
  }
  @media (max-width: 904px) {
    color: #666666;
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index:10;
    padding-top: 8rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #666666;
      text-decoration:none !important;
    }
  }
`;




export const Container = styled.div`

display:flex;
flex-direction: column;
align-items: center;

height: 100% ;
width: 30%;
border-right: 1px solid #FF522C;
padding-top:20px;

.active{
        border-bottom:1px solid #e90000 !important;
    }
    .component{
      
    }


 @media (max-width: 904px) {
    display: none;
   }

`;


export const Img = styled.img`
   width: 60%;
     height: 3%;
     margin-bottom: 30px;
  
`;
export const Alinha = styled.div`
   width: 60%;
     height: 3%;
     margin-bottom: 30px;
  
`;

export const Span = styled.span`
svg{
   width:15px;
   height:15px;
   background: #FF522C;
   color: white;
   border-radius:50%;
}
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
   border-bottom: 1px solid rgba(0, 0, 0, 0.15);
   max-width: 200px;
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