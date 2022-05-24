import React, {useState} from "react";
import { Surface } from "@react-native-material/core";
import { Styles } from '../global/styles/tabStyle';
import { TouchableOpacity, Image, Text, View } from "react-native";

import { sortCommands } from "../utils/commands";
import { sortCheck } from "../utils/dataCheck"

export function MyTabBar({ state, descriptor, navigation }) {

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

      {/* Botão de play */}
      <TouchableOpacity
        style={Styles.button}
        activeOpacity={0.5}
        onPress={() => {
          const play = navigation.getState() == 'Home' ? sortCommands() :
            navigation.getState() == 'Checkpoint' ? sortCheck() :
            navigation.getState() == 'Timer' ? run() : '';
        }}
      >
        <View style={Styles.play}>
          <Image
            source={require('../global/assets/Play.png')}
            style={{
              height: 30,
              width: 30
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
          const state = navigation.getState() == 'Home' ? navigation.stop() : navigation.goBack();
        }}
      >
        <Image
          source={require('../global/assets/Logout.png')}
          style={Styles.image}
        />
        <View style={Styles.button}>
          <Text style={Styles.text}>
            Voltar
          </Text>
        </View>
      </TouchableOpacity>
    </Surface>
  );
}