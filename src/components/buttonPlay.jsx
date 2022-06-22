import React from "react";
import { View, Text } from "react-native";
import { Checkbox } from "expo-checkbox";

export function buttonPlayHome() {
  sortCommands().map((item, index) => {
    const [isChecked, setChecked] = useState(false);
    return (
      <View
        incolun
        key={index}
        flexDirection={'row'}
      ><Checkbox
          style={Styles.checkBox}
          value={isChecked}
          key={index}
          onValueChange={setChecked}
        />
        <Text
          style={Styles.commands_data}
          key={index}
        >
          {item.text}
        </Text>
      </View>
    );
  })
}