import React from "react";
import { Surface } from "@react-native-material/core";
import {
  Image,
  Text, 
  TouchableOpacity, 
  View,
  Alert
} from "react-native";

import { Styles } from '../global/styles/tabStyle';
import { random } from "../utils/commands";
import { normalize } from "./dimensoes";

export function MyTabBar({navigation, callback }) {

  return (
    <Surface
      elevation={9}
      category='medium'
      style={Styles.container}
    >
      {/* Tela inicial */}
      <TouchableOpacity
        style={Styles.button}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Image
          source={require('../global/assets/navigation/Home.png')}
          style={Styles.image}
        />
        <Text style={Styles.text}>
          Início
        </Text>
      </TouchableOpacity>

      {/* Tela de Checkpoint */}
      <TouchableOpacity
        style={Styles.button}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('Checkpoint');
        }}
      >
        <Image
          source={require('../global/assets/navigation/Check.png')}
          style={Styles.image}
        />
        <Text style={Styles.text}>
          Check
        </Text>
      </TouchableOpacity>

      {/* Botão do dado */}
      <TouchableOpacity
        style={Styles.button}
        activeOpacity={0.5}
        onPress={
          ()=> {
          const value = '' + [random(1,6)];
          Alert.alert('Dado', value, [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ])
        }}
      >
        <View style={Styles.dado}>
          <Image
            source={require('../global/assets/Dado.png')}
            style={{
              height: normalize(25),
              width: normalize(25)
            }}
          />
        </View>
      </TouchableOpacity>

      {/* Tela de temporizador */}
      <TouchableOpacity
        style={Styles.button}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('Timer');
        }}
      >
        <Image
          source={require('../global/assets/navigation/Timer.png')}
          style={Styles.image}
        />
        <Text style={Styles.text}>
          Temp
        </Text>
      </TouchableOpacity>

      {/* Botão de voltar ou sair */}
      <TouchableOpacity
        style={Styles.button}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('Rules');
        }}
      >
        <Image
          source={require('../global/assets/Rules.png')}
          style={Styles.image}
        />
        <View style={Styles.button}>
          <Text style={Styles.text}>
            Regras
          </Text>
        </View>
      </TouchableOpacity>
    </Surface>
  );
}
