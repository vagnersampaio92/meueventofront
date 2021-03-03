import React, { useState, useEffect, useContext, } from "react";
import { Container, Titulo, Box, Card, Card1, Cadtitle, P } from "./styles";
import Carousel from 'react-material-ui-carousel'


const MainPerfil = () => {

    return (

        <Container>
            <Titulo>
                Meus pacotes
     </Titulo>
            <div  className='ajusta1'>
                <Box>
                    <Card>
                        <Cadtitle>Plano FREE</Cadtitle>
                        {/* <P>-Só pode comunicar via portal (solicitar orçamento)</P>
                        <P>-Não tem prioridade na listagem dos fornecedores </P> */}
                        {/* <div className="alinha">
                            <button>Já possui</button>
                        </div> */}

                    </Card>
                    <Card><Cadtitle>Plano BÁSICO</Cadtitle></Card>
                    <Card>
                        <Cadtitle>Plano PREMIUM</Cadtitle>
                        {/* <P>-Aparece nos primeiros lugares na listagem de fornecedores</P>
                        <P>-Unico que recebe telefone e e-mail</P>
                        <P>-Acessoramento de gestor de negócio para deixar a vitrine mais atrativa</P>
                        <P> SOMENTE 12x de 125 reais.</P> */}
                        {/* <div className="alinha">
                            <button>Eu quero!</button>
                        </div> */}
                    </Card>
                </Box>
                <div className='ajusta2'>
                    <div style={{width: '800px',height:'200px'}}>
                        <div style={{display:"flex",flexDirection:"row",borderBottom: "1px solid black"}}>
                            <p>Preco</p>
                            <p style={{marginLeft:'100px'}}>R$ 00,00</p>
                            <p style={{marginLeft:'200px'}}>R$ 00,00</p>
                            <p style={{marginLeft:'230px'}}>R$ 00,00</p>
                        </div>
                        <div style={{display:"flex",flexDirection:"row",borderBottom: "1px solid black"}}>
                            <p>Comunicação</p>
                            <p style={{marginLeft:'51px'}}>R$ 00,00</p>
                            <p style={{marginLeft:'201px'}}>R$ 00,00</p>
                            <p style={{marginLeft:'230px'}}>R$ 00,00</p>
                        </div>
                        <div style={{display:"flex",flexDirection:"row",borderBottom: "1px solid black"}}>
                            <p>BREVE</p>
                            <p style={{marginLeft:'97px'}}>R$ 00,00</p>
                            <p style={{marginLeft:'200px'}}>R$ 00,00</p>
                            <p style={{marginLeft:'230px'}}>R$ 00,00</p>
                        </div>
                    </div>
                    
                </div>
            </div>


            <Carousel activeIndicatorProps="false" className='ajusta' animation="slide" indicators={false} autoPlay={false} timeout="0">
                <Card>
                    <Cadtitle>Plano FREE</Cadtitle>
                    <P>-Só pode comunicar via portal (solicitar orçamento)</P>
                    <P>-Não tem prioridade na listagem dos fornecedores </P>
                    <div>
                        <button>Já possui</button>
                    </div>

                </Card>
                <Card>
                    <Cadtitle>Plano PREMIUM</Cadtitle>
                    <P>-Aparece nos primeiros lugares na listagem de fornecedores</P>
                    <P>-Unico que recebe telefone e e-mail</P>
                    <P>-Acessoramento de gestor de negócio para deixar a vitrine mais atrativa</P>
                    <P> SOMENTE 12x de 125 reais.</P>
                    <div>
                        <button>Eu quero!</button>
                    </div>
                </Card>
            </Carousel>


        </Container>


    )
};


export default MainPerfil;
