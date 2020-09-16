import React, { useContext, useState, useEffect } from 'react'
import {SideBarContext} from '../../store/index'
import { Container} from './style.js';
import SideBar from '../../componets/SideBar'
import Homeadm from '../../componets/Homeadm/index'

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
         
         </Container>


        );
  


}


export default Main