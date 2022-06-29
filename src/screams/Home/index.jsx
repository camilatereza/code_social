import { useState } from "react";

import {
    Text,
    View,
    TouchableOpacity
} from "react-native";

import { sortCommands } from "../../utils/commands";
import { Styles } from "./styles";

export function Home() {
    const [instructions, setInstruction] = useState()
    const [ordem, setOrdem] = useState([])
    const empty = ["", "", "", "", "", "", "", "",];

    function render() {
        if (instructions === undefined) {
            return empty;
        }
        return instructions
    }

    const temp = [];
    function chose() {
        const choseList = []
        for (var i = 0; i < temp.length; i++) {
            choseList.push((i + 1) + ' - ' + temp[i] + '; ')
        }
        setOrdem(choseList)
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
            <View style={Styles.content}>
                <View
                    //painel sorteador de comandos do jogo
                    style={Styles.commands}
                >
                    {render().map((item, index) => {
                        return (
                            <View
                                incolun
                                key={index}
                                flexDirection={'row'}
                            >
                                <TouchableOpacity
                                    style={Styles.selector}
                                    key={index}
                                    activeOpacity={0.10}
                                    onPress={() => {
                                        temp.push(item.text)
                                        alert('Você selecionou: ' + item.text)
                                    }}
                                />
                                <Text style={Styles.commands_data}>
                                    {item.text}
                                </Text>
                            </View>
                        );
                    })}

                </View>

                <View style={Styles.bntArea}>

                    {/* Botão de play */}
                    <TouchableOpacity
                        style={Styles.button}
                        activeOpacity={0.5}
                        onPress={() => {
                            setInstruction(sortCommands());
                        }}
                    >
                        <Text style={Styles.btnTexto}>Novos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={Styles.button}
                        activeOpacity={0.5}
                        onPress={() => {
                            chose()
                        }}
                    >
                        <Text style={Styles.btnTexto}>Ordem</Text>
                    </TouchableOpacity>
                </View>

                <Text style={Styles.chosen}>
                    {ordem}
                </Text>


            </View>
        </View>
    )
}
