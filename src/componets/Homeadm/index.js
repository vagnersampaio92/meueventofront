import React, { useState, useEffect, useContext, } from "react";
import { Container, Titulo, Card, Box } from "./styles";
import api from '../../services/api'
const Homeadm = () => {
    const [Fornecedores, SetFornecedores] = useState('');
    const [Usuarios, SetUsuarios] = useState('');
    const [Categorias, SetCategorias] = useState('');
    const [Eventos, SetEventos] = useState('');
    useEffect(() => {
        carrega()
      }, []);
    
      const carrega = async () => {
        const resposta = await api.get('contaadm')
        SetFornecedores(resposta.data.fornecedor)
        SetUsuarios(resposta.data.usuario)
        SetCategorias(resposta.data.categorias)
        SetEventos(resposta.data.Eventos)
      }
return(
    <Container>
        <Titulo>Sumario de atualizações</Titulo>
        <Box>
            <Card>
                <h4>Fornecedores</h4>
                <p><span>{Fornecedores}</span>/30 dias</p>
            </Card>
            <Card>
                <h4>Usuários</h4>
                <p><span>{Usuarios}</span>/30 dias</p>
            </Card>
            <Card>
                <h4>Categorias</h4>
                <p><span>{Categorias}</span>/30 dias</p>
            </Card>
            <Card>
                <h4>Eventos</h4>
                <p><span>{Eventos}</span>/30 dias</p>
            </Card>
        </Box>
    </Container>
);


}

export default Homeadm;



