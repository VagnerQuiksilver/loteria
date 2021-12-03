import React from 'react'
import {Modal,View,Text,ActivityIndicator,StyleSheet} from 'react-native'

export default function ModalSpinner(props){
    return(
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.loading}
        >
            <View style={[Estilos.telaModalSpiner,{backgroundColor:props.cor}]}>
                <Text style={Estilos.txtModalSpinner}>
                        {props.texto+" "+props.jogo}
                </Text>
                <ActivityIndicator size="large" color="#fff"/>
                <Text style={Estilos.txtModalSpinner}>Carregando!</Text>
            </View>

        </Modal>  
    )
}
const Estilos=StyleSheet.create({
    telaModalSpiner:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:20
    },
    txtModalSpinner:{
        color:"#fff",
        fontSize:20,
        marginTop:10,
        textAlign:'center',
        marginBottom:10
    }

})

