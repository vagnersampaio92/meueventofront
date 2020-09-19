import React, { useState, useEffect, useContext, } from "react";
import { Container, Titulo, Card, Box, Busca, Boxd } from "./styles";
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const Homeadm = () => {
    const [detalhe, Setdetalhe] = useState('');
    console.log(detalhe)
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
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
                        <MenuItem value={10}>Buffet</MenuItem>
                        <MenuItem value={20}>Fotográfo</MenuItem>
                        <MenuItem value={30}>Salão</MenuItem>
                    </Select>
                </FormControl>
                <button >Carregar</button>
            </Busca>



            {age == '' ? <><div className="texto"><p>Sua lista de perguntas sera carregada assim que você escolher uma categoria</p></div></> : <>
        <Busca>
        <TextField id="standard-basic" className="espaco" label="Pergunta" />
        <button >Cadastrar</button>
        </Busca>
                

                <Box>
                    <Card>
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
                    </Card>

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
