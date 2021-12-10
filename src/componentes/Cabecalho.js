import React from 'react'
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

export default function Cabecalho(props){

    function voltarHome(){
           // props.setNumerosSorteados([])
            props.setVerificar(false)
            props.navigation.navigate("Home")
    }

    return(
        <View style={[Estilos.conteinerCabecalho,{backgroundColor:props.cor}]}>
            <TouchableOpacity
                onPress={()=>{voltarHome()}}
                style={Estilos.conteinerSetaVoltar}
            >
                <AntDesign name="arrowleft" size={24} color="#fff" />
            </TouchableOpacity>

            <View style={Estilos.conteinerTxt}>
                <MaterialCommunityIcons name="clover" size={60} color="#fff" />                
                <Text style={Estilos.texto}>{props.texto}</Text>
            </View>

            {props.texto==="Resultados"?
                <View/>
                :
                <TouchableOpacity
                    onPress={()=>{props.navigation.openDrawer()}}
                    style={Estilos.conteinerSetaVoltar}
                >
                    <Entypo name="menu" size={35} color="#fff" />
                </TouchableOpacity>  
            }      
        </View>
    )
}
const Estilos=StyleSheet.create({
    conteinerCabecalho:{
        width:"100%",
        height:120,
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        paddingHorizontal:10,
    },
    conteinerSetaVoltar:{
        width:"10%",
        alignItems:"center",
        justifyContent:"center",
    },
    conteinerTxt:{
        flexDirection:"row",
        width:"80%",
        justifyContent:"center",
        alignItems:"center",
    },
    texto:{
        color:"#fff",
        fontSize:40,
        fontWeight:"bold",
        marginLeft:5,
    }
})