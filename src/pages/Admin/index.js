import React, { useContext, useState, useEffect } from 'react'
import {SideBarContext} from '../../store/index'
import { Container} from './style.js';
import SideBar from '../../componets/SideBar'
import Homeadm from '../../componets/Homeadm/index'
import Usuario from '../../componets/Usuario/index'
import Fornecedor from '../../componets/Fornecedor/index'
import Categoria from '../../componets/Categoria/index'
import Pergunta from '../../componets/Pergunta/index'

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
         <SideBar ></SideBar>
         {escolhaadm == 1 && <><Homeadm /></>}
         {escolhaadm == 2 && <><Usuario /></>}
         {escolhaadm == 3 && <><Categoria /></>}
         {escolhaadm == 4 && <><Usuario /></>}
         {escolhaadm == 5 && <><Fornecedor /></>}
         </Container>


        );
  


}


export default Main