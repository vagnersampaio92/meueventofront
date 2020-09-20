import styled from "styled-components";

export const Container = styled.div`
  text-align:center;
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    color: rgba(102, 102, 102, 0.6);
    font-weight: 600;
    text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  }
  width:100%;
  min-height:100vh;
   padding-bottom: 50px;
   /* 904 */
   @media (min-width: 905px) {
   border-left: 1px solid #FF522C;
   }
`;
export const Divide = styled.div`
  display: flex;
  width: 70vw;
  justify-content: space-around;

`;
export const Img = styled.img`
    width: 100%;
     max-width: 150px;
     height: auto;
     margin-bottom:20px;
      max-height: 150px;
      border-radius: 50%;
      border:1px solid #FF522C;
     
     
`;
export const Imgslide = styled.img`
    width: 100%;
     
     height: auto;
     margin-bottom:20px;
      max-height: 300px;
      border:1px solid #FF522C;
      border-radius: 10px;
`;


export const Dividenovo = styled.div`
  display: flex;
  width:100%;
  :first-child{
    margin-top:30px !important;
    }

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
`;
export const Containerexterno = styled.div`
  display: flex;
  width:50%;
  flex-direction: column;
  @media (max-width: 1000px) {
    width:90%;
  }
  p{
    margin-top:15px;
    margin-bottom:15px;
  }
  input[type="file"] {
   border:0;
   clip:rect(0,0,0,0);
   height:1px;
   overflow:hidden;
   position:absolute;
   word-spacing:nowrap;

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
 }
  #file{
    
    border:0;
   clip:rect(0,0,0,0);
   height:1px;
   overflow:hidden;
   position:absolute;
   word-spacing:nowrap;
  }
`;
export const AlinhaBotao = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 100px;

`;

export const Alinhacont = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  color:#FF522C;
  margin-top: 5px;

`;
export const AlinhaBotaoExcluir = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 5px;

`;

export const Buttonnew2 = styled.div`
  width:200px;
    /* background:#FF522C; */
    color: white;
    text-align:center;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #FF522C;
    margin-left:10px;
    padding:2px 0 2px 0;
    letter-spacing: 0.16px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #FF522C;
    text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
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
`;
export const Titulo = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  margin-top:30px;
  line-height: 24px;
  /* identical to box height, or 109% */
  align-items: center;

  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #666666;
  text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25) ; 

`;
export const Menu = styled.div`
  text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25) ; 
  min-width: 200px;
  border-bottom: 1px solid #FF522C;
  font-style: normal;
  font-weight: 600; 
  height:30px;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #666666;
  margin-top:20px;
  cursor: pointer;
`;
export const Menu2 = styled.div`
  text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25) ; 
  min-width: 200px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-style: normal;
  font-weight: 600; 
  height:30px;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #666666;
  margin-top:20px;
  cursor: pointer;
`;
