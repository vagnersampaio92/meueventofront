import React, { useContext } from 'react'
import { Container, Img, Line, Sair } from './style.js';
import logo from '../../assets/logo.png'
import {SideBarContext} from '../../store/index'
import { useHistory } from "react-router"



const SideBar= ({Escolha})=>{
    const { hendleMenu } = useContext(SideBarContext)
    const history = useHistory()



   function sair(){
        sessionStorage.clear();
        history.push("/loginfornecedor")
  
    }
   


        return (
           <>
            <Container>
            <Img src={logo} />
            <Line onClick={() => hendleMenu(1)}>Meu Perfil</Line>
            
            {/* <Line onClick={() => hendleMenu(2)}>Meus eventos</Line> */}
            <Line onClick={() => hendleMenu(3)}>Meus Pacotes</Line>
            <Sair onClick={() => sair()}>Sair</Sair>
            
            </Container>
           
           </>



        );



}

export default SideBar


