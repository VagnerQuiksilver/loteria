import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

export default function TxtResultados(props){
    return(
        <View style={Estilos.conteinerTextos}>
            <Text style={Estilos.textos}>{props.dezena.premiacao[props.pos].nome}</Text>
            <Text style={Estilos.textos}>{props.dezena.premiacao[props.pos].quantidade_ganhadores}</Text>
            <Text style={Estilos.textos}>{props.dezena.premiacao[props.pos].valor_total}</Text>
        </View>
    )
}
const Estilos=StyleSheet.create({
    conteinerTextos:{
        width:"100%",
        flexDirection:"row", 
        padding:2, 
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#ddd"      
    },
    textos:{
        fontSize:14,
        color:"#333",
        textAlign:"center",
        width:"33%",
        paddingVertical:2,
        fontWeight:"bold",
        backgroundColor:"#ddd" ,
        borderWidth:1,
        borderColor:"#fff",   
        textAlign:"center", 
        width:"33%",   
    },
})