import React, { useState, useEffect, useContext, } from "react";
import { Container, Titulo, Card, Box, Busca, Boxd, Alinha } from "./styles";
import TextField from '@material-ui/core/TextField'
import api from '../../services/api'

const Homeadm = () => {
    const [detalhe, Setdetalhe] = useState({});
    const [emailstate, Setemail] = useState('');
    const [Usuarios, SetUsuarios] = useState([{}]);


    useEffect(() => {
        carrega()
    }, []);

    const carrega = async () => {
        const resposta = await api.get('listafornecedoradm')
        console.log(resposta.data)
        SetUsuarios(resposta.data)
    }
    const deleta = async (id) => {
        // const resposta = await api.delete('excluiusuario/'+id)
        carrega()
        Setdetalhe({ ...detalhe, ["name"]: undefined})
    }
    const plano = async (id) => {
        let data={}
        data.id=id
        data.name='2'
        const resposta = await api.put('editaplano',data)
        carrega()
        Setdetalhe({ ...detalhe, ["name"]: undefined})
    }

    const email = async () => {


        for(let x=0; x<Usuarios.length; x++){
            if(Usuarios[x].email == emailstate){
              
                SetUsuarios([Usuarios[x]])
            }

        }
       
    }
    
    console.log(Usuarios)
    // onChange={e => { Setperfil({ ...perfil, ["name"]: e.target.value }) }}

    return (
        <Container>
            {detalhe.name == undefined ?
                <>
                    <Titulo>Fornecedores cadastrados na plataforma</Titulo>
                    <Busca>
                        {/* <p>Pesquisa usuário por email</p> */}
                        <TextField onChange={e => {Setemail(e.target.value)}} id="standard-basic" label="Pesquisa por email" />
                        <button onClick={email}>Pesquisar</button>
                    </Busca>
                    <Box>
                        <>
                            {Usuarios.map((u) => (
                                <>
                                    <Card>
                                        <p>{u.name}</p>
                                        <button onClick={e => { Setdetalhe(u) }}>Ver mais</button>
                                    </Card>
                                </>
                            ))}

                        </>

                    </Box>
                </> : <Alinha>
                    <Boxd>
                        <p>{detalhe.name}</p>
                        <p>{detalhe.email}</p>
                        <p>{detalhe.cidade}</p>
                        <p>{detalhe.phone}</p>
                         <div>
                             <button onClick={()=>{deleta(detalhe.id)}}>Deletar</button>
                             <button onClick={e => {plano(detalhe.id) }}>Dar plano</button>
                         </div>
                       
                    </Boxd>
                </Alinha>

            }
        </Container>
    );


}

export default Homeadm;




                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        // <div>
                        //     <button onClick={e => { }}>Deletar</button>
                        //     <button onClick={e => { }}>Dar plano</button>
                        // </div>


