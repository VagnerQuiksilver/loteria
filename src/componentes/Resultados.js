import React from  'react'
import {View,Text,StyleSheet} from 'react-native'
import TxtResultados from './TxtResultados'

export default function Resultados(props){

    return(
        <>
                <View style={Estilos.conteinerNumsDezenas}>
                    <Text style={Estilos.txtSorteioConcurso}>Sorteio concurso: {props.dezena.numero_concurso} </Text>
                    <View style={Estilos.numeros}>

                        {props.modalResult2?
                            props.RetDez(props.dezena.dezenas_2,props.cor)
                            :
                            props.RetDez(props.dezena.dezenas,props.cor)
                        }

                    </View>
                </View>
                <View style={Estilos.conteinerTxtResultados}>
                    <View style={[Estilos.conteinerTxtCabecalho,{backgroundColor:props.cor}]}>
                        <Text style={Estilos.txtCabecalho}>Acertos </Text>
                        <Text style={Estilos.txtCabecalho}>Ganhadores </Text>
                        <Text style={Estilos.txtCabecalho}>Valor R$ </Text>
                    </View>

                    {props.tipoJogo==="duplasena" &&
                        <>
                            <TxtResultados dezena={props.dezena} pos="0"/>
                            <TxtResultados dezena={props.dezena} pos="1"/>
                            <TxtResultados dezena={props.dezena} pos="2"/>
                            <TxtResultados dezena={props.dezena} pos="3"/>
                        </>
                    }

                    {props.tipoJogo==="lotofacil" &&
                        <>
                            <TxtResultados dezena={props.dezena} pos="0"/>
                            <TxtResultados dezena={props.dezena} pos="1"/>
                            <TxtResultados dezena={props.dezena} pos="2"/>
                            <TxtResultados dezena={props.dezena} pos="3"/>
                            <TxtResultados dezena={props.dezena} pos="4"/>
                        </>
                    }

                    {props.tipoJogo==="megasena" &&
                        <>
                            <TxtResultados dezena={props.dezena} pos="0"/>
                            <TxtResultados dezena={props.dezena} pos="1"/>
                            <TxtResultados dezena={props.dezena} pos="2"/>
                        </>
                    }

                    {props.tipoJogo==="quina" &&
                        <>
                            <TxtResultados dezena={props.dezena} pos="0"/>
                            <TxtResultados dezena={props.dezena} pos="1"/>
                            <TxtResultados dezena={props.dezena} pos="2"/>
                            <TxtResultados dezena={props.dezena} pos="3"/>
                        </>
                    }
                     
                </View>                       
        </>       
    )
}
const Estilos=StyleSheet.create({

    conteinerNumsDezenas:{
        width:"100%",
        flexDirection:'column',
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"#ddd",
        paddingBottom:3
    },
    txtSorteioConcurso:{
        fontSize:18,
        color:"#333",
        fontWeight:"bold",
    },
    numeros:{
        width:"90%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        flexWrap:"wrap"        
    },  
    conteinerTxtResultados:{
        width:"100%",
        flexDirection:"column",
    },
    conteinerTxtCabecalho:{
        width:"100%",
        flexDirection:"row", 
        padding:2, 
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:1
    },
    txtCabecalho:{
        fontSize:14,
        color:"#fff",
        borderWidth:1,
        borderColor:"#fff",
        textAlign:"center",
        width:"33%",
        paddingVertical:3,
        fontWeight:"bold"
    },
  
})