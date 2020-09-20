import React, { useState, useContext } from 'react'
import { Container, Img, Line, Sair, Span, Alinha } from './style.js';
import logo from '../../assets/logo.png'
import { SideBarContext } from '../../store/index'
import { useHistory } from "react-router"
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const SideBar = () => {
    const { escolha, hendleMenu } = useContext(SideBarContext)
    const { subescolha, SetsubEscolha, escolhaadm, SetEscolhaadm } = useContext(SideBarContext)
    const { adm } = useContext(SideBarContext)

    const history = useHistory()


    const [sub, Setsub] = useState(
        2
    );
    function sair() {
        sessionStorage.clear();
        history.push("/loginfornecedor")

    }
    function sairadm() {
        sessionStorage.clear();
        history.push("/login")

    }


    return (
        <>
            <Container adm={adm}>
                <Img src={logo} />
                {!adm ?
                    <Alinha><Line onClick={() => hendleMenu(1)}>Meu Perfil<Span>{sub == 2 ? <ExpandMoreIcon onClick={() => Setsub(1)}></ExpandMoreIcon> : <ExpandLessIcon onClick={() => Setsub(2)}></ExpandLessIcon>}</Span></Line>
                        {escolha == 1 && sub == 1 &&
                            <>
                                <Line className={(subescolha == 1) ? "active" : "component"} onClick={() => SetsubEscolha(1)}>Fotos</Line>
                                <Line className={(subescolha == 2) ? "active" : "component"} onClick={() => SetsubEscolha(2)}>Videos</Line>
                            </>
                        }
                        <Line onClick={() => hendleMenu(3)}>Meus Pacotes</Line>
                        <Sair onClick={() => sair()}>Sair</Sair>
                    </Alinha> :
                    <Alinha>
                        <Line className={(escolhaadm == 1) ? "active" : "component"} onClick={() => SetEscolhaadm(1)}>Home</Line>
                        <Line className={(escolhaadm == 2) ? "active" : "component"} onClick={() => SetEscolhaadm(2)}>Usuários</Line>
                        <Line className={(escolhaadm == 3) ? "active" : "component"} onClick={() => SetEscolhaadm(3)}>Categorias</Line>
                        <Line className={(escolhaadm == 4) ? "active" : "component"} onClick={() => SetEscolhaadm(4)}>Questionário</Line>
                        <Line  className={(escolhaadm == 5) ? "active" : "component"} onClick={() => SetEscolhaadm(5)}>Fornecedores</Line>
                        <Sair  onClick={() => sairadm()}>Sair</Sair>
                    </Alinha>

                }

            </Container>

        </>



    );



}

export default SideBar


// {
//     perfilOption == 1 ? <Menu onClick={() => { SetperfilOption(1) }}>Meu perfil</Menu> : <Menu2 onClick={() => { SetperfilOption(1) }}>Meu perfil</Menu2>
//   }
//   {
//     perfilOption == 2 ? <Menu onClick={() => { SetperfilOption(2) }}>Minha vitrine</Menu> : <Menu2 onClick={() => { SetperfilOption(2) }}>Minha vitrine</Menu2>
//   }