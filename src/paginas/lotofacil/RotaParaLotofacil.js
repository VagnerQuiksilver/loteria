import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Lotofacil from './Lotofacil'
import MinhasApostasLotofacil from './MinhasApostasLotofacil'
import ResultadosLotofacil from './ResultadoLotofacil'


export default function RotaParaLotofacil(){

    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator initialRouteName="Lotofacil"
          screenOptions={{
            drawerStyle:{
              backgroundColor:"#626",
              paddingTop:25,
            },
            drawerActiveBackgroundColor:"#fff",
            drawerActiveTintColor:"#626",
            drawerInactiveTintColor:"#fff",
            drawerLabelStyle:{
              fontSize:18,
            },
            title:"Lotofacil"
          }}
        >
        <Drawer.Screen 
            name="Lotofacil" 
            component={Lotofacil} 
            options={{
              headerShown:false
            }}    
        />
        <Drawer.Screen 
            name="Minhas Apostas Lotofacil"
            component={MinhasApostasLotofacil} 
            options={{
              headerStyle:{
                backgroundColor:"#626",
              },
              headerTintColor:"#fff",
              headerTitleAlign:"center",
              headerTitleStyle:{
                fontSize:25,
              },
              title:"Minhas apostas",                        
            }}
        />
        <Drawer.Screen
          name="Resultados Lotofacil"
          component={ResultadosLotofacil}
          options={{
            headerStyle:{
              backgroundColor:"#626",
              height:60,
            },
            headerTintColor:"#fff",
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:25,
            },
            title:"Resultado lotofácil"
          }}            
        />
      </Drawer.Navigator>
    )
}