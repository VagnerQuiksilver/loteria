import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import DuplaSena from './DuplaSena'
import MinhasApostas from './MinhasApostasDuplaSena'
import ResultadosDuplaSena from './ResultadosDuplaSena'


export default function RotaParaDuplaSena(){

    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator initialRouteName="DuplaSena"
          screenOptions={{
            drawerStyle:{
              backgroundColor:"#844",
              paddingTop:25,
            },
            drawerActiveBackgroundColor:"#fff",
            drawerActiveTintColor:"#844",
            drawerInactiveTintColor:"#fff",
            drawerLabelStyle:{
              fontSize:18,
            },
            title:"Dupla-sena"
          }}
        >
        <Drawer.Screen 
            name="DuplaSena" 
            component={DuplaSena}           
            options={{
              headerShown:false
            }}
        />
        <Drawer.Screen 
            name="Minhas Apostas Dupla Sena"
            component={MinhasApostas} 
            options={{
              headerStyle:{
                backgroundColor:"#844",
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
          name="Resultados Dupla Sena"
          component={ResultadosDuplaSena}
          options={{
            headerStyle:{
              backgroundColor:"#844",
              height:50,
            },
            headerTintColor:"#fff",
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:25,
            },
            title:"Resultado dupla-sena"
          }}            
        />
      </Drawer.Navigator>
    )
}