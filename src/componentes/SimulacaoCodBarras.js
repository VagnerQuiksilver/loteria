import React from 'react'
import {View,StyleSheet} from 'react-native'

export default function SimulacaoCodBarras(){
    return(
        <View style={Estilos.conteinerCodBarras}>
            <View style={Estilos.barras}></View>
            <View style={Estilos.barras}></View>
            <View style={[Estilos.barras,{width:4}]}></View>
            <View style={Estilos.barras}></View>
            <View style={Estilos.barras}></View>
            <View style={[Estilos.barras,{width:4}]}></View>
            <View style={Estilos.barras}></View>
            <View style={Estilos.barras}></View>
            <View style={Estilos.barras}></View>
            <View style={[Estilos.barras,{width:4}]}></View>
            <View style={Estilos.barras}></View>
            <View style={Estilos.barras}></View>
            <View style={[Estilos.barras,{width:4}]}></View>
            <View style={Estilos.barras}></View>
            <View style={[Estilos.barras,{width:4}]}></View>
            <View style={Estilos.barras}></View>
            <View style={[Estilos.barras,{width:4}]}></View>
            <View style={Estilos.barras}></View>      
            <View style={Estilos.barras}></View>
            <View style={Estilos.barras}></View>
            <View style={[Estilos.barras,{width:4}]}></View>
            <View style={Estilos.barras}></View>
            <View style={Estilos.barras}></View>
            <View style={Estilos.barras}></View>
            <View style={[Estilos.barras,{width:4}]}></View>
            <View style={Estilos.barras}></View>
            <View style={Estilos.barras}></View>
            <View style={[Estilos.barras,{width:4}]}></View>
            <View style={Estilos.barras}></View>
            <View style={[Estilos.barras,{width:4}]}></View>
            <View style={Estilos.barras}></View>
            <View style={[Estilos.barras,{width:4}]}></View>
            <View style={Estilos.barras}></View>      
            <View style={Estilos.barras}></View>
            <View style={[Estilos.barras,{width:4}]}></View>
            <View style={Estilos.barras}></View>
            <View style={[Estilos.barras,{width:4}]}></View>
            <View style={Estilos.barras}></View>  
            <View style={Estilos.barras}></View>
            <View style={[Estilos.barras,{width:4}]}></View>
            <View style={Estilos.barras}></View>
            <View style={[Estilos.barras,{width:4}]}></View>
            <View style={Estilos.barras}></View>  
            <View style={Estilos.barras}></View>
            <View style={[Estilos.barras,{width:4}]}></View>
            <View style={Estilos.barras}></View> 
        </View>
    )
}
const Estilos=StyleSheet.create({
    conteinerCodBarras:{
        width:"90%",
        height:"70%",
        flexDirection:"row",
        overflow:"hidden"
    },
    barras:{
        width:3,
        backgroundColor:"#000",
        height:"100%",
        marginLeft:3,
    }
})