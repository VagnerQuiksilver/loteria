import React,{useState,useEffect} from  'react'
import {View,SafeAreaView} from 'react-native'
import { getAsync} from '../../componentes/Funcoes'
import PropagandoAdmob from '../../componentes/PropagandoAdmob'
import Estilos from '../../estilos/Estilos'
import FlatMinhasApostas from '../../componentes/FlatMinhasApostas'
import ModalSpinner from '../../componentes/ModalSpinner'


export default function MinhasApostasQuina(){

    const [apostas,setApostas]=useState([])
    const [loading,setLoading]=useState(true)

    let jogo='duplasena'
    let cor="#844"

    useEffect(()=>{
        let ativo=true;
        const chamarGetAsync=async ()=>{
           const result=await getAsync(jogo)
            if(ativo){
                setApostas(result)
            }
           setTimeout(()=>{setLoading(false)},500)
        }
        if(ativo){
            chamarGetAsync()
        }
        return ()=>{
            ativo=false
        }       
        
    },[])

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


