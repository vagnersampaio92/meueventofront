import React, { useState, useEffect, useContext, } from "react";
import { Container, Titulo, Card, Box, Busca, Boxd } from "./styles";
import TextField from '@material-ui/core/TextField'
import api from '../../services/api'

const Homeadm = () => {
    const [detalhe, Setdetalhe] = useState([{}]);
    const [imagem, Setimagem] = useState('');
    const [name, Setname] = useState('');
    useEffect(() => {
        carrega()
    }, []);
    // http://localhost:3001/api/excluicategorias/:id
    const carrega = async () => {
        const resposta = await api.get('listacategorias')
        console.log(resposta.data)
        Setdetalhe(resposta.data)
    }
    const exclui = async (id) => {
        const resposta = await api.delete('excluicategorias/' + id)
        console.log(resposta.data)
        carrega()
    }
    const add = async () => {
        let data = {}
        data.name=name
        data.foto=imagem
        const resposta = await api.post('registercategoria', data)
  
        carrega()
    }
    async function sendPictureToserve(files) {

        // this.file = this.$refs.file.files[0];

        const formData = new FormData();
        formData.append(
            'file', files[0]
        );

        const resposta = await api.post('posts', formData)

        Setimagem(resposta.data)
    };



    console.log(detalhe)
    return (
        <Container>
            <Titulo>Cadastrar nova categoria</Titulo>
            <Busca>

                <div>
                    <TextField onChange={e => {Setname(e.target.value)}} id="standard-basic" label="Nova categoria" />
                </div>

                <div className="ajusta">


                    <label for="file" className="button">Adicionar foto</label>


                    <button onClick={()=>{add()}} >Salvar</button>
                </div>

            </Busca>
            <Box>


                <>

                    {detalhe.map((u) => (
                        <>
                            <Card>
                                <p>{u.name}</p>

                                <button onClick={e => { exclui(u.id) }}>Excluir</button>
                            </Card>
                        </>
                    ))}

                </>


            </Box>
            <input name="file" type="file" accept="image/*" id="file" onChange={e => { sendPictureToserve(e.target.files) }}></input>
        </Container>
    );


}

export default Homeadm;



