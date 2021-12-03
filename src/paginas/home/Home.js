import React from 'react'
import {Text, TouchableOpacity, SafeAreaView,View} from 'react-native'

import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 

import Estilos from './Estilos'

export default function Home({navigation}){
    return(

        <SafeAreaView style={Estilos.conteinerGeral}>  
            <View style={Estilos.conteinerHome}>      
                <TouchableOpacity  onPress={()=>navigation.navigate("RotaParaDuplaSena")} style={Estilos.conteinerIcon}>
                    <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#844',justifyContent:'center',alignItems:'center'}}>  
                        <MaterialCommunityIcons name="clover" size={35} color="#fff" />
                    </View>
                    <Text style={Estilos.fonteIcon}>Dupla Sena</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={()=>navigation.navigate("RotaParaLotofacil")} style={Estilos.conteinerIcon}>
                <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#626',justifyContent:'center',alignItems:'center'}}>  
                        <MaterialCommunityIcons name="clover" size={35} color="#fff" />
                    </View>
                    <Text style={Estilos.fonteIcon}>Lotofácil</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={()=>navigation.navigate("RotaParaMegaSena")} style={Estilos.conteinerIcon}>
                    <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#484',justifyContent:'center',alignItems:'center'}}>  
                        <MaterialCommunityIcons name="clover" size={35} color="#fff" />
                    </View>
                    <Text style={Estilos.fonteIcon}>Mega Sena</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={()=>navigation.navigate("RotaParaQuina")} style={Estilos.conteinerIcon}>
                    <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#428',justifyContent:'center',alignItems:'center'}}>  
                        <MaterialCommunityIcons name="clover" size={35} color="#fff" />
                    </View>
                    <Text style={Estilos.fonteIcon}>Quina</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>          
    )
}