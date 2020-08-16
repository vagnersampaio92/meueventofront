import React, { Component } from 'react'
import styled from 'styled-components'

import { Container, Img, Card, Card2, Buttonnew } from './style.js';
import logo from '../../assets/logo.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import api from '../../services/api'
import { Link, withRouter } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = {
   borderBottom:"#fa8e40 !import" ,
  };


export default class Login extends Component {


    constructor() {
        super();

        this.state = {
            email: '',
            Password: ' ',
            erro: false
        }
        this.baseState = this.state
    }

    render() {


        return (
            <div style={{ width: '100%' }}>


                <Container >
                    
                        <Img src={logo} />
                 
                    <Card>

                        <Card2> <div style={{ background: "red", borderRadius: "7px" }}>
                            {this.state.erro == true &&
                                <p style={{ fontSize: 10, color: "white" }}>Email ou senha incorretos</p>
                            }
                        </div>

                            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, }} theme={theme}label="Email" />
                            <TextField id="standard-basic" onChange={e => { this.setState({ Password: e.target.value }) }} label="Senha" style={{ marginBottom: 10 }} type="password" />
                            <Buttonnew  variant="outlined" style={{ marginBottom: 5, borderColor: "#fa8e40", marginTop: 10 }} onClick={() => this.buscar()}>Confirmar</Buttonnew >
                        </Card2>

                    </Card>
                    <div>
                        Não tem uma conta? <a>cadastre-se </a>
                    </div>
                </ Container>
            </div>



        );
    }
    async  buscar() {
        console.log()


        this.setState(this.baseState)
        // this.props.comentar(this.state.imos);
        // this.setState({imos});

        let data = {}

        data.email = (this.state.email)
        data.password = (this.state.Password)



        console.log(data)

        try {
            const response = await api.post('loginapp', data)
            console.log(response.data.token)
            if (response.data.token) {
                const a = response.data.token
                const id = response.data.user.id
                sessionStorage.setItem('tokenres', a);
                sessionStorage.setItem('restauranteid', id);
                // localStorage.setItem('token',response.data.user.token)
                const b = sessionStorage.getItem('tokenres')
                console.log(b)
                this.props.history.push("/restaurante");
            } else {

                this.setState(
                    {
                        erro: true
                    }
                )
            }
        } catch (err) {

        }
    }

}


