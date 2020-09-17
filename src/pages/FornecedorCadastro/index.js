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
            name: '',
            email: '',
            phone: '',
            password: '',
            cidade: '',
            status: '',
            confirmpassword: '',
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
                        <TextField id="standard-basic" onChange={e => { this.setState({ name: e.target.value }) }} style={{ marginBottom: 10, width: '100%' }} label="Nome completo" />
                        <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '100%' }} label="Email" />
                        <TextField id="standard-basic" onChange={e => { this.setState({ cidade: e.target.value }) }} style={{ marginBottom: 10, width: '100%' }} label="Sua cidade" />

                        {/* <Dividenovo>
                            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%' }} label="Seu estado" />
                            <TextField id="standard-basic" onChange={e => { this.setState({ cidade: e.target.value }) }} style={{ marginBottom: 10, width: '50%', marginLeft: 50 }} label="Sua cidade" />
                        </Dividenovo> */}
                        <Dividenovo>
                            <TextField className="encolhe" type="password" id="standard-basic" onChange={e => { this.setState({ password: e.target.value }) }} style={{ marginBottom: 10,   }} label="Senha" />
                            <TextField className="encolhe" type="password" id="standard-basic" onChange={e => { this.setState({ confirmpassword: e.target.value }) }} style={{ marginBottom: 10,    }} label="Confirmar Senha" />
                        </Dividenovo>

                        <Ajustaaltura>
                            <FormControlLabel control={<Checkbox name="checkedG" />} label="Aceito os termos de uso do site" />
                            <AlinhaBotao>
                                <Buttonnew onClick={() => this.cadastrar()}>Cadastrar</Buttonnew >
                            </AlinhaBotao>
                        </Ajustaaltura>

                    </Cardright>


                </Card>

            </Container>



        );
    };

    async cadastrar() {
        if (this.state.password == this.state.confirmpassword) {
            let data = {}
            data.name = this.state.name
            data.email = this.state.email
            data.phone = this.state.phone
            data.password = this.state.password
            data.cidade = this.state.cidade
            data.tipo = 2
            const response = await api.post('register', data)

            let vitrine={}
            vitrine.usuarioid=response.data.id
            const responsevitrine = await api.post('registervitrine', vitrine)
            console.log(responsevitrine)
        }
    }
}


