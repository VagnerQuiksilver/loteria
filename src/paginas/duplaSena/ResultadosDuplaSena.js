import React,{useState,useEffect} from 'react';
import {View,SafeAreaView,Text,ScrollView,Dimensions} from 'react-native';
import {ObterApi, RetDez, RetDez2, getAsync, concursoIguais} from '../../componentes/Funcoes'
import FlatMinhasApostas from '../../componentes/FlatMinhasApostas'
import PropagandoAdmob from '../../componentes/PropagandoAdmob'
import ModalSpinner from '../../componentes/ModalSpinner'
import Resultados from '../../componentes/Resultados'
import Estilos from '../../estilos/Estilos'
import { useIsFocused } from '@react-navigation/native';

export default function ResultadosDuplaSena(props){

    const [dezena,setDezena]=useState([])
    const [apostasSelecionadas,setApostasSelecionadas]=useState([])
    const [loading,setLoading]=useState(true)
    const [acumulado,setAcumulado]=useState("#0f0")

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    let tipoJogo="duplasena";
    let cor="#844"
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
            acumulado==="#844"?setAcumulado("#0f0"):setAcumulado("#844")    
            clearInterval(intervalo) 
        },500)
    }
       
    return(
        <SafeAreaView style={Estilos.safeArea}>
            <ModalSpinner loading={loading} cor={cor} jogo={tipoJogo} texto=" Carregando resultados "/>
            <ScrollView
                 style={Estilos.conteinerScroll}
                 pagingEnabled={true}
             >

            <View style={{width:windowWidth,height:windowHeight-60}}>
                
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

            <View style={{width:windowWidth,height:windowHeight-50}}>
                
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
                            RetDez2={RetDez2}
                        />
                    }
                </View>
                {
                    apostasSelecionadas &&
                    <View style={[Estilos.conteinerFlatResultados,{height:"55%",alignItems:"center"}]}>
                        <FlatMinhasApostas apostas={apostasSelecionadas} setApostas={setApostasSelecionadas} jogo={tipoJogo} cor={cor} dezena={dezena} sort2="sort2"/>
                    </View>                                        
                }
                <PropagandoAdmob/>
            </View>
          
            </ScrollView>
            
        </SafeAreaView>
    )
}
