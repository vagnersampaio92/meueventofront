import React, { useState, useEffect, useContext, } from "react";
import { Container, Titulo, Card, Box, Busca, Boxd, Alinha } from "./styles";
import TextField from '@material-ui/core/TextField'

const Homeadm = () => {
    const [detalhe, Setdetalhe] = useState('');
    console.log(detalhe)
    return (
        <Container>
            {detalhe == '' ?
                <>
                    <Titulo>Fornecedores cadastrados na plataforma</Titulo>
                    <Busca>
                        {/* <p>Pesquisa usuário por email</p> */}

                        <TextField id="standard-basic" label="Pesquisa por email" />
                        <button >Pesquisar</button>
                    </Busca>
                    <Box>
                        <Card>
                            <p>João Paulo</p>
                            <button onClick={e => { Setdetalhe('DSD') }}>Ver mais</button>
                        </Card>
                        <Card>
                            <p>João Paulo</p>
                            <button>Ver mais</button>
                        </Card>
                        <Card>
                            <p>João Paulo</p>
                            <button>Ver mais</button>
                        </Card>
                        <Card>
                            <p>João Paulo</p>
                            <button>Ver mais</button>
                        </Card>
                        <Card>
                            <p>João Paulo</p>
                            <button>Ver mais</button>
                        </Card>
                        <Card>
                            <p>João Paulo</p>
                            <button>Ver mais</button>
                        </Card>


                    </Box>
                </> : <Alinha>
                    <Boxd>
                        <p>João Paulo</p>
                        <p>gbrito.one@gmail.com</p>
                        <p>Pelotas</p>
                        <p>(53) 9 8100-8667</p>
                        <div>
                            <button onClick={e => { }}>Deletar</button>
                            <button onClick={e => { }}>Dar plano</button>
                        </div>

                    </Boxd>
                </Alinha>

            }
        </Container>
    );


}

export default Homeadm;



