import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import MegaSena from './MegaSena'
import MinhasApostasMegaSena from './MinhasApostasMegaSena'
import ResultadosMegaSena from "./ResultadosParaMegaSena"


export default function RotaParaMegaSena(){

    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator initialRouteName="MegaSena"
          screenOptions={{
            drawerStyle:{
              backgroundColor:"#484",
              paddingTop:25,
            },
            drawerActiveBackgroundColor:"#fff",
            drawerActiveTintColor:"#484",
            drawerInactiveTintColor:"#fff",
            drawerLabelStyle:{
              fontSize:18,
            },
            title:"Mega-sena"
          }}
        >
        <Drawer.Screen 
            name="MegaSena" 
            component={MegaSena} 
            options={{
              headerShown:false
            }}
        />

        <Drawer.Screen 
            name="Minhas Apostas Mega Sena"
            component={MinhasApostasMegaSena} 
            options={{
              headerStyle:{
                backgroundColor:"#484",
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
          name="Resultados Mega Sena"
          component={ResultadosMegaSena}
          options={{
            headerStyle:{
              backgroundColor:"#484",
              height:60,
            },
            headerTintColor:"#fff",
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:25,
            },
            title:"Resultado mega-sena"
          }}            
        />
      </Drawer.Navigator>
    )
}