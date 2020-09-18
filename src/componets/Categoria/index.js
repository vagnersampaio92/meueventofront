import React, { useState, useEffect, useContext, } from "react";
import { Container, Titulo, Card, Box, Busca, Boxd } from "./styles";
import TextField from '@material-ui/core/TextField'
import api from '../../services/api'

const Homeadm = () => {
    const [detalhe, Setdetalhe] = useState([{}]);

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
        const resposta = await api.delete('excluicategorias/'+id)
        console.log(resposta.data)
        carrega()
    }
    const add = async (id) => {
        let data={}
        const resposta = await api.delete('excluicategorias',data)
        console.log(resposta.data)
        carrega()
    }
    console.log(detalhe)
    return (
        <Container>
            <Titulo>Cadastrar nova categoria</Titulo>
            <Busca>


                <TextField id="standard-basic" label="Nova categoria" />
                <button >Salvar</button>
            </Busca>
            <Box>
                

                <>
               
                    {detalhe.map((u) => (
                        <>
                            <Card>
                                <p>{u.name}</p>
                                <button onClick={e => {exclui(u.id)}}>Excluir</button>
                            </Card>
                        </>
                    ))}

                </>


            </Box>

        </Container>
    );


}

export default Homeadm;



