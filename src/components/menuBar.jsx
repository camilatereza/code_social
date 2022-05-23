import React from "react";
import { Surface } from "@react-native-material/core";
import { Styles } from '../global/styles/tabStyle';
import { TouchableOpacity, Image, Text } from "react-native";

export function MyTabBar({ state, description, navigation }) {
  return (
    <Surface
      elevation={9}
      category='medium'
      style={Styles.container}
    >
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
          Tempo
        </Text>
      </TouchableOpacity>
    </Surface>
  );
}