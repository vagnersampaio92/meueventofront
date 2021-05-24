import React, { Component} from 'react'
import styled from 'styled-components'
import {SideBarContext} from '../../store/index'
import { Container, Img, Card, Card2, Buttonnew } from './style.js';
import logo from '../../assets/logo.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import api from '../../services/api'
import { Link, withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";



export default class Login extends Component {

    
    constructor() {
        super();

        this.state = {
            email: '',
            Password: ' ',
            erro: false,
            loggin: false
        }
        this.baseState = this.state
    }

    render() {
        

        return (
            // <div style={{ width: '100%' }}>


            //     <Container >
            //         <Card>
            //             <header>
            //                 <Img src={logo} />
            //             </header>
            //             <Card2>
            //                 <div style={{ background:"red", borderRadius:"7px" }}>
            //                     {this.state.erro == true &&
            //                         <p style={{ fontSize: 10, color: "white" }}>Email ou senha incorretos</p>
            //                     }
            //                 </div>

            //                 <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} label="Email" />

            //                 <TextField id="standard-basic" onChange={e => { this.setState({ Password: e.target.value }) }} label="Senha" style={{ marginBottom: 30 }} type="password" />

            //                 <Button variant="outlined" style={{ marginBottom: 50, borderColor: "#fa8e40" }} onClick={() => this.buscar()}>Login admin</Button>
            //             </Card2>
            //         </Card>
            //     </ Container>
            // </div>
            <div style={{ width: '100%' }}>


            <Container >
                
                    <Img src={logo} />
             
                <Card>

                    <Card2> <div style={{ background: "red", borderRadius: "7px" }}>
                        {this.state.erro == true &&
                            <p style={{ fontSize: 10, color: "white" }}>Email ou senha incorretos</p>
                        }
                    </div>

                    <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} label="Email" />

                        <TextField id="standard-basic" onChange={e => { this.setState({ Password: e.target.value }) }} label="Senha" style={{ marginBottom: 30 }} type="password" />
                        <div style={{display: 'flex',flexDirection: 'row'}}>
                        <Buttonnew  variant="outlined" style={{ marginBottom: 5, borderColor: "#fa8e40", marginTop: 10 }} onClick={() => this.buscar()}>Confirmar</Buttonnew >
                        {this.state.loggin && 
                                <Loader
                                type="Oval"
                                color="#FF522C"
                                height={40}
                                width={40}
                                style={{marginLeft: 20}}
                            />
                        }
                        </div>
                    </Card2>

                </Card>
                
            </ Container>
        </div>


        );
    }
    async  buscar() {
     
        

        this.setState(this.baseState)
        this.setState({loggin: true})
        // this.props.comentar(this.state.imos);
        // this.setState({imos});

        let data = {}

        data.email = (this.state.email)
        data.password = (this.state.Password)



        // console.log(data)

        try {
            const response = await api.post('loginadmin', data)
            // console.log(response.data.token)
            if (response.data.token) {
                const a = response.data.token
                sessionStorage.setItem('token', a);
                // localStorage.setItem('token',response.data.user.token)
                const b = sessionStorage.getItem('token')
                // console.log(b)
                this.setState({loggin: false})
                this.props.history.push("/admin");
            } else {
                this.setState({loggin: false})
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


