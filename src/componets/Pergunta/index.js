import React, { useState, useEffect, useContext, } from "react";
import { Container, Titulo, Card, Box, Busca, Boxd } from "./styles";
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import api from '../../services/api'

const Homeadm = () => {
    const [detalhe, Setdetalhe] = useState([{}]);
    const [perguntas, Setperguntas] = useState([{}]);
    const [age, setAge] = React.useState('');
    const [novapergunta, setnovapergunta] = React.useState('');

    useEffect(() => {
        carrega()
    }, []);
    const carrega = async () => {
        const resposta = await api.get('listacategorias')
        console.log(resposta.data)
        Setdetalhe(resposta.data)
    }
    const carregapergunta = async (id) => {
        let data = {}
        data.id = id
        const resposta = await api.post('listaperguntapelacategoria', data)
        console.log(resposta.data)
        Setperguntas(resposta.data)
    }
    // "categoria_id":11,
    // "arrayperguntas":[
    //     {
    //      "pergunta":"teste pergunta"
    //    },
    //    {
    //      "pergunta":"teste 2 pergunta"
    //    }
    // ]
  

    const salvapergunta = async () => {
        let data = {}
        data.categoria_id = age
        data.arrayperguntas=[{}]
        data.arrayperguntas[0].pergunta = novapergunta
        console.log(data)
        const resposta = await api.post('registerperguntas', data)
        // console.log(resposta.data)
        // Setperguntas(resposta.data)
        carregapergunta(age)
    }

    const handleChange = (event) => {
    
        carregapergunta(event.target.value)
        setAge(event.target.value);
        
    };
    const exclui = async (id) => {
        const resposta = await api.delete('excluiperguntas/' + id)
        console.log(resposta.data)
        carregapergunta(age)
    }
    return (
        <Container>
            <Titulo>Cadastrar nova categoria</Titulo>
            <Busca>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        {/* <MenuItem value={10}>Buffet</MenuItem>
                        <MenuItem value={20}>Fotográfo</MenuItem>
                        <MenuItem value={30}>Salão</MenuItem> */}


                        {detalhe.map((u) => (


                            <MenuItem value={u.id}>{u.name}</MenuItem>



                        ))}
                    </Select>
                </FormControl>
                <button onChange={handleChange} >Carregar</button>
            </Busca>



            {age == '' ? <><div className="texto"><p>Sua lista de perguntas sera carregada assim que você escolher uma categoria</p></div></> : <>
                <Busca>
                    <TextField id="standard-basic" onChange={e=>setnovapergunta(e.target.value)} className="espaco" label="Pergunta" />
                    <button onClick={e=>{salvapergunta()}}>Cadastrar</button>
                </Busca>


                <Box>
                    {/* <Card>
                        <p>Quais serviços você não disponibiliza?</p>
                        <button onClick={e => { }}>Excluir </button>
                    </Card>
                    <Card>
                        <p>Como costuma comparecer aos eventos?</p>
                        <button>Excluir</button>
                    </Card>
                    <Card>
                        <p>Por onde costuma começar seus serviços?</p>
                        <button>Excluir</button>
                    </Card>
                    <Card>
                        <p>Como faz para casamentos?</p>
                        <button>Excluir</button>
                    </Card>
                    <Card>
                        <p>Tem algum pacote especial?</p>
                        <button>Excluir</button>
                    </Card>
                    <Card>
                        <p>Oferece quais pratos no seu serviço?</p>
                        <button>Excluir</button>
                    </Card> */}

                    {perguntas.map((u) => (
                        <>
                            <Card>
                                <p>{u.pergunta}</p>

                                <button onClick={e => { exclui(u.id) }}>Excluir</button>
                            </Card>
                        </>
                    ))}

                </Box>
            </>}

        </Container>
    );


}

export default Homeadm;

{/* <TextField id="standard-basic" label="Digite aqui nova categoria" />

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

</Box> */}
