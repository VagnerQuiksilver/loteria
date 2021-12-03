import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'

export default function BotaoApostar(props){
    return(
        <View style={Estilos.conteinerBtnApostar}>
            <TouchableOpacity  
                style={[Estilos.btn,{backgroundColor:props.cor}]} 
                onPress={()=>{
                    props.sortear(props.tipoJogo,props.qtdNumerosASortear,props.setQtdNumerosASortear,props.setNumerosSorteados)
                }}>
                <Text style={Estilos.txtBtn}>Apostar</Text>
            </TouchableOpacity>
        </View>
    )
}
const Estilos=StyleSheet.create({
    conteinerBtnApostar:{
        width:"100%",
        paddingHorizontal:5
    },  
    btn:{
        width:'100%',
        padding:10,
        backgroundColor:"#404",
        justifyContent:"center",  
        borderRadius:5,
    },
    txtBtn:{
        color:"#fff",
        fontSize:20,
        textAlign:'center',
        fontWeight:"bold",
        letterSpacing:1, 
    },

})