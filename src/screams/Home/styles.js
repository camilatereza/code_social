import { StyleSheet } from "react-native";
import { normalize } from "../../components/dimensoes";
import { theme } from "../../global/styles/theme";

export const Styles = StyleSheet.create({
    container: {
        //estilo do painel geral
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    panel: {
        //estilo do painel inicial
        backgroundColor: '#817CCC',
        width: normalize(325),
        height: normalize(160),
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    title: {
        //estilo do titulo
        color: theme.colors.heading,
        fontFamily: theme.fonts.title,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 25,
        marginTop: 100
    },
    commands: {
        //estilo do painel de comandos
        backgroundColor: '#AE91E1',
        width: normalize(270),
        height: normalize(320),
        margin: 85,
        borderRadius: 20,
        justifyContent: 'center',
    },
    commands_data: {
        //estilo dos comandos
        color: theme.colors.heading,
        fontFamily: theme.fonts.text,
        fontSize: 19,
        margin: 10,
        marginVertical: 8
    },
    checkBox: {
        margin: 12,
        backgroundColor: '#5A5397',
        borderColor: '#5A5397'
    },
    button: {
        color: '#7C829E',
        backgroundColor: theme.colors.backgroundColor,
        height: normalize(40),
        width: normalize(40),
        borderRadius: 10
    },
    menuBar: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.backgroundColor,
        width: normalize(338),
        height: normalize(75),
        borderRadius: 20
      }
})