import { StyleSheet } from "react-native";
import { normalize } from "../../components/dimensoes";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        //estilo do painel geral
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    panel: {
        //estilo do painel de checkpoint
        backgroundColor: '#AE91E1',
        width: normalize(270),
        height: normalize(470),
        justifyContent: 'center',
        margin: normalize(25),
        borderRadius: normalize(40)
    },
    text: {
        //estilo dos comandos
        color: theme.colors.heading,
        fontFamily: theme.fonts.text,
        fontSize: normalize(15),
        textAlign: 'justify',
        margin: normalize(8)
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.panelGeneral,
        marginTop: normalize(65),
        height: normalize(40),
        width: normalize(70),
        borderRadius: normalize(9),
    },
    btnTexto: {
        fontSize: normalize(15),
        fontWeight: 'bold',
        color: theme.colors.heading,
        fontFamily: theme.fonts.text
    }
})