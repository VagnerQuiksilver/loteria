import React,{useState,useEffect} from 'react'
import {View,Text,SafeAreaView} from 'react-native'

import Estilos from '../../estilos/Estilos'
import ModalSpinner from '../../componentes/ModalSpinner'
import Cabecalho from '../../componentes/Cabecalho'
import TracosHor from '../../componentes/TracosHorizontais'
import PainelNumeros from '../../componentes/PainelNumeros'
import QtdeSortear from '../../componentes/QtdeNumerosASortear'
import BotaoApostar from '../../componentes/BotaoApostar'
import PropagandoAdmob from '../../componentes/PropagandoAdmob'
import ModalBtnApostar from '../../componentes/ModalBtnSalvarAposta'
import { useIsFocused } from '@react-navigation/native';

//import das funções
import {quantidade,percorrerNumeros,sortear,cancelarAposta,salvarAposta} from '../../componentes/Funcoes'

export default function DuplaSena({navigation}){

    const [todosOsnumerosDoPainel,setTodosOsnumerosDoPainel]=useState([])
    const [qtdNumerosASortear,setQtdNumerosASortear]=useState(null)
    const [numerosSorteados,setNumerosSorteados]=useState([])   
    const [modalVisivel,setModalVisivel]=useState(false)
    const [loading,setLoading]=useState(true)
    const [verificar,setVerificar]=useState(false)

    const tipoJogo='duplasena'
    const cor="#844"

    const isFocused = useIsFocused();

    //UseEffect inicial chama a função q percorre e retorna os números para o painel
    useEffect(()=>{ 
        if(isFocused){
            percorrerNumeros(setLoading,setTodosOsnumerosDoPainel,setModalVisivel,numerosSorteados,tipoJogo,setVerificar)
        }       
    },[])

    //useEffect toda vez qdo alterao valor da state numerosSorteados
    useEffect(()=>{
        if(verificar && isFocused){
            percorrerNumeros(setLoading,setTodosOsnumerosDoPainel,setModalVisivel,numerosSorteados,tipoJogo,setVerificar)
        }          
    },[numerosSorteados])
  

    return(
        <SafeAreaView style={Estilos.safeArea}>
            <View style={Estilos.tela}>
                <ModalSpinner loading={loading} cor={cor} jogo="dupla-sena" texto="Bem Vindo ao simulador de jogos "/>
    
                <Cabecalho cor={cor} navigation={navigation} texto="dupla sena" setNumerosSorteados={setNumerosSorteados} setVerificar={setVerificar}/>

                <TracosHor/>

                <PainelNumeros todosOsnumerosDoPainel={todosOsnumerosDoPainel}/>

                <View style={Estilos.qtdeSort}>
                    <View style={Estilos.conteinerTxtAssinaleQtdeNumSort}>
                        <Text style={Estilos.txtAssinaleQtdeNum}>Assinale quantos números você está marcando neste jogo.</Text>
                    </View>

                    <View style={Estilos.conteinerQtdeNumS}>
                        <QtdeSortear txtqtde="06" qtde={quantidade} numeroSortear={qtdNumerosASortear}
                            setNumeroSortear={setQtdNumerosASortear} setNumerosSorteados={setNumerosSorteados}
                        />
                        <QtdeSortear txtqtde="07" qtde={quantidade} numeroSortear={qtdNumerosASortear}
                            setNumeroSortear={setQtdNumerosASortear} setNumerosSorteados={setNumerosSorteados}
                        />
                        <QtdeSortear txtqtde="08" qtde={quantidade} numeroSortear={qtdNumerosASortear} 
                            setNumeroSortear={setQtdNumerosASortear} setNumerosSorteados={setNumerosSorteados}
                        />
                        <QtdeSortear txtqtde="09" qtde={quantidade} numeroSortear={qtdNumerosASortear} 
                            setNumeroSortear={setQtdNumerosASortear} setNumerosSorteados={setNumerosSorteados}
                        />
                        <QtdeSortear txtqtde="10" qtde={quantidade} numeroSortear={qtdNumerosASortear} 
                            setNumeroSortear={setQtdNumerosASortear} setNumerosSorteados={setNumerosSorteados}
                        />
                        <QtdeSortear txtqtde="11" qtde={quantidade} numeroSortear={qtdNumerosASortear} 
                            setNumeroSortear={setQtdNumerosASortear} setNumerosSorteados={setNumerosSorteados}
                        />
                        <QtdeSortear txtqtde="12" qtde={quantidade} numeroSortear={qtdNumerosASortear} 
                            setNumeroSortear={setQtdNumerosASortear} setNumerosSorteados={setNumerosSorteados}
                        />
                        <QtdeSortear txtqtde="13" qtde={quantidade} numeroSortear={qtdNumerosASortear} 
                            setNumeroSortear={setQtdNumerosASortear} setNumerosSorteados={setNumerosSorteados}
                        />
                        <QtdeSortear txtqtde="14" qtde={quantidade} numeroSortear={qtdNumerosASortear} 
                            setNumeroSortear={setQtdNumerosASortear} setNumerosSorteados={setNumerosSorteados}
                        />
                        <QtdeSortear txtqtde="15" qtde={quantidade} numeroSortear={qtdNumerosASortear} 
                            setNumeroSortear={setQtdNumerosASortear} setNumerosSorteados={setNumerosSorteados}
                        />
                    </View>
                </View>
            
                <BotaoApostar cor={cor} 
                    sortear={sortear}
                    qtdNumerosASortear={qtdNumerosASortear} 
                    setQtdNumerosASortear={setQtdNumerosASortear}
                    setNumerosSorteados={setNumerosSorteados}
                    tipoJogo={tipoJogo} 
                    setVerificar={setVerificar}           
                />

            </View>
            
                <PropagandoAdmob/>
            
          
            <ModalBtnApostar 
                modalVisivel={modalVisivel}
                setModalVisivel={setModalVisivel}
                cancelarAposta={cancelarAposta}
                setNumerosSorteados={setNumerosSorteados}  
                salvarAposta={salvarAposta}
                numerosSorteados={numerosSorteados}
                tipoJogo={tipoJogo}
                setVerificar={setVerificar}
            />

        </SafeAreaView>
    )
}

