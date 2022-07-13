import { Dimensions, StyleSheet } from "react-native";
import { normalize } from "../../components/dimensoes";
import { theme } from "../../global/styles/theme";

const widthD = Dimensions.get("screen").width;
const heightD = Dimensions.get("screen").height;

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
        width: widthD/1.15,
        height: heightD/1.5,
        justifyContent: 'center',
        margin: normalize(25),
        borderRadius: normalize(40)
    },
    title: {
        //estilo dos comandos
        color: theme.colors.heading,
        fontFamily: theme.fonts.title,
        fontSize: 18,
        textAlign: "center",
        margin: normalize(10)
    },
    text: {
        //estilo dos comandos
        color: theme.colors.heading,
        fontFamily: theme.fonts.text,
        fontSize: 15,
        textAlign: 'justify',
        marginHorizontal: normalize(10),
        marginTop: normalize(5)
    },
    end: {
        //estilo dos comandos
        color: theme.colors.heading,
        fontFamily: theme.fonts.text,
        fontSize: 16,
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
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.heading,
        fontFamily: theme.fonts.text
    }
})