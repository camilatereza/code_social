import { StatusBar } from 'react-native';

import { OverpassMono_400Regular, OverpassMono_700Bold } from '@expo-google-fonts/overpass-mono';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes/menu.routes';

export default function App() {

  // configuração de fontes do app
  const [fontsLoaded] = useFonts({
    OverpassMono_400Regular,
    OverpassMono_700Bold
  })

  // Mostrar o splsh enquanto as fontes não forem carregadas
  if (!fontsLoaded) {
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
        <Routes />
      </NavigationContainer>
    </>
  )
}