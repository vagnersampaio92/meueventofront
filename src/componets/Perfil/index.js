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
import {SideBarContext} from '../../store/index'

// Carousel-buttonWrapper-62 Carousel-fullHeightHoverWrapper-63 Carousel-next-68





const MainPerfil = () => {
  const [perfilOption, SetperfilOption] = useState(
    1
  );
  const {subescolha, SetsubEscolha} = useContext( SideBarContext )
 
  const [dados, SetDados] = useState([]);

  const [Vitrine, SetvVtrine] = useState({

  });
  const [novaVitrine, SetnovaVtrine] = useState({

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

  async function sendPictureToserve(files) {

    // this.file = this.$refs.file.files[0];
    console.log(dados[0].id)
    const formData = new FormData();
    formData.append(
      'file', files[0]
      );

     
    const resposta = await api.post('posts', formData)
  
    let v ={}
    v.vitrine_id=dados[0].id
    v.arrayfotos=[{}]
    v.arrayfotos[0].fotos=resposta.data
    console.log(v)
    const respostafotos = await api.post('registerfotos', v)
    console.log(respostafotos.data)
    carrega()
    window.location.reload();
  };

  const carrega = async () => {
    const id = sessionStorage.getItem('fornecedorid')
    const resposta = await api.get('listavitrine/' + id)
    await SetDados(resposta.data)
  }
  const SalvaPerfil = async () => {
    let data={}
    data.id=perfil.id
    data.dados={}
    data.dados=perfil
    const resposta = await api.put('editausuario', data)
    console.log(resposta)
 
  }
  const deletafoto = async (id) => {
    
    const resposta = await api.delete('excluifotos/'+id)
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

            <TextField id="standard-basic" style={{ marginBottom: 10, }} onChange={e => { Setperfil({ ...perfil, ["name"]: e.target.value }) }} defaultValue={perfil.name} label="Nome completo" />
            <TextField id="standard-basic" onChange={e => { Setperfil({ ...perfil, ["email"]: e.target.value }) }} defaultValue={perfil.email} style={{ marginBottom: 10 }} label="Email" />
            <Dividenovo>
              {/* <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width:'50%' }} label="Seu estado" /> */}
              <TextField id="standard-basic" onChange={e => { Setperfil({ ...perfil, ["phone"]: e.target.value }) }} defaultValue={perfil.phone} style={{ marginBottom: 10, width: '45%' }} label="Telefone" />
              <TextField id="standard-basic" onChange={e => { Setperfil({ ...perfil, ["cidade"]: e.target.value }) }} defaultValue={perfil.cidade} style={{ marginBottom: 10, width: '50%' }} label="Sua cidade" />
            </Dividenovo>
            {/* <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10,width:'45%'  }} label="Email" /> */}
            <AlinhaBotao>
              <Buttonnew onClick={() => {SalvaPerfil()}}>Salvar perfil</Buttonnew >
            </AlinhaBotao>
          </Containerexterno>
        }
        </>
      }
      {perfilOption == 2 &&
        <Containerexterno>
          <Dividenovo>
          
          </Dividenovo>
          {subescolha == 1 &&
            <div style={{ width: '100%' }}>
              <Carousel animation="slide" autoPlay="false" timeout="0">
                {
                  Vitrine.fotos.map((foto) => (
                    <>
                      <Imgslide style={{ marginTop: 50 }} src={foto.fotos} ></Imgslide >
                      <AlinhaBotaoExcluir>
                      <input name="file" type="file" accept="image/*" id="file" onChange={e => { sendPictureToserve(e.target.files) }}></input>
                       <label for="file" className="button">Adicionar foto</label>
                        <Buttonnew2 onClick={() => deletafoto(foto.id)}>Excluir foto</Buttonnew2>
                      </AlinhaBotaoExcluir>
                    </>
                  ))
                }
              </Carousel>
              <Alinhacont>
                {Vitrine.fotos.length} Fotos
        </Alinhacont>

             
              {/* <Input type="file" onChange={e => { Setfile({...file, ["file"]:e.target.value}) }}></Input> */}
            </div>
          }

          {subescolha == 2 &&
            <div style={{ width: '100%' }}>
              <Carousel  animation="slide" autoPlay="false" timeout="0">
                {
                  Vitrine.videos.map((video) => (
                    <>
                      <iframe tyle={{ marginTop: 50 }} src={video.videos} ></iframe  >
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

              {/* <Input type="file"
                name="file"
                id="file"
                onChange={() => { sendPictureToserve() }}
                ref="file"  ></Input> */}
            </div>
          }



          <Dividenovo>
            <TextField id="standard-basic" onChange={e => { SetnovaVtrine({ ...novaVitrine, ["name"]: e.target.value }) }} style={{ marginBottom: 10, width: '50%' }} defaultValue={dados[0].name} label="Nome da vitrine" />
            <TextField id="standard-basic" onChange={e => { SetnovaVtrine({ ...novaVitrine, ["cidade"]: e.target.value }) }} style={{ marginBottom: 10, width: '50%',  marginLeft: 50 }} defaultValue={perfil.cidade}label="Sua cidade" />
          </Dividenovo>
          <Dividenovo>
            <TextField id="standard-basic" onChange={e => { SetnovaVtrine({ ...novaVitrine, ["valormenor"]: e.target.value }) }} style={{ marginBottom: 10, width: '50%' }} defaultValue={dados[0].valormenor} label="Menor valor" />
            <TextField id="standard-basic" onChange={e => { SetnovaVtrine({ ...novaVitrine, ["valormaior"]: e.target.value }) }} style={{ marginBottom: 10, width: '50%', marginLeft: 50 }} defaultValue={dados[0].valormaior} label="Maior valor" />
          </Dividenovo>
          <Dividenovo>
            <TextField id="standard-basic" onChange={e => { SetnovaVtrine({ ...novaVitrine, ["servico"]: e.target.value }) }} style={{ marginBottom: 10, width: '50%' }} defaultValue={dados[0].servico} label="Serviços" />
            <TextField id="standard-basic" onChange={e => { SetnovaVtrine({ ...novaVitrine, ["locais"]: e.target.value }) }}style={{ marginBottom: 10, width: '50%', marginLeft: 50 }} defaultValue={dados[0].locais} label="Locais" />
          </Dividenovo>

          <p>Descreva seu serviço</p>
          <TextField id="outlined-basic" variant="outlined" onChange={e => { SetnovaVtrine({ ...novaVitrine, ["descricao"]: e.target.value }) }} style={{ marginBottom: 10 }} defaultValue={dados[0].descricao} label="Descrição" />
          <AlinhaBotao>
            <Buttonnew onClick={() => this.buscar()}>Salvar vitrine</Buttonnew >
          </AlinhaBotao>

        </Containerexterno>
      }
    </Container>


  )
};


export default MainPerfil;
