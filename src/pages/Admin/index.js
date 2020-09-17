import React, { useContext, useState, useEffect } from 'react'
import {SideBarContext} from '../../store/index'
import { Container} from './style.js';
import SideBar from '../../componets/SideBar'
import Homeadm from '../../componets/Homeadm/index'
import Usuario from '../../componets/Usuario/index'
import Fornecedor from '../../componets/Fornecedor/index'
import Categoria from '../../componets/Categoria/index'
import Pergunta from '../../componets/Pergunta/index'
import Navbar from '../../componets/menu/Navbar/Navbar';
const Main = ()=> {
    const {  adm, Setadm} = useContext( SideBarContext )
    const {  escolhaadm, SetEscolhaadm} = useContext( SideBarContext )

   
    const {hendleMenu} = useContext( SideBarContext )
    useEffect(() => {
        Setadm(true)
      }, []);
    console.log(escolhaadm)
        return (
         <Container>
       
          <SideBar  ></SideBar>
      
 
    
         <Navbar></Navbar>
      
         <div className='teste'>
         {escolhaadm == 1 && <><Homeadm  className='teste' /></>}
         {escolhaadm == 2 && <><Usuario className='teste'/></>}
         {escolhaadm == 3 && <><Categoria className='teste'/></>}
         {escolhaadm == 4 && <><Pergunta className='teste'/></>}
         {escolhaadm == 5 && <><Fornecedor className='teste'/></>}
         </div>
         </Container>


        );
  


}


export default Main