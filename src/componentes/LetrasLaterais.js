import React from 'react'
import {Text,StyleSheet} from 'react-native'

export default function LetrasLaterais(props){
    return(
        <Text style={[Estilos.txtLateral,props.angulo=="esq"? {transform:[{rotate:"-90deg"}]} : {transform:[{rotate:"90deg"}]}]}>
            {props.letra}
        </Text>
    )
}   
const Estilos=StyleSheet.create({
    txtLateral:{
        color:"#8df",
        fontSize:25,
        fontWeight:"bold",
        textTransform:"uppercase",
        transform:[{rotate:"90deg"}]
    },
})