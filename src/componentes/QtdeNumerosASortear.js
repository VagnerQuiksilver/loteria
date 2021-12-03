import React from 'react'
import {Text,StyleSheet,TouchableOpacity} from 'react-native'

export default function QtdeNumerosASortear(props){

    return(
        <TouchableOpacity 
            style={props.txtqtde!=props.numeroSortear?
            Estilos.conteinerQtde
            :
            [Estilos.conteinerQtde,{backgroundColor:"#00d"}]}
            onPress={()=>{props.qtde(props.txtqtde, props.setNumeroSortear,props.setNumerosSorteados)}}
        >
            <Text style={props.txtqtde!=props.numeroSortear?
                Estilos.txtQtde
                :
                [Estilos.txtQtde,{color:"#fff"}]}
            >{props.txtqtde}</Text>
        </TouchableOpacity>
    )
}
const Estilos=StyleSheet.create({
    conteinerQtde:{
        flexGrow:1,
        flexBasis:0,
        backgroundColor:"#fff",
        marginHorizontal:1,
        borderLeftColor:"#800",
        borderRightColor:"#800",
        borderLeftWidth:1,
        borderRightWidth:1,
        borderRadius:5,
        paddingVertical:8,
    },
    txtQtde:{
        color:"#800",
        fontSize:15,
        textAlign:"center",    
    },
})