import { useState } from "react";

import Checkbox from "expo-checkbox";
import {
    Text,
    View
} from "react-native";

import { sortCommands } from "../../utils/commands";
import { Styles } from "./styles";
import { listCommands } from "../../components/menuBar";

export function Home() {

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
                    listCommands.map((item, index, listCommands) => {
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