import React from "react";
import {
  Image,
  View,
  ScrollView
} from "react-native";
import { Styles } from "./styles";

export function Rules() {

  return (
    <View style={Styles.container}>
      <View style={Styles.slider}>
        <ScrollView
          pagingEnabled={true}
          horizontal
          snapToAlignment={"center"}
          style={Styles.scroll}
        >
          <Image
            source={require('../../global/assets/rules/first.png')}
            style={Styles.image}
          />
          <Image
            source={require('../../global/assets/rules/howPlay.png')}
            style={Styles.image}
          />
          <Image
            source={require('../../global/assets/rules/check.png')}
            style={Styles.image}
          />
          <Image
            source={require('../../global/assets/rules/moveOne.png')}
            style={Styles.image}
          />
          <Image
            source={require('../../global/assets/rules/moveTwo.png')}
            style={Styles.image}
          />
          <Image
            source={require('../../global/assets/rules/command.png')}
            style={Styles.image}
          />
          <Image
            source={require('../../global/assets/rules/consequenceOne.png')}
            style={Styles.image}
          />
          <Image
            source={require('../../global/assets/rules/consequenceTwo.png')}
            style={Styles.image}
          />

        </ScrollView>
      </View>
    </View>
  )
}