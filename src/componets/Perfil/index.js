import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField'
import { Container, Menu, Divide, Titulo, Buttonnew, Dividenovo, Containerexterno, AlinhaBotao, Menu2, Img } from "./styles";
import api from '../../services/api'

const MainPerfil = () => {
  const [perfilOption, SetperfilOption] = useState(
    1
  );
  const [dados, SetDados] = useState([]);

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

  const carrega = async () => {
    const id = sessionStorage.getItem('fornecedorid')
    const resposta = await api.get('listavitrine/' + id)
    await SetDados(resposta.data)
  }


 
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
            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%' }} label="Seu estado" />
            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%', marginLeft: 50 }} label="Sua cidade" />
          </Dividenovo>
          <Dividenovo>
            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%' }} label="Seu estado" />
            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%', marginLeft: 50 }} label="Sua cidade" />
          </Dividenovo>
          <Dividenovo>
            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%' }} label="Seu estado" />
            <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width: '50%', marginLeft: 50 }} label="Sua cidade" />
          </Dividenovo>

          <p>Descreva seu serviço</p>
          <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10 }} label="Email" />
          <AlinhaBotao>
            <Buttonnew onClick={() => this.buscar()}>Salvar vitrine</Buttonnew >
          </AlinhaBotao>

        </Containerexterno>
      }
    </Container>


  )
};


export default MainPerfil;
