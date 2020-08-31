import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField'
import { Container, Menu, Divide, Titulo, Buttonnew, Dividenovo, Containerexterno, AlinhaBotao, Menu2, Img, Imgslide, AlinhaBotaoExcluir, Alinhacont } from "./styles";
import api from '../../services/api'
import Input from '@material-ui/core/Input';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import { red } from "@material-ui/core/colors";


// Carousel-buttonWrapper-62 Carousel-fullHeightHoverWrapper-63 Carousel-next-68





const MainPerfil = () => {
  const [perfilOption, SetperfilOption] = useState(
    1
  );
  const [vitrineOption, SetvitrineOption] = useState(
    1
  );
  const [dados, SetDados] = useState([]);

  const [Vitrine, SetvVtrine] = useState({

  });
  const [cardFile, setCardFile] = useState();

  const [perfil, Setperfil] = useState({
    name: '',
    id: '',
    email: '',
    phone: ''
  }
  );

  useEffect(() => {
    carrega()
  }, []);

  useEffect(() => {
    if (dados.length > 0) {
      Setperfil(dados[0].usuario)

    }
  }, [dados]);
  useEffect(() => {
    if (dados.length > 0) {
      SetvVtrine({ ...Vitrine, ["fotos"]: dados[0].fotos, ["videos"]: dados[0].videos })
     
    }
  }, [dados]);

  const carrega = async () => {
    const id = sessionStorage.getItem('fornecedorid')
    const resposta = await api.get('listavitrine/' + id)
    await SetDados(resposta.data)
  }

  const handleUploadFile = (e: any) => {
    setCardFile(e.target.files[0]);
  }

  console.log(Vitrine)
  return (

    <Container>
      <Divide>

        {
          perfilOption == 1 ? <Menu onClick={() => { SetperfilOption(1) }}>Meu perfil</Menu> : <Menu2 onClick={() => { SetperfilOption(1) }}>Meu perfil</Menu2>
        }
        {
          perfilOption == 2 ? <Menu onClick={() => { SetperfilOption(2) }}>Minha vitrine</Menu> : <Menu2 onClick={() => { SetperfilOption(2) }}>Minha vitrine</Menu2>
        }



      </Divide>

      {perfilOption == 1 &&
        <>{perfil.id != '' &&

          <Containerexterno>

            <Titulo>
              Dados de perfil
       </Titulo>
            {/* defaultValue={dados[0].usuario.name} */}
            <Titulo>
              <Img src={perfil.foto}></Img>
            </Titulo>

            <TextField id="standard-basic" style={{ marginBottom: 10, }} onChange={e => { Setperfil({ ...perfil, ["name"]: e.target.value }) }} defaultValue={perfil.name} label="Nome completo" />
            <TextField id="standard-basic" onChange={e => { Setperfil({ ...perfil, ["email"]: e.target.value }) }} defaultValue={perfil.email} style={{ marginBottom: 10 }} label="Email" />
            <Dividenovo>
              {/* <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width:'50%' }} label="Seu estado" /> */}
              <TextField id="standard-basic" onChange={e => { Setperfil({ ...perfil, ["phone"]: e.target.value }) }} defaultValue={perfil.phone} style={{ marginBottom: 10, width: '45%' }} label="Telefone" />
              <TextField id="standard-basic" onChange={e => { Setperfil({ ...perfil, ["cidade"]: e.target.value }) }} defaultValue={perfil.cidade} style={{ marginBottom: 10, width: '50%' }} label="Sua cidade" />
            </Dividenovo>
            {/* <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10,width:'45%'  }} label="Email" /> */}
            <AlinhaBotao>
              <Buttonnew onClick={() => this.buscar()}>Salvar perfil</Buttonnew >
            </AlinhaBotao>
          </Containerexterno>
        }
        </>
      }
      {perfilOption == 2 &&
        <Containerexterno>
          <Dividenovo>
            {
              vitrineOption == 1 ? <Menu onClick={() => { SetvitrineOption(1) }}>Fotos</Menu> : <Menu2 onClick={() => { SetvitrineOption(1) }}>Fotos</Menu2>
            }
            {
              vitrineOption == 2 ? <Menu onClick={() => { SetvitrineOption(2) }}>Videos</Menu> : <Menu2 onClick={() => { SetvitrineOption(2) }}>Videos</Menu2>
            }
          </Dividenovo>
          {vitrineOption == 1 &&
            <div style={{ width: '100%' }}>
              <Carousel >
                {
                  Vitrine.fotos.map((foto) => (
                    <>
                      <Imgslide style={{ marginTop: 50 }} src={foto.fotos} onChange={handleUploadFile}></Imgslide >
                      <AlinhaBotaoExcluir>
                        <Buttonnew onClick={() => this.buscar()}>Excluir foto</Buttonnew >
                      </AlinhaBotaoExcluir>
                    </>
                  ))
                }
              </Carousel>
              <Alinhacont>
                {Vitrine.fotos.length} Fotos
        </Alinhacont>

              <Input type="file"  ></Input>
            </div>
          }
          {vitrineOption == 2 &&
            <div style={{ width: '100%' }}>
              <Carousel >
                {
                  Vitrine.videos.map((video) => (
                    <>
                      <iframe  tyle={{ marginTop: 50 }} src={video.videos} onChange={handleUploadFile}></iframe  >
                      <AlinhaBotaoExcluir>
                        <Buttonnew onClick={() => this.buscar()}>Excluir video</Buttonnew >
                      </AlinhaBotaoExcluir>
                    </>
                  ))
                }
              </Carousel>
              <Alinhacont>
                {Vitrine.videos.length} videos
       </Alinhacont>

              <Input type="file"  ></Input>
            </div>
          }



          <Dividenovo>
            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%' }} label="Nome da vitrine" />
            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%', marginLeft: 50 }} label="Sua cidade" />
          </Dividenovo>
          <Dividenovo>
            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%' }} label="Menor valor" />
            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%', marginLeft: 50 }} label="Maior valor" />
          </Dividenovo>
          <Dividenovo>
            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%' }} label="Serviços" />
            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%', marginLeft: 50 }} label="Locais" />
          </Dividenovo>

          <p>Descreva seu serviço</p>
          <TextField id="outlined-basic" variant="outlined" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10 }} label="Descrição" />
          <AlinhaBotao>
            <Buttonnew onClick={() => this.buscar()}>Salvar vitrine</Buttonnew >
          </AlinhaBotao>

        </Containerexterno>
      }
    </Container>


  )
};


export default MainPerfil;
