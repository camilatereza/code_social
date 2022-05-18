import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {
    Text,
    View
} from "react-native";
import { sortCommands } from "../../utils/commands";

import { Styles } from "./styles";

export function Home() {
    const tab = createBottomTabNavigator();

    // const command = [];
    // for (let i = 0; i < sortCommands().length; i++) {
    //     command.add;
    // }
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
            >
                {
                    sortCommands().map(
                        (item, index) => {
                            return (
                                <View incolun key={index}>
                                    <Text style={Styles.commands_data}>
                                        {item.text}
                                    </Text>
                                </View>
                            );
                        }
                    )
                }

            </View>
        </View>
    )
}