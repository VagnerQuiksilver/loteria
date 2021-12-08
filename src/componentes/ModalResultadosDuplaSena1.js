import React,{useState} from 'react'
import {View,Modal,Text,TouchableOpacity} from 'react-native'
import Resultados from './Resultados'
import FlatMinhasApostas from './FlatMinhasApostas'
import Estilos from '../estilos/Estilos'
import PropagandoAdmob from './PropagandoAdmob'
import { AntDesign } from '@expo/vector-icons';

export default function ModalResultadosDuplaSena1(props){

    const [acumulado,setAcumulado]=useState("#0f0")
    let intervalo=""

    if(props.dezena.acumulou){
        intervalo=setInterval(()=>{
            acumulado==="#844"?setAcumulado("#0f0"):setAcumulado("#844")    
            clearInterval(intervalo) 
        },500)
    }

    return(
        <Modal
            visible={props.modalResult1}
            transparent={false}
            animationType="slide"
        >
            <View style={Estilos.safeArea}>

                <View style={Estilos.conteinerResultado}>
            
                    <View style={{width:"100%",height:55,backgroundColor:props.cor,alignItems:"center",flexDirection:"row"}}>
                    
                        <TouchableOpacity
                            style={Estilos.btnConcursosDupla}
                            onPress={()=>props.setModalResult1(false)}
                        >
                            <AntDesign name="arrowleft" size={24} color="#fff" />
                        </TouchableOpacity>

                        <Text style={[Estilos.txtBtnConcursosDupla,{fontWeight:"bold",fontSize:24,color:"#fff"}]}>Sorteio 01</Text>
                    </View>

                    {props.dezena.acumulou &&                      
                        (<View style={Estilos.conteinerTxtConsursoAcumulado}>
                            <Text style={[Estilos.txtConcursoAcumulado,{color:acumulado}]}>ACUMULOU !!!</Text>                           
                        </View>)
                    }    

                    <Resultados 
                        tipoJogo={props.tipoJogo}
                        dezena={props.dezena}
                        cor={props.cor}
                        RetDez={props.RetDez}
                    />
                </View>

                {
                    props.apostas &&
                    <View style={[Estilos.conteinerFlatResultados,{height:"55%",alignItems:"center"}]}>
                        <FlatMinhasApostas apostas={props.apostas} setApostas={props.setApostas} jogo={props.tipoJogo} cor={props.cor} dezena={props.dezena}/>
                    </View>                                        
                }

                <PropagandoAdmob/>

            </View>
        </Modal>
    )
}