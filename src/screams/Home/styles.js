import { StyleSheet } from "react-native";
import { normalize } from "../../components/dimensoes";
import { theme } from "../../global/styles/theme";

export const Styles = StyleSheet.create({
    container: {
        //estilo do painel geral
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center"
    },
    panel: {
        //estilo do painel inicial
        backgroundColor: '#817CCC',
        width: normalize(325),
        height: normalize(155),
        borderBottomLeftRadius: normalize(50),
        borderBottomRightRadius: normalize(50),
    },
    title: {
        //estilo do titulo
        color: theme.colors.heading,
        fontFamily: theme.fonts.title,
        textAlign: 'center',
        fontSize: normalize(35),
        marginBottom: normalize(25),
        marginTop: normalize(70)
    },
    commands: {
        //estilo do painel de comandos
        backgroundColor: '#AE91E1',
        width: normalize(270),
        height: normalize(250),
        marginTop: normalize(45),
        marginVertical: normalize(25),
        borderRadius: normalize(20),
        justifyContent: 'center',
    },
    commands_data: {
        //estilo dos comandos
        color: theme.colors.heading,
        fontFamily: theme.fonts.text,
        fontSize: normalize(15),
        margin: normalize(3),
        marginVertical: normalize(5)
    },
    checkBox: {
        // margin: normalize(15),
        marginHorizontal: normalize(15),
        marginVertical: normalize(5),
        backgroundColor: '#5A5397',
        borderColor: '#5A5397'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.panelGeneral,
        height: normalize(40),
        width: normalize(70),
        borderRadius: normalize(9),
    },
    btnTexto: {
        fontSize: normalize(16),
        fontWeight: 'bold',
        color: theme.colors.heading,
        fontFamily: theme.fonts.text
    }
})