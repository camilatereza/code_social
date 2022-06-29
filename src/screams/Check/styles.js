import { StyleSheet } from "react-native";
import { normalize } from "../../components/dimensoes";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        //estilo do painel geral
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center"
    },
    panel: {
        //estilo do painel de checkpoint
        backgroundColor: theme.colors.panelSecun,
        width: normalize(275),
        height: normalize(480),
        justifyContent: 'center',
        margin: normalize(25),
        borderRadius: normalize(40)
    },
    title: {
        //estilo dos comandos
        color: theme.colors.heading,
        fontFamily: theme.fonts.title,
        fontSize: normalize(17),
        textAlign: "center",
        margin: normalize(10)
    },
    text: {
        //estilo dos comandos
        color: theme.colors.heading,
        fontFamily: theme.fonts.text,
        fontSize: normalize(15),
        textAlign: 'justify',
        marginHorizontal: normalize(10),
        marginTop: normalize(5)
    },
    end: {
        //estilo dos comandos
        color: theme.colors.heading,
        fontFamily: theme.fonts.text,
        fontSize: normalize(15),
        textAlign: "right",
        margin: normalize(20)
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.panelGeneral,
        marginHorizontal: normalize(15),
        marginTop: normalize(65),
        height: normalize(40),
        width: normalize(90),
        borderRadius: normalize(9),
    },
    btnTexto: {
        fontSize: normalize(15),
        fontWeight: 'bold',
        color: theme.colors.heading,
        fontFamily: theme.fonts.text
    }
})