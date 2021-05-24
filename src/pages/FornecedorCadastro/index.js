import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import { Container, Img, Imgslide, Card, Imginterna, Cardright, Dividenovo, AlinhaBotao, Buttonnew, Alinatitulo, Ajustaaltura } from './style.js';
import logo from '../../assets/logo.png'
import imageminterna from '../../assets/complementar.jpeg'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import api from '../../services/api'
import { Link, withRouter } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import { thisExpression } from '@babel/types';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";



export default function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setphone] = useState('')
    const [password, setPassword] = useState('')
    const [cidade, setCidade] = useState('')
    const [status, setStatus] = useState('')
    const [categorias, setCategorias] = useState([])
    const [selectedCat, setSelected] = useState('')
    const [idCat, setIdCat] = useState(0)
    const [confirmpassword, setConfirmpassword] = useState('')
    const [loader,setLoader] = useState(false)
    const [flag, setFlag] = useState(0)
    const [serverFoto,setServerFoto] = useState('https://img.icons8.com/pastel-glyph/2x/person-male.png')


    useEffect(() => {
        let cidade = {}
        cidade.cidades = ['1']
        api.post('listacategoriaporcidade', cidade).then(responsecidade => {
            setCategorias(responsecidade.data.data)
            console.log(responsecidade.data.data)
        })
    }, [])

    return (
        <Container>
            <Img src={logo} />
            <Card>
                <Imginterna src={imageminterna} />

                <Cardright>
                    <Alinatitulo>
                        <p>Prossiga com seu cadastro</p>
                    </Alinatitulo>
                    <div style={{display:"flex",flexDirection:"column",width:"100%",alignItems:"center"}}>
                    <Imgslide src={serverFoto} />
                    <input name="file" type="file" accept="image/*" id="file" onChange={e => { sendPictureToserve(e.target.files) }}></input>
                    <Buttonnew><label style={{cursor: 'pointer'}} for="file" className="button">Adicionar foto</label></Buttonnew>
                    </div>
                    <TextField id="standard-basic" onChange={e => { setName(e.target.value) }} style={{ marginBottom: 10, width: '100%' }} label="Nome completo" />
                    <TextField id="standard-basic" onChange={e => { setEmail(e.target.value) }} style={{ marginBottom: 10, width: '100%' }} label="Email" />
                    <TextField id="standard-basic" onChange={e => { setCidade(e.target.value) }} style={{ marginBottom: 10, width: '100%' }} label="Sua cidade" />
                    {/* <TextField id="standard-basic" style={{ marginBottom: 10, width: '100%' }} label="Categoria" value={selectedCat} /> */}
                   
                    <FormControl>
                    <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    >
    
                        {categorias.map((u) => (


                            <MenuItem onClick={() => {
                                setSelected(u.categoria.name)
                                setIdCat(u.categoria.id)
                            }} value={u.id}>{u.categoria.name}</MenuItem>



                        ))}
                    </Select>
                </FormControl>
                    
                    {/* {categorias.map((item) => (
                        <div onClick={() => {
                            setSelected(item.categoria.name)
                            setIdCat(item.categoria.id)
                        }}>
                            {item.categoria.name}
                        </div>
                    ))} */}

                    {/* <Dividenovo>
                            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%' }} label="Seu estado" />
                            <TextField id="standard-basic" onChange={e => { this.setState({ cidade: e.target.value }) }} style={{ marginBottom: 10, width: '50%', marginLeft: 50 }} label="Sua cidade" />
                        </Dividenovo> */}
                    <Dividenovo>
                        <TextField className="encolhe" type="password" id="standard-basic" onChange={e => { setPassword(e.target.value) }} style={{ marginBottom: 10, }} label="Senha" />
                        <TextField className="encolhe" type="password" id="standard-basic" onChange={e => { setConfirmpassword(e.target.value) }} style={{ marginBottom: 10, }} label="Confirmar Senha" />
                    </Dividenovo>

                    <Ajustaaltura>
                        <FormControlLabel control={<Checkbox name="checkedG" />} label="Aceito os termos de uso do site" />
                        <AlinhaBotao>
                            <Buttonnew onClick={() => cadastrar()}>Cadastrar</Buttonnew >
                        </AlinhaBotao>
                        <div style={{width: '100%', display: 'flex',justifyContent: 'center', marginTop: 20}}>
                        {loader &&
                            <Loader
                                type="Oval"
                                color="#FF522C"
                                height={50}
                                width={50}/>
                        }
                        </div>
                    </Ajustaaltura>

                </Cardright>


            </Card>

        </Container>



    );


    async function cadastrar() {
        setLoader(true)
        if (password == confirmpassword) {
            let data = {}
            data.name = name
            data.email = email
            data.phone = phone
            data.password = password
            data.cidade = cidade
            data.tipo = 2
            data.foto = serverFoto
            const response = await api.post('register', data)

            let vitrine = {}
            vitrine.usuarioid = response.data.id
            const responsevitrine = await api.post('registervitrine', vitrine)

            let categoria = {
                vitrine_id: responsevitrine.data.id,
                arrayvitrinecategorias: [
                    {
                        categoria_id: idCat
                    }
                ]
            }
            console.log(categoria)
            setLoader(false)
            const responsecategoria = await api.post('registervitrinecategoria', categoria)
            window.location.replace("/loginfornecedor")
        }
    }

    async function sendPictureToserve(files) {
        
        const formData = new FormData();
        formData.append(
            'file', files[0]
        );


        const resposta = await api.post('posts', formData)    
        setServerFoto(resposta.data) 
        
    }
}


