import { useState } from "react";

import Checkbox from "expo-checkbox";
import {
    Text,
    View,
    TouchableOpacity
} from "react-native";

import { sortCommands } from "../../utils/commands";
import { Styles } from "./styles";

export function Home() {
    const [instructions, setInstruction] = useState()

    function render() {
        if (instructions === undefined) {
            return sortCommands();
        }
        return instructions
    }
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

                    render().map((item, index) => {
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

            {/* Botão de play */}
            <TouchableOpacity
                style={Styles.button}
                activeOpacity={0.5}
                onPress={() => {
                    setInstruction({});
                    setInstruction(sortCommands());
                }}
            >
                <Text style={Styles.btnTexto}>Novos</Text>
            </TouchableOpacity>
        </View>
    )
}
