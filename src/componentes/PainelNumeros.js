import React from 'react'
import {View,StyleSheet} from 'react-native'

export default function tracosH(props){

    return(
        <View style={[estilos.conteinerPainel]}>
            <View style={estilos.conteinerTracosHor} >
                <View style={estilos.tracos}></View>
                <View style={[estilos.tracos,{marginBottom:35}]}></View>
                <View style={estilos.tracos}></View>
                <View style={[estilos.tracos,{marginBottom:35}]}></View>
                <View style={estilos.tracos}></View>
                <View style={[estilos.tracos,{marginBottom:35}]}></View>
                <View style={estilos.tracos}></View>
            </View>

            <View style={[estilos.quadro]}>
                {props.todosOsnumerosDoPainel}
            </View>
        </View>
    )
}

const estilos=StyleSheet.create({
    conteinerPainel:{
        flexDirection:"row",
        overflow:"scroll",
        height:250,
        width:'100%',
    },
    conteinerTracosHor:{
        width:"12%",
        height:"100%",
        flexDirection:'column',
        padding:5,
        backgroundColor:"#fff"
    },
    tracos:{
        width:35,
        height:15,
        backgroundColor:"#000",
        marginBottom:10
    },
    quadro:{
        width:"88%",
        height:'100%',
        backgroundColor:"#feb",
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"space-around",
        flexWrap:"wrap",
        paddingHorizontal:5,
        paddingVertical:10,
     }
})