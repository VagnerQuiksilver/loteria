import React,{useState,useEffect} from 'react';
import {View,SafeAreaView,TouchableOpacity,Text} from 'react-native';
import {ObterApi, RetDez, getAsync, concursoIguais} from '../../componentes/Funcoes'
import FlatMinhasApostas from '../../componentes/FlatMinhasApostas'
import PropagandoAdmob from '../../componentes/PropagandoAdmob'
import ModalSpinner from '../../componentes/ModalSpinner'
import Resultados from '../../componentes/Resultados'
import Estilos from '../../estilos/Estilos'
import { useIsFocused } from '@react-navigation/native';

export default function ResultadosLotofacil(props){

    const [dezena,setDezena]=useState([])
    const [apostasSelecionadas,setApostasSelecionadas]=useState([])
    const [loading,setLoading]=useState(true)
    const [acumulado,setAcumulado]=useState("#0f0")

    let tipoJogo="lotofacil";
    let cor="#626"
    let intervalo=""
    
    const isFocused = useIsFocused();
  
    useEffect(()=>{

        const abortCont=new AbortController()
        const signal=abortCont.signal

        async function RetornoResultado(tipoJogo){

            const retApostas=await getAsync(tipoJogo)//obter minhas apostas
            const res=await ObterApi(tipoJogo,signal) // obter resultado das apostas (fetch)

            setDezena(res)
            
            concursoIguais(setApostasSelecionadas,retApostas,res.numero_concurso,setLoading)            
        }
        if(isFocused){
            RetornoResultado(tipoJogo)
        }else{
            abortCont.abort()
        }              
    },[isFocused])

    if(dezena.acumulou){
        intervalo=setInterval(()=>{
            acumulado==="#626"?setAcumulado("#0f0"):setAcumulado("#626")    
            clearInterval(intervalo) 
        },500)
    }

    return(
        <SafeAreaView style={Estilos.safeArea}>
            <ModalSpinner loading={loading} cor={cor} jogo={tipoJogo} texto=" Carregando resultados "/>
            <View style={Estilos.safeArea}>
                
                <View style={[Estilos.conteinerResultado,props.tipoJogo==="duplasena"&&{height:"27%",borderWidth:1}]}>
                    {dezena.acumulou &&                      
                        (<View style={[Estilos.conteinerTxtConsursoAcumulado,{backgroundColor:cor}]}>
                            <Text style={[Estilos.txtConcursoAcumulado,{color:acumulado}]}>ACUMULOU !!!</Text>                           
                        </View>)
                    }    

                    {dezena!="" &&
                        <Resultados 
                            tipoJogo={tipoJogo}
                            dezena={dezena}
                            cor={cor}
                            RetDez={RetDez}
                        />
                    }
                </View>

                {
                    apostasSelecionadas &&
                    <View style={[Estilos.conteinerFlatResultados,{height:"55%",alignItems:"center"}]}>
                        <FlatMinhasApostas apostas={apostasSelecionadas} setApostas={setApostasSelecionadas} jogo={tipoJogo} cor={cor} dezena={dezena}/>
                    </View>                                        
                }

                <PropagandoAdmob/>
            </View>
        </SafeAreaView>
    )
}
