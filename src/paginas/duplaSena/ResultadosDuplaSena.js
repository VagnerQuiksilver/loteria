import React,{useState,useEffect} from 'react';
import {View,SafeAreaView, TouchableOpacity,Text} from 'react-native';
import {ObterApi, RetDez, getAsync, concursoIguais} from '../../componentes/Funcoes'
import PropagandoAdmob from '../../componentes/PropagandoAdmob'
import ModalSpinner from '../../componentes/ModalSpinner'
import Estilos from '../../estilos/Estilos'
import ModalResultadoDS1 from '../../componentes/ModalResultadosDuplaSena1'
import ModalResultadoDS2 from '../../componentes/ModalResultadosDuplaSena2'
import { Foundation,MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function ResultadosDuplaSena(props){

    const [dezena,setDezena]=useState([])
    const [apostasSelecionadas,setApostasSelecionadas]=useState([])
    const [loading,setLoading]=useState(true)
    const [modalResult1,setModalResult1]=useState(false)
    const [modalResult2,setModalResult2]=useState(false)

    let tipoJogo="duplasena";
    let cor="#844"
  
    useEffect(()=>{
        async function RetornoResultado(tipoJogo){
            const retApostas=await getAsync(tipoJogo)//obter minhas apostas
            const res=await ObterApi(tipoJogo) // obter resultado das apostas (fetch)

            setDezena(res)
            
            concursoIguais(setApostasSelecionadas,retApostas,res.numero_concurso,setLoading)            
        }
        RetornoResultado(tipoJogo)       
    },[])

       
    return(
        <SafeAreaView style={Estilos.safeArea}>
            <ModalSpinner loading={loading} cor={cor} jogo={tipoJogo} texto=" Carregando resultados "/>
            <ModalResultadoDS1 
                dezena={dezena}
                tipoJogo={tipoJogo}
                cor={cor}
                RetDez={RetDez}
                modalResult1={modalResult1}  
                setModalResult1={setModalResult1}  
                apostas={apostasSelecionadas}
                setApostas={setApostasSelecionadas}   
            />

            <ModalResultadoDS2
                dezena={dezena}
                tipoJogo={tipoJogo}
                cor={cor}
                RetDez={RetDez}
                modalResult2={modalResult2}  
                setModalResult2={setModalResult2}  
                apostas={apostasSelecionadas}
                setApostas={setApostasSelecionadas}   
            />

 
            <View style={Estilos.conteinerBtnConcursosDupla}>
                <TouchableOpacity 
                    style={Estilos.btnChamadaApostas}
                    onPress={()=>setModalResult1(true)}
                >
                    <View style={Estilos.conteinerIcons}>
                        <View style={Estilos.icons}>
                            <MaterialCommunityIcons name="clover" size={35} color="#fff" />
                        </View>
                        <View style={Estilos.icons}>
                            <Foundation name="dollar" size={25} color="#844" />
                        </View>
                    </View>
                    <Text style={Estilos.txtBtnConcursosDupla}>Concurso {dezena.numero_concurso} sorteio 1</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={Estilos.btnChamadaApostas}
                    onPress={()=>setModalResult2(true)}
                >
                    <View style={Estilos.conteinerIcons}>
                        <View style={Estilos.icons}>
                            <MaterialCommunityIcons name="clover" size={35} color="#fff" />
                        </View>
                        <View style={Estilos.icons}>
                            <Foundation name="dollar" size={25} color="#844" />
                        </View>
                    </View>
                    <Text style={Estilos.txtBtnConcursosDupla}>Concurso {dezena.numero_concurso} sorteio 2</Text>
                </TouchableOpacity>
            </View>       

            <PropagandoAdmob/>
        </SafeAreaView>
    )
}
