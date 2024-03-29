import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField'
import { Container, Menu, Divide, Titulo, Buttonnew, Buttonnew2, Dividenovo, Containerexterno, AlinhaBotao, Menu2, Img, Imgslide, AlinhaBotaoExcluir, Alinhacont } from "../styles";
import api from '../../../services/api'
import Carousel from 'react-material-ui-carousel'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function FotoVideo(props) {

    useEffect(() => {
        carrega()

    }, [])

    const [dados, setDados] = useState([]);
    const [Vitrine, SetvVtrine] = useState(false);
    const [loader,setLoader] = useState(false);


    async function sendPictureToserve(files) {
        setLoader(true)
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
        setLoader(false)
        carrega()

    };

    const carrega = async () => {
        SetvVtrine(false)
        const id = sessionStorage.getItem('fornecedorid')
        const resposta = await api.get('listavitrine/' + id)
        await setDados(resposta.data)
        SetvVtrine(true)
    }

    const deletafoto = async (id) => {
        setLoader(true)
        const resposta = await api.delete('excluifotos/' + id)
        setLoader(false)
        carrega()
        // const remove = Vitrine.fotos.filter(vi => vi.id != id)
        // SetvVtrine({...Vitrine, ["fotos"]:[... remove]} )

    }

    return (
        <div style={{ width: '100%' }}>

            {Vitrine &&
                <Carousel animation="slide" autoPlay={false} timeout="0">
                    {
                        dados[0]?.fotos?.map((foto) => (
                            <>
                                <Imgslide style={{ marginTop: 50 }} src={foto.fotos} ></Imgslide >
                                <AlinhaBotaoExcluir>

                                    <Buttonnew2 onClick={() => deletafoto(foto.id)}>Excluir foto</Buttonnew2>
                                </AlinhaBotaoExcluir>
                            </>
                        ))
                    }
                </Carousel>}
            <input name="file" type="file" accept="image/*" id="file" onChange={e => { sendPictureToserve(e.target.files) }}></input>
            <label for="file" style={{ padding: 5 }} className="button">Adicionar foto</label>

            {loader &&
                <div style={{ margin: 20 }}>
                <Loader
                    type="Oval"
                    color="#FF522C"
                    height={50}
                    width={50} />

            </div>
            }

            <Alinhacont>
                {dados[0]?.fotos?.length < 2
                    ? (<>{dados[0]?.fotos?.length} Foto</>)
                    : (<>{dados[0]?.fotos?.length} Fotos</>)
                }
            </Alinhacont>

        </div>
    )

}
