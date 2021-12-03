import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

import CodBarras from './CodBarras'

export default function RodapeResultado(props){
    return(
        <View style={Estilos.conteinerRodape}>
            <View style={Estilos.txtConcursoData}>
                <Text style={Estilos.txtConc}>Conc: {props.item.conc}</Text>
                <Text style={[Estilos.txtConc,{marginRight:10}]}>{props.item.dt}</Text>
            </View>
            
            <Text style={Estilos.txt}>confira suas apostas em resultados</Text>
            <Text style={Estilos.txt}>validade do prêmio: 90 dias</Text>
            
            <CodBarras/>
        </View>
    )
}

const Estilos=StyleSheet.create({
    conteinerRodape:{
        width:"100%",
        height:"35%",
        flexDirection:"column",
        alignItems:"center",
    },
    txtConcursoData:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    txtConc:{
        fontSize:16,
        color:"#000",
        textTransform:"uppercase",
        fontWeight:"bold",
    },
    txt:{
        fontSize:14,
        color:"#000",
        textTransform:"uppercase",
    }
})