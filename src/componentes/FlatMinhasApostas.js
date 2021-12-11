import React from 'react'
import {View,Text,FlatList,StyleSheet} from 'react-native'
import ItemRenderizado from  '../componentes/ItemRenderizado'
import PropagandoAdmob from './PropagandoAdmob'

export default function FlatMinhasApostas(props){
    return(
        <>
            {props.apostas?
                props.dezena?
                    props.apostas.length>0?
                        props.sort2 ?
                            <FlatList
                            data={props.apostas}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item)=>String(item.id)}
                            renderItem={({item})=> <ItemRenderizado 
                                item={item} 
                                jogo={props.jogo} 
                                cor={props.cor} 
                                setApostas={props.setApostas} 
                                apostas={props.apostas}
                                dezena={props.dezena}
                                sort2={props.sort2}
                                />
                            }
                            horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                        />
                        :
                        <FlatList
                            data={props.apostas}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item)=>String(item.id)}
                            renderItem={({item})=> <ItemRenderizado 
                                item={item} 
                                jogo={props.jogo} 
                                cor={props.cor} 
                                setApostas={props.setApostas} 
                                apostas={props.apostas}
                                dezena={props.dezena}
                                
                                />
                            }
                            horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                        />
                        :
                        (<View style={Estilos.conteinerTxtMsg}> 
                            <Text style={[Estilos.txtMsg,{color:props.cor}]}>Você não possui apostas para esse concurso.</Text>
                        </View>)
                        
                    :
                    <FlatList
                        data={props.apostas}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item)=>String(item.id)}
                        renderItem={({item})=> <ItemRenderizado 
                            item={item} 
                            jogo={props.jogo} 
                            cor={props.cor} 
                            setApostas={props.setApostas} 
                            apostas={props.apostas}/>
                        }
                    />
            :
                <View style={Estilos.conteinerTxt}>
                    <Text style={Estilos.txt}>Você não possui nenhuma aposta salva até o momento.</Text>
                    <PropagandoAdmob/>
                </View>
            }
        </>
    )
}
const Estilos=StyleSheet.create({

    conteinerTxtMsg:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:10,
        height:"72%",
        flexWrap:"wrap",
    },
    txtMsg:{
        fontSize:20,
        textAlign:"center"
    },
    conteinerTxt:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        flexWrap:"wrap",
    },
    txt:{
        fontSize:18,
        textAlign:"center",
        color:"#000",
    },
})