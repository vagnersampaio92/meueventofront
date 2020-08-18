import React, { useContext } from 'react'
import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import { Container, Img, Line, Sair } from './style.js';
import logo from '../../assets/logo.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import api from '../../services/api'
import { Link, withRouter } from "react-router-dom";

import { thisExpression } from '@babel/types';
import {SideBarContext} from '../../store/index'

const SideBar= ({Escolha})=>{
    const { hendleMenu } = useContext(SideBarContext)

   function sair(){
        sessionStorage.clear();
    
        this.props.history.push("/loginfornecedor");
    }
   


        return (
           <>
            <Container>
            <Img src={logo} />
            <Line onClick={() => hendleMenu(1)}>Meu Perfil</Line>
            
            <Line onClick={() => hendleMenu(2)}>Meus eventos</Line>
            <Line onClick={() => hendleMenu(3)}>Meus Pacotes</Line>
            <Sair>Sair</Sair>
            
            </Container>
           
           </>



        );



}

export default SideBar


