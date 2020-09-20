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
                        <P>-Só pode comunicar via portal (solicitar orçamento)</P>
                        <P>-Não tem prioridade na listagem dos fornecedores </P>
                        <div className="alinha">
                            <button>Já possui</button>
                        </div>

                    </Card>
                    <Card>
                        <Cadtitle>Plano PREMIUM</Cadtitle>
                        <P>-Aparece nos primeiros lugares na listagem de fornecedores</P>
                        <P>-Unico que recebe telefone e e-mail</P>
                        <P>-Acessoramento de gestor de negócio para deixar a vitrine mais atrativa</P>
                        <P> SOMENTE 12x de 125 reais.</P>
                        <div className="alinha">
                            <button>Eu quero!</button>
                        </div>
                    </Card>
                </Box>
                <div className='ajusta2'>
                    <p>Gratuitos não ficam na lista de espera para os PREMIUM</p>
                    <p>Ordem de colocação na primeira página é preirizado o plano PREMIUM</p>
                    <p>Vendemos posicionamento e visibilidade.</p>
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
