import React, { useContext, useState } from 'react'
import {SideBarContext} from '../../store/index'
import { Container, Img, Card, Card2, Buttongroup } from './style.js';
import SideBar from '../../componets/SideBar'
import Perfil from'../../componets/Perfil'

const Main = ()=> {
    const {escolha} = useContext( SideBarContext )
    const {hendleMenu} = useContext( SideBarContext )
        
        return (
            <Container>

            <SideBar Escolha={escolha}></SideBar>
            {escolha==1 &&
            <Perfil></Perfil>
            } 
           
        
            </Container>



        );
  


}


export default Main