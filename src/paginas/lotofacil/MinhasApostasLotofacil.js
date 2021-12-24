import React,{useState,useEffect} from  'react'
import {View,SafeAreaView} from 'react-native'
import { getAsync} from '../../componentes/Funcoes'
import PropagandoAdmob from '../../componentes/PropagandoAdmob'
import Estilos from '../../estilos/Estilos'
import FlatMinhasApostas from '../../componentes/FlatMinhasApostas'
import ModalSpinner from '../../componentes/ModalSpinner'

import { useIsFocused } from '@react-navigation/native';

export default function MinhasApostasLotofacil(){

    const [apostas,setApostas]=useState([])
    const [loading,setLoading]=useState(true)

    const isFocused = useIsFocused();

    let jogo='lotofacil'
    let cor="#626"

    useEffect(()=>{
        let isActive=true;
        let abortCont=new AbortController()

        const chamarGetAsync=async ()=>{
           const result=await getAsync(jogo, isActive)            
           setApostas(result)
            
           setLoading(false)
        }
        
        chamarGetAsync()
        
        return ()=>{
            isActive=false
            abortCont.abort()
        }       
        
    },[isFocused])

    return(
        <SafeAreaView style={Estilos.safeArea}>
            {loading && 
                <ModalSpinner loading={loading} cor={cor} jogo={jogo} texto=" Carregando minhas apostas"/>
            }
            <View style={Estilos.conteinerFlat}>
                <FlatMinhasApostas apostas={apostas} setApostas={setApostas} jogo={jogo} cor={cor}/>
            </View>
                
            <PropagandoAdmob/>           
        </SafeAreaView>
    )
}