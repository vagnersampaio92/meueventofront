import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {SideBarContext} from '../../store/index'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import { Container, Img, Card, Card2, Buttongroup } from './style.js';
import logo from '../../assets/logo.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import api from '../../services/api'
import { Link, withRouter } from "react-router-dom";

import { thisExpression } from '@babel/types';
import SideBar from '../../componets/SideBar'


const Main = ()=> {
    const {escolha} = useContext( SideBarContext )
    const {hendleMenu} = useContext( SideBarContext )
        
        return (
            <Container>

            <SideBar Escolha={escolha}></SideBar>
            
           
             <p>{escolha}</p>
            </Container>



        );
  


}


export default Main