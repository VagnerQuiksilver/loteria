import React,{useState,useEffect} from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native'

import {exluirAposta} from '../componentes/Funcoes'
import { AntDesign } from '@expo/vector-icons'; 

import Letras from './LetrasLaterais'
import Titulo from './TituloResultado'
import Rodape from './RodapeResultado'

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ItemRenderizado(props){

    const [res,setRes]=useState([])
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    

    let resultado=[]

    props.sort2?
        useEffect(()=>{
            let iguais=true

            if(props.dezena){
                async function confereResultado(item,dezena,cor){                   
                    for(var n=0;n<item.num.length;n++){
                        for(var r=0;r<dezena.dezenas_2.length;r++){
                            if(item.num[n]==dezena.dezenas_2[r]){
                                iguais=false
                                resultado.push(<Text style={[Estilos.txtNumeros,{backgroundColor:cor,color:"#fff"}]} key={n}>{item.num[n]}</Text>)  
                            }
                        }
                        if(iguais){
                            resultado.push(<Text style={Estilos.txtNumeros} key={n}>{item.num[n]}</Text>)
                        }
                        iguais=true
                    }          
                    setRes(await resultado) 
                }
                confereResultado(props.item,props.dezena,props.cor)
            }
        },[]) 
        :
        useEffect(()=>{
            let iguais=true

            if(props.dezena){
                async function confereResultado(item,dezena,cor){                   
                    for(var n=0;n<item.num.length;n++){
                        for(var r=0;r<dezena.dezenas.length;r++){
                            if(item.num[n]==dezena.dezenas[r]){
                                iguais=false
                                resultado.push(<Text style={[Estilos.txtNumeros,{backgroundColor:cor,color:"#fff"}]} key={n}>{item.num[n]}</Text>)  
                            }
                        }
                        if(iguais){
                            resultado.push(<Text style={Estilos.txtNumeros} key={n}>{item.num[n]}</Text>)
                        }
                        iguais=true
                    }          
                    setRes(await resultado) 
                }
                confereResultado(props.item,props.dezena,props.cor)
            }
        },[])   


    return(

        <View style={[Estilos.jogo,{width:windowWidth,height:windowHeight/2}]}>
            <View style={Estilos.lateralFlat}>
                <Letras letra="s" angulo="esq"/>
                <Letras letra="a" angulo="esq"/>
                <Letras letra="t" angulo="esq"/>
                <Letras letra="s" angulo="esq"/>
                <Letras letra="o" angulo="esq"/>
                <Letras letra="p" angulo="esq"/>
                <Letras letra="a" angulo="esq"/>
                <Letras letra="-" angulo="esq"/>
                <Letras letra="s" angulo="esq"/>
                <Letras letra="a" angulo="esq"/>
                <Letras letra="h" angulo="esq"/>
                <Letras letra="n" angulo="esq"/>
                <Letras letra="i" angulo="esq"/>
                <Letras letra="m" angulo="esq"/>     

                <View style={Estilos.conteinerTrevoLateral}>
                    <MaterialCommunityIcons name="clover" size={40} color="#8df" />
                </View>         
            </View>

            <View style={Estilos.central}>  

                <Titulo item={props.item} jogo={props.jogo}/>

                    {props.dezena?  
                        <View style={Estilos.conteinerRetornoFlatList}>
                            <View style={Estilos.conteinerNumeros}>
                                {res}
                            </View>
                            <View style={Estilos.conteinerTouchable}>

                            </View>
                        </View>
                        :
                        <View style={Estilos.conteinerRetornoFlatList}>
                            <View style={Estilos.conteinerNumeros}>
                                {
                                    props.item.num.map((e,c)=>{
                                        return (<Text style={Estilos.txtNumeros} key={c}>
                                                    {e}
                                                </Text>)})
                                }
                            </View>
                            <View style={Estilos.conteinerTouchable}>
                                <TouchableOpacity style={Estilos.touchable}
                                    onPress={()=>exluirAposta(props.item.id,props.jogo,props.setApostas,props.item.conc)}
                                >
                                    <AntDesign name="delete" size={24} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                <Rodape item={props.item}/>
            </View>

            <View style={Estilos.lateralFlat}>               
                <View style={Estilos.conteinerTrevoLateral}>
                    <MaterialCommunityIcons name="clover" size={40} color="#8df" />
                </View> 

                <Letras letra="m" angulo="dir"/>
                <Letras letra="i" angulo="dir"/>
                <Letras letra="n" angulo="dir"/>
                <Letras letra="h" angulo="dir"/>
                <Letras letra="a" angulo="dir"/>
                <Letras letra="s" angulo="dir"/>
                <Letras letra="-" angulo="dir"/>
                <Letras letra="a" angulo="dir"/>
                <Letras letra="p" angulo="dir"/>
                <Letras letra="o" angulo="dir"/>
                <Letras letra="s" angulo="dir"/>
                <Letras letra="t" angulo="dir"/>
                <Letras letra="a" angulo="dir"/>
                <Letras letra="s" angulo="dir"/>             
            </View>
        </View>
    )
}
const Estilos=StyleSheet.create({
    jogo:{
        flexDirection:"row",
        marginBottom:10,
        borderColor:"#ccc",
        borderWidth:1,
        marginVertical:5,
        //marginRight:5
    },
    lateralFlat:{
        width:"10%",
        height:"100%",
        alignItems:"center",
        justifyContent:"space-around",
        paddingVertical:10,
    },
    conteinerTrevoLateral:{
        width:"100%",
        height:"15%",
        alignItems:"center",
        justifyContent:"center",
    },
    central:{
        width:"80%",
        height:"100%",
    },
    conteinerRetornoFlatList:{
        width:"100%",
        height:"35%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    conteinerNumeros:{
        width:"85%",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"flex-start"
    },
    txtNumeros:{
        width:40,
        height:40,
        textAlign:"center",
        lineHeight:40,
        borderRadius:20,
        color:"#000",
        marginRight:5,
        fontSize:25,

    },
    conteinerTouchable:{
        width:"15%",
        justifyContent:"center",
        alignItems:"center",
    },
    touchable:{
        width:36,
        height:36,
        borderRadius:18,
        backgroundColor:"#b00",
        justifyContent:"center",
        alignItems:"center",
    },
})
