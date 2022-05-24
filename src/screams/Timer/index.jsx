import React from "react";
import { View, Text } from "react-native";
import { Styles } from "./styles";

export function Timer() {

  return (
    <View
      style={Styles.container}
    >
      <View style={Styles.square}>
        <View style={Styles.circle}>
          <Text style={Styles.clock}>
            00:00:00
          </Text>
        </View>
      </View>
    </View>
  );
}