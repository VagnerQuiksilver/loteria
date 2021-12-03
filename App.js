import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/paginas/home/Home"
import RotaParaMegaSena from './src/paginas/megaSena/RotaParaMegaSena'
import RotaParaDuplaSena from './src/paginas/duplaSena/RotaParaDuplaSena'
import RotaParaLotofacil from './src/paginas/lotofacil/RotaParaLotofacil'
import RotaParaQuina from './src/paginas/quina/RotaParaQuina'

export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home}  
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen 
          name="RotaParaDuplaSena" 
          component={RotaParaDuplaSena}
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen 
          name="RotaParaLotofacil" 
          component={RotaParaLotofacil}
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen 
          name="RotaParaMegaSena" 
          component={RotaParaMegaSena}
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen 
          name="RotaParaQuina" 
          component={RotaParaQuina}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


