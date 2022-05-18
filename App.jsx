import React from 'react';
import { StatusBar } from 'react-native';

import { OverpassMono_400Regular, OverpassMono_700Bold } from '@expo-google-fonts/overpass-mono';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    OverpassMono_400Regular,
    OverpassMono_700Bold
  })

  if (!fontsLoaded) {
    //carregar splash por enquanto
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        //Configuração da barra de status
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </>
  )
}