import { useState } from "react";

import Checkbox from "expo-checkbox";
import {
    Text,
    View
} from "react-native";

import { sortCommands } from "../../utils/commands";
import { Styles } from "./styles";

export function Home({inst}) {
    function render() {
        console.log(inst)
        if(inst === undefined){
            return sortCommands();
        }
        return inst
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
        </View>
    )
}
