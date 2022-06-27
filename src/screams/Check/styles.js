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
        backgroundColor: '#AE91E1',
        width: normalize(275),
        height: normalize(480),
        justifyContent: 'center',
        margin: normalize(25),
        borderRadius: normalize(40)
    },
    title: {
        //estilo dos comandos
        color: theme.colors.heading,
        fontFamily: theme.fonts.text,
        fontSize: normalize(15),
        textAlign: "center",
        margin: normalize(10)
    },
    text: {
        //estilo dos comandos
        color: theme.colors.heading,
        fontFamily: theme.fonts.text,
        fontSize: normalize(15),
        textAlign: 'justify',
        margin: normalize(10)
    },
    font: {
        //estilo dos comandos
        color: theme.colors.heading,
        fontFamily: theme.fonts.text,
        fontSize: normalize(15),
        textAlign: "right",
        margin: normalize(10)
    },
    btnArea: {
        flexDirection: 'row',
        // marginTop: normalize(10),
        // height: normalize(10),
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