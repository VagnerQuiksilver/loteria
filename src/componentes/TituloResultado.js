import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TituloResultado(props){
    return(
        <View style={Estilos.conteinerCabecalho}>
            <View style={Estilos.conteinerTituloJogo}>
                <MaterialCommunityIcons name="clover" size={40} color="#000" />
                <Text style={Estilos.txtTituloJogo}>{props.jogo}</Text>
            </View>

            <View style={Estilos.conteinerTxtMinhasApostasJaPensou}>
                <Text style={Estilos.txtMinhasApostas_japensouAposte}>minhas Apostas</Text>
                <Text style={Estilos.txtMinhasApostas_japensouAposte}>já pensou? aposte!</Text>
            </View>

            <View style={Estilos.conteinerDataHora}>
                <Text style={Estilos.txtHrDt}>{props.item.hr}</Text>
                <Text style={[Estilos.txtHrDt,{marginRight:40}]}>{props.item.dt}</Text>
            </View>
        </View>
    )
}

const Estilos=StyleSheet.create({
    conteinerCabecalho:{
        flexDirection:"column",
        width:"100%",
        height:"30%",
        alignContent:"space-between",
        justifyContent:"space-around",
        paddingVertical:5,
    },
    conteinerTituloJogo:{
        flexDirection:"row",
        justifyContent:"center",
    },
    txtTituloJogo:{
        fontSize:35,
        fontWeight:"bold",
        color:"#000",
        textTransform:"uppercase",
    },
    conteinerTxtMinhasApostasJaPensou:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    txtMinhasApostas_japensouAposte:{
        fontSize:14,
        color:"#000",
        textTransform:"uppercase"
    }, 
    conteinerDataHora:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:5,
    },
    txtHrDt:{
        fontSize:16,
        color:"#000",
        textTransform:"uppercase",
        fontWeight:"bold",
    }
})
