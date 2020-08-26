import React, { useState,}from "react";
import TextField from '@material-ui/core/TextField'
import { Container, Menu, Divide, Titulo, Buttonnew,Dividenovo, Containerexterno, AlinhaBotao, Menu2  } from "./styles";


const MainPerfil = () => {
  const [perfilOption, SetperfilOption] = useState(
    1
     );
     return (
  <Container>
    <Divide>
      {
        perfilOption==1? <Menu onClick={()=>{SetperfilOption(1)}}>Meu perfil</Menu> : <Menu2 onClick={()=>{SetperfilOption(1)}}>Meu perfil</Menu2>
      }
      {
        perfilOption==2? <Menu onClick={()=>{SetperfilOption(2)}}>Minha vitrine</Menu> : <Menu2 onClick={()=>{SetperfilOption(2)}}>Minha vitrine</Menu2>
      }

     
      
    </Divide>
    
      {perfilOption==1&&
        <Containerexterno>
          <Titulo>
      Dados de perfil
    </Titulo>
       <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10,  }} label="Nome completo" />
       <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10  }} label="Email" />
       <Dividenovo>
       {/* <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width:'50%' }} label="Seu estado" /> */}
       <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10,width:'45%'  }} label="Telefone" />
       <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width:'50%' }} label="Sua cidade" />
       </Dividenovo>
       {/* <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10,width:'45%'  }} label="Email" /> */}
       <AlinhaBotao>
       <Buttonnew   onClick={() => this.buscar()}>Salvar perfil</Buttonnew >
       </AlinhaBotao>
       
        </Containerexterno>
      }
      {perfilOption==2&&
        <Containerexterno>
        <Dividenovo>
        <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width:'50%' }} label="Seu estado" />
        <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width:'50%', marginLeft:50 }} label="Sua cidade" />
        </Dividenovo>
        <Dividenovo>
        <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width:'50%' }} label="Seu estado" />
        <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width:'50%', marginLeft:50 }} label="Sua cidade" />
        </Dividenovo>
        <Dividenovo>
        <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width:'50%' }} label="Seu estado" />
        <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10, width:'50%', marginLeft:50 }} label="Sua cidade" />
        </Dividenovo>
     
        <p>Descreva seu serviço</p>
        <TextField id="standard-basic" onChange={e => { this.setState({ email: e.target.value }) }} style={{ marginBottom: 10  }} label="Email" />
        <AlinhaBotao>
        <Buttonnew   onClick={() => this.buscar()}>Salvar vitrine</Buttonnew >
        </AlinhaBotao>
        
         </Containerexterno>
      }
  </Container>
     )
     };

export default MainPerfil;
