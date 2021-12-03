import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    //Estilos pagina Home
    safeArea:{
        flex:1,
    },
    conteinerHome:{
        width:"100%",
        height:"100%",
    }, 
    conteinerAdmob:{
        width:"100%",
        height:"8%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"flex-end",
    },
    conteinerIcon:{
        width:"100%",
        paddingHorizontal:20,
        flexDirection:"row",
        alignItems:'center',
        marginVertical:15,
    },
    fonteIcon:{
        color:"#000",
        fontSize:25,
        marginHorizontal:10,
    },

    //Arquivos(DuplaSena, Lotofacil, MegaSena, Quina)
    tela:{
        height:"92%",
        marginTop:0,
    }, 
    qtdeSort:{
        width:"100%",
        flexDirection:"column",
        backgroundColor:"#fff",
        marginBottom:20,
    },
    conteinerTxtAssinaleQtdeNumSort:{
        width:"100%",
        paddingHorizontal:10,
        paddingTop:20,
        backgroundColor:"#fff"
    },
    txtAssinaleQtdeNum:{
        color:"#800",
        fontSize:13
    },
    conteinerQtdeNumS:{
        width:"100%",
        flexDirection:"row",
        backgroundColor:"#feb",
        paddingVertical:10,        
    },

    //Arquivo funções(função percorrerNumeros)
    numerosLotofacil:{
        width:"12%",
        height:"12%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        borderLeftColor:"#f00",
        borderRightColor:"#f00",
        borderLeftWidth:1,
        borderRightWidth:1,
        marginHorizontal:10,
        borderRadius:5,
    },
    numeros:{
        width:"9%",
        height:"10%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        borderLeftColor:"#f00",
        borderRightColor:"#f00",
        borderLeftWidth:1,
        borderRightWidth:1,
        marginHorizontal:1,
        borderRadius:5,
    },
    txtNumerosDoPainel:{
        color:"#fff",
        fontSize:18
    },     
    //pagina resultados

    //arquivo Funcoes (função retDez ,retDez2 )
    dezenas:{
        width:26,
        height:26,
        borderRadius:13,
        textAlign:"center",
        lineHeight:26,
        color:"#fff",
        fontSize:14,
        marginVertical:2,
        marginHorizontal:3
    },
    //Arquivo minhasApostas
    conteinerFlat:{
        width:"100%",
        height:"92%",
        flexDirection:"row",
    }, 
    //Arquivo Resultados
    conteinerFlatResultados:{
        width:"100%",
        //height:"72%",
        flexDirection:"row",
    }, 
    conteinerResultado:{
        width:"100%",    
        height:"37%",
        flexDirection:"column",
        overflow:"hidden",
    },
    conteinerBtnConcursosDupla:{
        width:"100%",
        height:"92%",
        alignItems:"center",
        justifyContent:"center",
        padding:20
    },
    btnConcursosDupla:{
        width:"20%",
        padding:5,
        backgroundColor:"#844",
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
    },
    txtBtnConcursosDupla:{
        color:"#fff",
        fontSize:20
    },
    //Arquivos ModalResultadosDuplaSena1 e ModalResultadosDuplaSena2
    conteinerGeralResultados:{
        width:"100%",
        borderWidth:1,
        borderColor:"#00f"
    },
    conteinerTxtConsursoAcumulado:{
        width:"100%",
        backgroundColor:"#844",
        paddingVertical:5,
        alignItems:"center",
        justifyContent:"center",
        
    },
    txtConcursoAcumulado:{
        fontSize:25,
        fontWeight:"bold"
    },
    conteinerResultadosDS:{
        width:"100%",
        height:"100%",
        flexDirection:"row",
    },

})