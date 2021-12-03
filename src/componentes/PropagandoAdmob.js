import React from 'react'
import {View} from 'react-native'
import {AdMobBanner,setTestDeviceIDAsync} from 'expo-ads-admob';

import Estilos from '../estilos/Estilos'

export default function PropagandoAdmob(){
    return(
        <View style={Estilos.conteinerAdmob}>
            <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-3940256099942544/6300978111"
                servePersonalizedAds // true or false
                setTestDeviceIDAsync //true or false
                onDidFailToReceiveAdWithError={(erro)=>{console.log(erro)}} 
            />
        </View>
    )
}
