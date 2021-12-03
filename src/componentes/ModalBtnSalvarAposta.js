import React from 'react'
import {View,Text,TouchableOpacity,Modal,StyleSheet} from 'react-native'

export default function modal(props){


    
    return(
        <Modal
        visible={props.modalVisivel}
        animationType="slide"
        transparent={true}               
        >
            <View style={Estilos.modal}>
                <View style={Estilos.cxTxtModal}>
                    <Text style={Estilos.txtSalvarAposta}>Deseja salvar esta aposta ?</Text>
                    <View style={Estilos.conteinerBtnsSalvarNaoSalvar}>
                        <TouchableOpacity 
                            style={[Estilos.btnSalvarNaoSalvar,{backgroundColor:"#080"}]}
                            onPress={()=>{props.salvarAposta(props.tipoJogo,props.setNumerosSorteados,props.setModalVisivel,props.numerosSorteados)}}
                        >
                            <Text style={Estilos.txtBtnSalvarNaoSalvar}>Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[Estilos.btnSalvarNaoSalvar,{backgroundColor:"#800"}]}
                            onPress={()=>{props.cancelarAposta(props.setModalVisivel,props.setNumerosSorteados)}}
                        >
                            <Text style={Estilos.txtBtnSalvarNaoSalvar}>Cancelar Aposta</Text>
                        </TouchableOpacity>
                    </View>
                </View>  
            </View>

        </Modal>        
    )
}
const Estilos=StyleSheet.create({
    modal:{
        width:"100%",
        position:"absolute",
        bottom:100,
        paddingHorizontal:5,
    }, 
    cxTxtModal:{
        width:"100%",
        height:150,
        flexDirection:"column",
        alignItems:"center",
    },
    txtSalvarAposta:{
        color:"#444",
        fontSize:23,
        fontWeight:"bold"
    },  
    conteinerBtnsSalvarNaoSalvar:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:25,
    },
    btnSalvarNaoSalvar:{
        width:"49%",
        paddingVertical:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
    },
    txtBtnSalvarNaoSalvar:{
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
        letterSpacing:1,
    },

})