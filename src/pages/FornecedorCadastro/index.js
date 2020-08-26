import React, { Component } from 'react'
import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import { Container, Img, Card, Imginterna, Cardright, Dividenovo, AlinhaBotao, Buttonnew, Alinatitulo, Ajustaaltura } from './style.js';
import logo from '../../assets/logo.png'
import imageminterna from '../../assets/complementar.jpeg'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import api from '../../services/api'
import { Link, withRouter } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import { thisExpression } from '@babel/types';



export default class Login extends Component {


    constructor() {
        super();

        this.state = {
            status: '',
            flag: 0


        }
        this.baseState = this.state
    }

    render() {


        return (
            <Container>
                <Img src={logo} />
                <Card>
                    <Imginterna src={imageminterna} />

                    <Cardright>
                        <Alinatitulo>
                            <p>Prossiga com seu cadastro</p>
                        </Alinatitulo>
                        <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '100%' }} label="Nome completo" />
                        <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '100%' }} label="Email" />
                        <Dividenovo>
                            {/* <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%' }} label="Seu estado" /> */}
                            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%', marginLeft: 50 }} label="Sua cidade" />
                        </Dividenovo>
                        <Dividenovo>
                            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%' }} label="Senha" />
                            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%', marginLeft: 50 }} label="Confirmar Senha" />
                        </Dividenovo>

                        <Ajustaaltura>
                            <FormControlLabel control={<Checkbox name="checkedG" />} label="Aceito os termos de uso do site" />
                            <AlinhaBotao>
                                <Buttonnew onClick={() => this.buscar()}>Cadastrar</Buttonnew >
                            </AlinhaBotao>
                        </Ajustaaltura>

                    </Cardright>


                </Card>

            </Container>



        );
    };


}


