import React, { useState, useEffect, useContext, } from "react";
import { Container, Titulo, Card, Box } from "./styles";

const Homeadm = () => {

return(
    <Container>
        <Titulo>Sumario de atualizações</Titulo>
        <Box>
            <Card>
                <h4>Fornecedores</h4>
                <p><span>21</span>/30 dias</p>
            </Card>
            <Card>
                <h4>Usuários</h4>
                <p><span>54</span>/30 dias</p>
            </Card>
            <Card>
                <h4>Categorias</h4>
                <p><span>34</span>/30 dias</p>
            </Card>
            <Card>
                <h4>Eventos</h4>
                <p><span>32</span>/30 dias</p>
            </Card>
        </Box>
    </Container>
);


}

export default Homeadm;



