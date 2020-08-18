import React, { Component } from 'react'
import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import { Container, Img, Card, Card2, Buttongroup } from './style.js';
import logo from '../../assets/logo.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import api from '../../services/api'
import { Link, withRouter } from "react-router-dom";

import { thisExpression } from '@babel/types';


export default class Login extends Component {


    constructor() {
        super();

        this.state = {
            status:'',
            flag:0


        }
        this.baseState = this.state
    }

    render() {


        return (
           <Container>
               <Card2></Card2>
           </Container>



        );
    };
 

}


