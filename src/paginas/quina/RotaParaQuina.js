import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Quina from './Quina'
import  MinhasApostasQuina from './MinhasApostasQuina'
import ResultadosQuina from './ResultadosParaQuina'


export default function RotaParaMegaSena(){

    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator initialRouteName="Quina"
          screenOptions={{
            drawerStyle:{
              backgroundColor:"#428",
              paddingTop:25,
            },
            drawerActiveBackgroundColor:"#fff",
            drawerActiveTintColor:"#428",
            drawerInactiveTintColor:"#fff",
            drawerLabelStyle:{
              fontSize:18,
            },
            title:"Quina"
          }}
        >
            <Drawer.Screen 
                name="Quina" 
                component={Quina} 
                options={{
                    headerShown:false
                  }}
            />

        <Drawer.Screen 
            name="Minhas Apostas Quina"
            component={MinhasApostasQuina} 
            options={{
              headerStyle:{
                backgroundColor:"#428",
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
          name="Resultados Quina"
          component={ResultadosQuina}
          options={{
            headerStyle:{
              backgroundColor:"#428",
              height:60,
            },
            headerTintColor:"#fff",
            headerTitleAlign:"center",
            headerTitleStyle:{
              fontSize:25,
            },
            title:"Resultado Quina"
          }}            
        />
        </Drawer.Navigator>
    )
}