import React, { useState, useEffect, useContext, } from "react";
import { Container, Titulo, Card, Box, Busca, Boxd } from "./styles";
import TextField from '@material-ui/core/TextField'

const Homeadm = () => {
    const [detalhe, Setdetalhe] = useState('');
    console.log(detalhe)
    return (
        <Container>
                    <Titulo>Cadastrar nova categoria</Titulo>
                    <Busca>


                        <TextField id="standard-basic" label="Nova categoria" />
                        <button >Salvar</button>
                    </Busca>
                    <Box>
                        <Card>
                            <p>Fotográfo</p>
                            <button onClick={e => {  }}>Excluir </button>
                        </Card>
                        <Card>
                            <p>Decoração</p>
                            <button>Excluir</button>
                        </Card>
                        <Card>
                            <p>Cerimonialista</p>
                            <button>Excluir</button>
                        </Card>
                        <Card>
                            <p>Animador de eventos</p>
                            <button>Excluir</button>
                        </Card>
                        <Card>
                            <p>Video Maker</p>
                            <button>Excluir</button>
                        </Card>
                        <Card>
                            <p>Buffet</p>
                            <button>Excluir</button>
                        </Card>

                    </Box>
        
        </Container>
    );


}

export default Homeadm;



