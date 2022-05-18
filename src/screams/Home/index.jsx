import React, { useState } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Checkbox from "expo-checkbox";
import {
    Text,
    View
} from "react-native";

import { sortCommands } from "../../utils/commands";
import { Styles } from "./styles";

export function Home() {
    const tab = createBottomTabNavigator();
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={Styles.container}>

            <View
                //painel customizado com titulo do app
                style={Styles.panel}
            ><Text style={Styles.title}>
                    Code Social
                </Text>
            </View>

            <View
                //painel sorteador de comandos do jogo
                style={Styles.commands}
            >{
                    sortCommands().map((item, index) => {
                        return (
                            <View
                                incolun
                                key={index}
                                flexDirection={'row'}
                            ><Checkbox
                                    style={Styles.checkBox}
                                    value={isChecked}
                                    onChange={setChecked}
                                />
                                <Text style={Styles.commands_data}>
                                    {item.text}
                                </Text>
                            </View>
                        );
                    })
                }
            </View>
        </View>
    )
}