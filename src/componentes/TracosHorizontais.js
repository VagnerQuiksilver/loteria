import React from 'react'
import {View,StyleSheet} from 'react-native'

export default function TracosHorizontais(){
    return(
        <View style={estilos.conteinerTracosHor} >
            <View style={estilos.tracos}></View>
            <View style={[estilos.tracos,{marginRight:25}]}></View>
            <View style={estilos.tracos}></View>
            <View style={[estilos.tracos,{marginRight:25}]}></View>
            <View style={[estilos.tracos,{marginRight:25}]}></View>
            <View style={estilos.tracos}></View>
            <View style={estilos.tracos}></View>
        </View>
    )
}

const estilos=StyleSheet.create({
    conteinerTracosHor:{
        width:"100%",
        paddingHorizontal:5,
        paddingVertical:8,
        flexDirection:'row',
        backgroundColor:"#fff"
    },
    tracos:{
        width:35,
        height:15,
        backgroundColor:"#000",
        marginRight:10
    }
})