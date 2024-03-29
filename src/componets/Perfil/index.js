import React, { useState, useEffect, useContext, } from "react";
import TextField from '@material-ui/core/TextField'
import { Container, Menu, Divide, Titulo, Buttonnew, Buttonnew2, Dividenovo, Containerexterno, AlinhaBotao, Menu2, Img, Imgslide, AlinhaBotaoExcluir, Alinhacont } from "./styles";
import api from '../../services/api'
import Input from '@material-ui/core/Input';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import { red } from "@material-ui/core/colors";
import { uniqueId } from "lodash";
import filesize from "filesize";
import { SideBarContext } from '../../store/index'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Foto from './fotoVideo'
// Carousel-buttonWrapper-62 Carousel-fullHeightHoverWrapper-63 Carousel-next-68





const MainPerfil = () => {
  const [perfilOption, SetperfilOption] = useState(
    1
  );

  const [varVideo, setVarVideo] = useState(false)

  const [imgProfle, setImageProfile] = useState()

  const [loader,setLoader] = useState(false)

  const { subescolha, SetsubEscolha } = useContext(SideBarContext)

  const [dados, SetDados] = useState([]);

  const [responseFotos, setResponseFotos] = useState({})

  const [responseVideos, setResponseVideos] = useState({})

  const [Vitrine, SetvVtrine] = useState({

  });
  const [novaVitrine, SetnovaVtrine] = useState({

  });
  const [cardFile, setCardFile] = useState();

  const [perfil, Setperfil] = useState({
    name: '',
    id: '',
    email: '',
    phone: '',
    foto: ''
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
      SetvVtrine({ ["fotos"]: dados[0].fotos, ["videos"]: dados[0].videos })
    }
  }, [dados]);

  async function sendPictureToserve(files) {

    // this.file = this.$refs.file.files[0];
    console.log(dados[0].id)
    const formData = new FormData();
    formData.append(
      'file', files[0]
    );


    const resposta = await api.post('posts', formData)

    let v = {}
    v.vitrine_id = dados[0].id
    v.arrayfotos = [{}]
    v.arrayfotos[0].fotos = resposta.data
    console.log(v)
    const respostafotos = await api.post('registerfotos', v)
    setResponseFotos(respostafotos)
    carrega()

  };

  async function sendImgprofileToserve(files){
    const formData = new FormData();
    formData.append(
      'file', files[0]
    );


    const resposta = await api.post('posts', formData)
    Setperfil({ ...perfil, ["foto"]: resposta.data })
  }

  async function sendVideosToserve(files) {

    // this.file = this.$refs.file.files[0];
    
    const formData = new FormData();
    formData.append(
      'file', files[0]
    );

    const resposta = await api.post('posts', formData)
    
    let v = {}
    v.vitrine_id = dados[0].id
    v.arrayvideos = [{}]
    v.arrayvideos[0].videos = resposta.data

    const respostavideos = await api.post('registervideos', v)
    setResponseVideos(respostavideos)
    carrega()
  };



  const carrega = async () => {
    setVarVideo(false)
    const id = sessionStorage.getItem('fornecedorid')
    const resposta = await api.get('listavitrine/' + id)
    await SetDados(resposta.data)
    setVarVideo(true)
  }
  const SalvaPerfil = async () => {
    setLoader(true)
    let data = {}
    data.id = perfil.id
    data.dados = {}
    data.dados = perfil
    const resposta = await api.put('editausuario', data)
    console.log(resposta.data)
    setLoader(false)

  }
  const Salvavitrine = async () => {
    setLoader(true)
    let data = {}
    data.id = dados[0].id
    data.dados = {}
    if (novaVitrine.name) {
      data.dados.name = novaVitrine.name
    }
    if (novaVitrine.cidade) {
      data.dados.cidade = novaVitrine.cidade
    }
    if (novaVitrine.valormenor) {
      data.dados.valormenor = novaVitrine.valormenor
    }
    if (novaVitrine.valormaior) {
      data.dados.valormaior = novaVitrine.valormaior
    }
    if (novaVitrine.servico) {
      data.dados.servico = novaVitrine.servico
    }
    if (novaVitrine.locais) {
      data.dados.locais = novaVitrine.locais
    }
    if (novaVitrine.descricao) {
      data.dados.descricao = novaVitrine.descricao
    }


    console.log('teste')
    console.log(data)
    // name cidade valormenor valormaior servico locais descricao
    const resposta = await api.put('editavitrine', data)
    console.log(resposta)
    setLoader(false)
    window.location.reload()

  }


  const deletafoto = async (id) => {

    const resposta = await api.delete('excluifotos/' + id)
    // const remove = Vitrine.fotos.filter(vi => vi.id != id)
    // SetvVtrine({...Vitrine, ["fotos"]:[... remove]} )
  }

  const deletavideo = async (id) => {

    const resposta = await api.delete('excluivideos/' + id)
    // const remove = Vitrine.fotos.filter(vi => vi.id != id)
    // SetvVtrine({...Vitrine, ["fotos"]:[... remove]} )
    window.location.reload();
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
            
            <div style={{width: '100%', display: 'flex',justifyContent: 'center'}}>
              <input name="file" type="file" accept="image/*" id="file" onChange={e => { sendImgprofileToserve(e.target.files) }}></input>
              <label for="file" style={{ padding: 5 }} className="button">Adicionar foto</label>
            </div>

            <TextField id="standard-basic" style={{ marginBottom: 10, }} onChange={e => { Setperfil({ ...perfil, ["name"]: e.target.value }) }} defaultValue={perfil.name} label="Nome completo" />
            <TextField id="standard-basic" onChange={e => { Setperfil({ ...perfil, ["email"]: e.target.value }) }} defaultValue={perfil.email} style={{ marginBottom: 10 }} label="Email" />
            <Dividenovo>
              {/* <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width:'50%' }} label="Seu estado" /> */}
              <TextField className="encolhe" id="standard-basic" onChange={e => { Setperfil({ ...perfil, ["phone"]: e.target.value }) }} defaultValue={perfil.phone} style={{ marginBottom: 10 }} label="Telefone" />
              <TextField className="encolhe" id="standard-basic" onChange={e => { Setperfil({ ...perfil, ["cidade"]: e.target.value }) }} defaultValue={perfil.cidade} style={{ marginBottom: 10 }} label="Sua cidade" />
            </Dividenovo>
            {/* <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10,width:'45%'  }} label="Email" /> */}
            <AlinhaBotao>
              <Buttonnew onClick={() => { SalvaPerfil() }}>Salvar perfil</Buttonnew >
            </AlinhaBotao>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 20 }}>
              {loader &&
                <Loader
                  type="Oval"
                  color="#FF522C"
                  height={50}
                  width={50} />
              }
            </div>
          </Containerexterno>
        }
        </>
      }
      {perfilOption == 2 &&
        <Containerexterno>
          <Dividenovo>

          </Dividenovo>
          {subescolha == 1 &&
            <Foto Vitrine={Vitrine} fun_update={SetperfilOption} />
          }

          {subescolha == 2 &&
            <div style={{ width: '100%' }}>
              {varVideo &&
                <Carousel animation="slide" autoPlay={false} timeout="0">
                  {
                    Vitrine.videos.map((video) => (
                      <>
                        <iframe tyle={{ marginTop: 50 }} src={video.videos} ></iframe  >
                        <AlinhaBotaoExcluir>

                          <Buttonnew2 onClick={() => deletavideo(video.id)}>Excluir video</Buttonnew2>
                        </AlinhaBotaoExcluir>
                        {/* <AlinhaBotaoExcluir>
                      <Buttonnew onClick={() => this.buscar()}>Excluir video</Buttonnew >
                    </AlinhaBotaoExcluir> */}
                      </>
                    ))
                  }
                </Carousel>
              }
              <input name="file" type="file" id="file" onChange={e => { sendVideosToserve(e.target.files) }}></input>
              <label for="file" className="button">Adicionar video</label>
              <Alinhacont>
                {Vitrine.videos.length} videos
       </Alinhacont>

              {/* <Input type="file"
                name="file"
                id="file"
                onChange={() => { sendPictureToserve() }}
                ref="file"  ></Input> */}
            </div>
          }



          <Dividenovo>
            <TextField className="encolhe" id="standard-basic" onChange={e => { SetnovaVtrine({ ...novaVitrine, ["name"]: e.target.value }) }} style={{ marginBottom: 10, width: '50%' }} defaultValue={dados[0].name} label="Nome da vitrine" />
            <TextField className="encolhe" id="standard-basic" onChange={e => { SetnovaVtrine({ ...novaVitrine, ["cidade"]: e.target.value }) }} style={{ marginBottom: 10, width: '50%', }} defaultValue={perfil.cidade} label="Sua cidade" />
          </Dividenovo>
          <Dividenovo>
            <TextField className="encolhe" id="standard-basic" onChange={e => { SetnovaVtrine({ ...novaVitrine, ["valormenor"]: e.target.value }) }} style={{ marginBottom: 10, width: '50%' }} defaultValue={dados[0].valormenor} label="Menor valor" />
            <TextField className="encolhe" id="standard-basic" onChange={e => { SetnovaVtrine({ ...novaVitrine, ["valormaior"]: e.target.value }) }} style={{ marginBottom: 10, width: '50%', }} defaultValue={dados[0].valormaior} label="Maior valor" />
          </Dividenovo>
          <Dividenovo>
            <TextField className="encolhe" id="standard-basic" onChange={e => { SetnovaVtrine({ ...novaVitrine, ["servico"]: e.target.value }) }} style={{ marginBottom: 10, width: '50%' }} defaultValue={dados[0].servico} label="Serviços" />
            <TextField className="encolhe" id="standard-basic" onChange={e => { SetnovaVtrine({ ...novaVitrine, ["locais"]: e.target.value }) }} style={{ marginBottom: 10, width: '50%', }} defaultValue={dados[0].locais} label="Locais" />
          </Dividenovo>

          <p>Descreva seu serviço</p>
          <TextField className="encolhe" multiline id="outlined-basic" variant="outlined" onChange={e => { SetnovaVtrine({ ...novaVitrine, ["descricao"]: e.target.value }) }} style={{ marginBottom: 10 }} defaultValue={dados[0].descricao} label="Descrição" />
          <AlinhaBotao>
            <Buttonnew onClick={() => { Salvavitrine() }}>Salvar vitrine</Buttonnew >
          </AlinhaBotao>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 20 }}>
              {loader &&
                <Loader
                  type="Oval"
                  color="#FF522C"
                  height={50}
                  width={50} />
              }
            </div>

        </Containerexterno>
      }
    </Container>


  )
};


export default MainPerfil;
