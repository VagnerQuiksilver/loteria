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

//import das funções
import {quantidade,percorrerNumeros,sortear,cancelarAposta,salvarAposta} from '../../componentes/Funcoes'

export default function Lotofacil({navigation}){

    const [todosOsnumerosDoPainel,setTodosOsnumerosDoPainel]=useState([])
    const [qtdNumerosASortear,setQtdNumerosASortear]=useState(null)
    const [numerosSorteados,setNumerosSorteados]=useState([])
    const [modalVisivel,setModalVisivel]=useState(false)
    const [loading,setLoading]=useState(true)
    const [abort,setAbort]=useState(false)

    const tipoJogo='lotofacil'
    const cor="#626"

    //UseEffect inicial chama a função q percorre e retorna os números para o painel
    useEffect(()=>{ 
         
            percorrerNumeros(setLoading,setTodosOsnumerosDoPainel,setModalVisivel,numerosSorteados,tipoJogo,abort)
         
    },[])

    //useEffect toda vez qdo alterao valor da state numerosSorteados
    useEffect(()=>{

            percorrerNumeros(setLoading,setTodosOsnumerosDoPainel,setModalVisivel,numerosSorteados,tipoJogo,abort)
        
    },[numerosSorteados])

    return(
        <SafeAreaView style={Estilos.safeArea}>
            <View style={Estilos.tela}>
                <ModalSpinner loading={loading} cor={cor} jogo="lotofácil" texto="Bem Vindo ao simulador de jogos "/>

                <Cabecalho cor={cor} navigation={navigation} texto="lotofácil" setAbort={setAbort} setNumerosSorteados={setNumerosSorteados}/>

                <TracosHor/>

                <PainelNumeros todosOsnumerosDoPainel={todosOsnumerosDoPainel}/>

                <View style={Estilos.qtdeSort}>
                    <View style={Estilos.conteinerTxtAssinaleQtdeNumSort}>
                        <Text style={Estilos.txtAssinaleQtdeNum}>Assinale quantos números você está marcando neste jogo.</Text>
                    </View>

                    <View style={Estilos.conteinerQtdeNumS}>
                        <QtdeSortear txtqtde="15" qtde={quantidade} numeroSortear={qtdNumerosASortear}
                            setNumeroSortear={setQtdNumerosASortear} setNumerosSorteados={setNumerosSorteados}
                        />
                        <QtdeSortear txtqtde="16" qtde={quantidade} numeroSortear={qtdNumerosASortear}
                            setNumeroSortear={setQtdNumerosASortear} setNumerosSorteados={setNumerosSorteados}
                        />
                        <QtdeSortear txtqtde="17" qtde={quantidade} numeroSortear={qtdNumerosASortear} 
                            setNumeroSortear={setQtdNumerosASortear} setNumerosSorteados={setNumerosSorteados}
                        />
                        <QtdeSortear txtqtde="18" qtde={quantidade} numeroSortear={qtdNumerosASortear} 
                            setNumeroSortear={setQtdNumerosASortear} setNumerosSorteados={setNumerosSorteados}
                        />
                        <QtdeSortear txtqtde="19" qtde={quantidade} numeroSortear={qtdNumerosASortear} 
                            setNumeroSortear={setQtdNumerosASortear} setNumerosSorteados={setNumerosSorteados}
                        />
                        <QtdeSortear txtqtde="20" qtde={quantidade} numeroSortear={qtdNumerosASortear} 
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
            />
        </SafeAreaView>
    )
}


